<script lang="ts">
  import TextField from "./TextField.svelte";
  import PartySelector from "$lib/partySelector/PartySelector.svelte";
  import type { Guest } from "../app";
  import AttendanceSelector from "$lib/AttendanceSelector.svelte";
  import PrimaryButton from "$lib/PrimaryButton.svelte";

  import { goto } from "$app/navigation";
  let partySize: number = 1;
  let phoneNumber: string = "";
  let attending: boolean = true;

  let guests: Guest[] = [];
  $: guests = Array.from({ length: partySize }, () => ({
    firstName: "",
    lastName: "",
  }));

  function updateGuest(index: number, firstName: string, lastName: string) {
    guests[index].firstName = firstName;
    guests[index].lastName = lastName;
  }

  function formatPhoneNumber(input: string) {
    // Remove all non-digit characters
    const cleaned = ("" + input).replace(/\D/g, "");

    // Match the cleaned number against the regex
    const match = cleaned.match(/^(\d{0,3})(\d{0,3})(\d{0,4})$/);

    // Format the number based on the matched groups
    if (match) {
      const part1 = match[1] ? `(${match[1]})` : "";
      const part2 = match[2] ? ` ${match[2]}` : "";
      const part3 = match[3] ? `-${match[3]}` : "";
      return `${part1}${part2}${part3}`.trim();
    }
    return input; // Return the original input if it doesn't match
  }

  function onPhoneInput(e: Event): void {
    const target = e.target as HTMLInputElement;
    const rawValue = target.value.replace(/\D/g, "").slice(0, 10);
    if (!rawValue) {
      return;
    }
    const formattedValue = formatPhoneNumber(rawValue);
    target.value = formattedValue;
    phoneNumber = formattedValue;
  }

  async function handleSubmit(e: Event) {
    try {
      const res = await fetch("/rsvp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          guests,
          phoneNumber,
          attending,
        }),
      });

      if (!res.ok) throw res;
      await goto(attending ? "/yes" : "/no");
    } catch (err) {
      console.error(err);
      await goto("/error");
    }
  }
</script>

<h1>RSVP</h1>
<div id="desc">
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Zzril facer augue
    dolores consectetuer quod nonummy blandit molestie consectetur tincidunt
    consequat. Commodo nam duo adipisici incidunt, te odio duo doming at rebum
    aliquid enim excepteur, nisi wisi consectetur voluptua cum culpa vulputate
    sed eirmod ut delenit est.
  </p>
</div>
<section>
  <form on:submit|preventDefault={handleSubmit}>
    <div class="row">
      <PartySelector bind:selectedValue={partySize} />
    </div>
    {#each guests as guest, i}
      <div class="row mobile-unfriendly">
        <TextField
          title="Guest First Name"
          value={guest.firstName}
          placeholder="John"
          onInputChange={(e) => updateGuest(i, e.target?.value, guest.lastName)}
          required
        />
        <TextField
          title="Guest Last Name"
          value={guest.lastName}
          placeholder="Doe"
          onInputChange={(e) =>
            updateGuest(i, guest.firstName, e.target?.value)}
          required
        />
      </div>
      <div class="row mobile-friendly">
        <TextField
          title="Guest First Name"
          value={guest.firstName}
          placeholder="John"
          onInputChange={(e) => updateGuest(i, e.target?.value, guest.lastName)}
          required
        />
      </div>
      <div class="row mobile-friendly">
        <TextField
          title="Guest Last Name"
          value={guest.lastName}
          placeholder="Doe"
          onInputChange={(e) =>
            updateGuest(i, guest.firstName, e.target?.value)}
          required
        />
      </div>
    {/each}
    <div class="row">
      <TextField
        title="Phone Number"
        value={phoneNumber}
        onInputChange={onPhoneInput}
        placeholder="(123) 456-7890"
        required
      />
    </div>
    <div class="row">
      <AttendanceSelector bind:attending />
    </div>

    <div id="submitBtn">
      <PrimaryButton submit>Submit RSVP</PrimaryButton>
    </div>
  </form>
</section>

<style>
  * {
    font-family: Ortica-Light, serif;
    color: var(--textPrimary);
  }

  h1 {
    font-weight: normal;
    font-size: 3.5rem;
    display: flex;
    justify-content: center;
    margin: 10rem 0 3rem 0;
  }

  p {
    width: 60%;
    font-size: 1.125rem;
    line-height: 160%;
    opacity: 80%;
  }

  #desc {
    display: flex;
    justify-content: center;
    margin-bottom: 2.5rem;
  }

  section {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  form {
    width: 85%;
  }

  .row {
    display: flex;
    width: 100%;
    margin-bottom: 1rem;
  }

  #submitBtn {
    display: flex;
    justify-content: center;
    margin-top: 3rem;
  }

  @media (max-width: 700px) {
    p {
      width: 80%;
    }

    .mobile-unfriendly {
      display: none;
    }
  }

  @media (min-width: 701px) {
    .mobile-friendly {
      display: none;
    }
  }
</style>
