import nodemailer from "nodemailer";
import { DynamoDBClient, PutItemCommand } from "@aws-sdk/client-dynamodb";
import { marshall } from "@aws-sdk/util-dynamodb";
import { error } from "@sveltejs/kit";
import {
  RSVP_EMAIL_PASS,
  RSVP_EMAIL_USER,
  RSVP_EMAIL_HOST,
  RSVP_EMAIL_DEST,
} from "$env/static/private";
import type { Guest } from "../../app";

const submissions = new Map();

async function sendEmail(guests: string[], attending: boolean) {
  try {
    console.log("***");
    console.log("RSVP_EMAIL_USER:", RSVP_EMAIL_USER);
    console.log("RSVP_EMAIL_HOST:", RSVP_EMAIL_HOST);
    console.log("RSVP_EMAIL_PASS:", RSVP_EMAIL_PASS);
    console.log("RSVP_EMAIL_DEST:", RSVP_EMAIL_DEST);
    console.log("***");
    console.log("Hello, world!");

    const transporter = nodemailer.createTransport({
      host: RSVP_EMAIL_HOST,
      secure: true,
      auth: {
        user: RSVP_EMAIL_USER,
        pass: RSVP_EMAIL_PASS,
      },
    });

    let emailBody = `
    <h1>RSVP Alert</h1>
    <p>You have a new RSVP!</p>
    `;
    for (let guest of guests) {
      emailBody += `<p><strong>${guest}</strong></p>`;
    }

    if (attending) {
      emailBody += "<p><strong>Will</strong> be attending!</p>";
    } else {
      emailBody += "<p><strong>Will not</strong> be attending!</p>";
    }
    await transporter.sendMail({
      from: `RSVP Alert <${RSVP_EMAIL_USER}>`,
      to: RSVP_EMAIL_DEST,
      subject: "New RSVP!",
      html: emailBody,
    });
  } catch (error) {
    console.error("Error in sendEmail function:", error);
  }
}

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

    const guestNames: Guest[] = formData.guests;
    let guests: string[] = [];
    for (let guest of guestNames) {
      guests.push(`${guest.firstName} ${guest.lastName}`);
    }

    await sendEmail(guests, formData.attending);

    return new Response();
  } catch (err) {
    console.log(err);
    error(500, JSON.stringify(err, null, 2));
  }
}
