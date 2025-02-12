<script lang="ts">
  import flowerDivider from "$lib/assets/flower-divider.png";
  import venueImage from "$lib/assets/venue.png";
  import PrimaryButton from "$lib/PrimaryButton.svelte";
</script>

<section id="venueInfo">
  <aside>
    <h2>The Venue</h2>
    <h1>Sterling Hills</h1>
    <figure class="mobile-fig">
      <img src={venueImage} alt="ceremony arch" />
    </figure>
    <p>
      Overlooking the Topanga Mountains, the stunning Tuscan architecture tucked
      away between strawberry fields and orange groves creates the perfect
      atmosphere for our special day.
    </p>
    <p>
      901 Sterling Hills Drive<br />
      Camarillo, California 93010
    </p>
  </aside>
  <figure class="desktop-fig">
    <img src={venueImage} alt="ceremony arch" />
  </figure>
</section>
<div id="divider">
  <img src={flowerDivider} alt="" />
</div>
<section>
  <div id="accommodations">
    <div class="accommodation-section">
      <h3>Hotels</h3>
      <p>
        While Camarillo is beautiful, hotel options are limited in the area.
        Depending on the scenery you're looking for, there are a lot of options
        nearby. If you're looking for a mountainous view, both Simi Valley and
        Moorpark have multiple great hotel options. Those seeking a more coastal
        experience may enjoy Ventura or Santa Barabara. For nicer resorts, we
        recommend looking in Westlake Village and Thousand Oaks. We would
        recommend against staying in Los Angeles.
      </p>
    </div>
    <div class="accommodation-section">
      <h3>Travel</h3>
      <p>
        Camarillo is about 50 miles from downtown Los Angeles, making
        transportation fairly easy. If you're driving, the 101 will take you
        almost directly to our beautiful venue. For family and friends flying
        into Southern California, we recommend flying into Burbank (BUR), Santa
        Barbara (SBA), or Los Angeles (LAX).
      </p>
    </div>
    <div class="accommodation-section">
      <h3>Activities</h3>
      <p>
        The greater Los Angeles area has activities for everybody. Some of our
        favorites include The Getty, Griffith Observatory, Universal Studios,
        and the Huntington Library and Botanical Gardens. If you're looking for
        some specific recommendations, feel free to reach out to the bride and
        groom!
      </p>
    </div>
  </div>
  <div id="button">
    <PrimaryButton href="https://visitventuraca.com/to-do/"
      >Explore the Area</PrimaryButton
    >
  </div>
</section>

<style>
  p {
    opacity: 80%;
    line-height: 160%;
  }

  #venueInfo {
    display: flex;
    flex-direction: row;
    font-family: Ortica-Light, serif;
    color: var(--textPrimary);
    justify-content: space-around;
    align-items: center;
    margin: 8vw 0;
  }

  aside,
  .desktop-fig {
    width: 40%;
  }

  img {
    width: 90%;
  }

  h1 {
    font-weight: normal;
    font-size: 3.5rem;
    margin: 0;
  }

  h2 {
    font-weight: normal;
    font-size: 1.125rem;
    color: var(--primary);
    margin: 0;
  }

  #divider {
    display: flex;
    justify-content: center;
  }

  #divider > img {
    width: 25%;
    opacity: 0.4;
  }

  #accommodations {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .accommodation-section {
    margin: 10vw 5vw 8vw 5vw;
    width: 33%;
  }

  h3 {
    font-weight: normal;
    font-size: 2.6875rem;
    margin: 0 0 5vw 0;
    font-family: Ortica-Light, serif;
  }

  #button {
    display: flex;
    justify-content: center;
    margin-bottom: 10rem;
  }

  .mobile-fig {
    width: 100%;
    margin: 5vh 0;
    display: flex;
    justify-content: center;
  }

  .mobile-fig > img {
    width: 80%;
  }

  @media (max-width: 700px) {
    .desktop-fig {
      display: none;
    }

    aside {
      width: 80%;
    }

    #divider > img {
      width: 50%;
    }

    #divider {
      margin-bottom: 8vw;
    }

    #accommodations {
      flex-direction: column;
      align-items: center;
    }

    .accommodation-section {
      margin: 4vw 8vw;
      width: 70%;
    }
  }

  @media (min-width: 700px) {
    .mobile-fig {
      display: none;
    }
  }
</style>
