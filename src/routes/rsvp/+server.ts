import { DynamoDBClient, PutItemCommand } from "@aws-sdk/client-dynamodb";
import { marshall } from "@aws-sdk/util-dynamodb";
import { error } from "@sveltejs/kit";

const submissions = new Map();

export async function POST({ request }) {
  // Handle rate limiting
  const ip = request.headers.get("x-forwarded-for");
  const now = Date.now();
  const limit = 5;
  const timeframe = 60 * 1000 * 60; // 1 hour
  if (!submissions.has(ip)) {
    submissions.set(ip, []);
  }
  const timestamps = submissions.get(ip);
  const recentSubmissions = timestamps.filter(
    (timestamp: number) => now - timestamp < timeframe,
  );
  submissions.set(ip, recentSubmissions);
  if (recentSubmissions.length >= limit) {
    throw error(429, "too many submissions");
  }

  recentSubmissions.push(now);
  submissions.set(ip, recentSubmissions);

  // Handle form submission
  const formData = await request.json();
  formData.id = Math.random().toString(36).slice(2, 7);

  const client = new DynamoDBClient({ region: "us-west-1" });

  const params = {
    TableName: "wedding-rsvps",
    Item: marshall({ submissionTime: Date.now(), ...formData }),
  };

  try {
    await client.send(new PutItemCommand(params));
    return new Response();
  } catch (err) {
    console.log(err);
    error(500, JSON.stringify(err, null, 2));
  }
}
