<script lang="ts">
import FAQItem from "./FAQItem.svelte";
</script>

<h1>FAQ</h1>
<section>
    <div class="col">
        <FAQItem question="What's the best way to get to Camarillo?">
            Camarillo is about 50 miles from downtown Los Angeles, making transportation fairly easy.  If you're driving, the 101 will take you almost directly to our beautiful venue.  For family and friends flying into Southern California, we recommend flying into Burbank (BUR), Santa Barbara (SBA), or Los Angeles (LAX).
        </FAQItem>
        <FAQItem question="What is the dress code?">
            We kindly request you adhere to a "Garden Party Formal" dress code.  Additionally, we ask that neither you nor your guests wear any shade of white.  Our ceremony will take place outside with an indoor reception to follow; therefore, please dress appropriately for the weather.
        </FAQItem>
        <FAQItem question="What food will be available?">
            Although our final menu is not available in advance, we will serve hors d'oeuvres at cocktail hour followed by a full buffet with multiple entrees and sides suited for many dietary restrictions.
        </FAQItem>
    </div>
    <div class="col">
        <FAQItem question="Where are the best places to stay in the area?">
            While Camarillo is beautiful, hotel options are limited in the area.  Depending on the scenery you're looking for, there are a lot of options nearby.  If you're looking for a mountainous view, Simi Valley has multiple great hotel options.  Those seeking a more coastal experience may enjoy Ventura or Santa Barabara.  For nicer resorts, we recommend looking in Westlake Village and Thousand Oaks.  We would recommend against staying in Los Angeles.
        </FAQItem>
        <FAQItem question="Am I permitted to bring a guest?">
            Unless included on your personalized invitation, we kindly ask you do not bring any uninvited guests or children.  Due to the small, intimate nature of our celebration, we will be unable to accommodate those who were not formally invited.
        </FAQItem>
        <FAQItem question="I have another question!">
            As we continue to plan our celebration, we will update these FAQs with more answers to common questions.  If you have a specific question, please contact either the Bride or Groom, we would be happy to answer any questino you have.
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