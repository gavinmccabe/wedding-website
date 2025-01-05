<script>
  import NavBar from "$lib/NavBar.svelte";
  import Hero from "$lib/Hero.svelte";
  import OurStory from "$lib/OurStory.svelte";
  import Venue from "$lib/Venue.svelte";
  import BridalParty from "$lib/BridalParty.svelte";
  import Registry from "$lib/Registry.svelte";
  import FAQSection from "$lib/FAQSection.svelte";
  import RSVPForm from "$lib/RSVPForm.svelte";
  import Footer from "$lib/Footer.svelte";
</script>

<!-- svelte-ignore a11y_consider_explicit_label -->
<a id="home"></a>
<NavBar />
<Hero />
<!-- svelte-ignore a11y_consider_explicit_label -->
<a id="ourStory"></a>
<OurStory />
<!-- svelte-ignore a11y_consider_explicit_label -->
<a id="venue"></a>
<Venue />
<BridalParty />
<!-- svelte-ignore a11y_consider_explicit_label -->
<a id="registry"></a>
<Registry />
<!-- svelte-ignore a11y_consider_explicit_label -->
<a id="faq"></a>
<FAQSection />
<!-- svelte-ignore a11y_consider_explicit_label -->
<a id="rsvp"></a>
<RSVPForm />
<Footer />
