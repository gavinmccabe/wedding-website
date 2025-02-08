<script lang="ts">
  import FAQItem from "./FAQItem.svelte";
</script>

<h1>FAQ</h1>
<section>
  <div class="col">
    <FAQItem question="What's the timeline of the wedding?">
      Our ceremony will begin promptly at 6pm on Monday. Please arrive early as
      we will not be able to accommodate those who arrive late. We expect
      cocktail hour to begin around 6:30pm.
    </FAQItem>
    <FAQItem question="What is the dress code?">
      We kindly request you adhere to a "Garden Party Formal" dress code.
      Additionally, we ask that neither you nor your guests wear red or any
      shade of white. Our ceremony will take place outside with an indoor
      reception to follow; therefore, please dress appropriately for the
      weather. If you need inspiration, take a look at our <a
        href="https://www.pinterest.com/yifan5wang/dress-code/"
        >Pintrest board</a
      >!
    </FAQItem>
    <FAQItem question="What food will be available?">
      Although our final menu is not available in advance, we will serve hors
      d'oeuvres at cocktail hour followed by a full buffet with multiple entrees
      and sides suited for many dietary restrictions.
    </FAQItem>
    <FAQItem question="What weather should I expect?">
      While we can't promise anything, SoCal tends to be fairly warm this time
      of year and rain is uncommon. Although our reception will be indoors, our
      ceremony will take place outdoors, so please dress appropriately.
    </FAQItem>
  </div>
  <div class="col">
    <FAQItem question="Am I permitted to bring a guest?">
      Unless included on your personalized invitation, we kindly ask you do not
      bring any uninvited guests. Due to the small, intimate nature of our
      celebration, we will be unable to accommodate those who were not formally
      invited.
    </FAQItem>
    <FAQItem question="Is transportation provided?">
      We are not providing formal transportation for our events. However, there
      is ample parking at our venue and if transportation poses a concern,
      please reach out and we can help coordinate those who wish to ride
      together.
    </FAQItem>
    <FAQItem question="How will we be updated on any changes?">
      When you RSVP, we kindly request you provide your phone number. By doing
      so, you agree for us to send you automated texts to keep you apprised of
      the events scheduled. We'll keep you up-to-date with any changes and
      reminders for our special day!
    </FAQItem>
    <FAQItem question="I have another question!">
      As we continue to plan our celebration, we will update these FAQs with
      more answers to common questions. If you have a specific question, please
      contact either the Bride or Groom, we would be happy to answer any
      question you have.
    </FAQItem>
  </div>
</section>

<style>
  .col {
    width: 35%;
    margin: 0 5%;
  }

  section {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  h1 {
    font-family: Ortica-Light, serif;
    font-weight: normal;
    font-size: 3.5rem;
    display: flex;
    justify-content: center;
    margin: 10rem 0 5rem 0;
  }

  a,
  a:visited {
    color: var(--primary);
  }

  @media (max-width: 700px) {
    section {
      flex-direction: column;
    }
    .col {
      width: 80%;
      margin: 0 10vw;
    }
  }
</style>
