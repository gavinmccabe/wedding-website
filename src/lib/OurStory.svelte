<script>
  import image from "$lib/assets/ring.png";
</script>

<section>
  <h1>Our<br />Story</h1>
  <aside>
    <div>
      <p>
        Gavin and Amy first met as high school freshmen in 2015 at the
        county-wide science fair, though unbeknownst to each other at the time.
        Driven by curiosity, Amy couldn’t resist snooping around Gavin’s
        iPad-embedded poster board, while he was afar. As Gavin returned to his
        project, Amy quickly slipped away, embarrassed to be seen meddling with
        his work.
      </p>
      <p>
        Two years later, Gavin and Amy crossed paths again on their first day of
        Dr. Woo’s physics class, finding themselves randomly assigned as desk
        mates. A close friendship quickly developed, and by the time senior year
        began, it had blossomed into something more. Gavin and Amy spent their
        unforgettable senior year together, filled with laughter, late-night
        conversations, and shared dreams, before they began a long-distance
        relationship — one in sunny California and the other in lively New York.
      </p>
      <p>
        After countless phone calls and frequent visits, their 4.5 years of
        long-distance came to an end in late 2023. Gavin’s excitement to be
        reunited with Amy was so overwhelming that, the day she returned, he
        dropped to one knee and proposed. Under the pretense of a casual
        breakfast by the water, Gavin led Amy to the beautiful York River. As
        they casually strolled along the historic landmarks, Gavin asked Amy to
        spend forever with him.
      </p>
      <p>
        Having moved across the country together, welcomed their mischievous pup
        Waffles, and recently become homeowners, Gavin and Amy are so excited to
        begin this new chapter of their lives as husband and wife!
      </p>
    </div>
  </aside>
</section>
<img src={image} alt="ring on finger" />

<style>
  section {
    min-height: 45vw;
    background-color: var(--primary);
    color: var(--white);
    font-family: Ortica-Light, serif;
    margin-top: 100px;
    align-items: center;
  }

  h1 {
    font-weight: normal;
    font-size: 6.3125rem;
    line-height: 101%;
    display: flex;
    justify-content: center;
    padding: 3vw;
    margin: 0;
  }

  aside {
    display: flex;
    justify-content: center;
    padding: 8vw;
    font-size: 1.375rem;
    line-height: 160%;
  }

  p {
    margin: 2.75rem 0;
  }

  img {
    width: 100%;
  }

  @media (min-width: 700px) {
    section {
      display: flex;
    }

    h1 {
      width: 33%;
    }

    aside {
      width: 67%;
    }
  }
</style>
