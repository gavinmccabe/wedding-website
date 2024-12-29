<script lang="ts">
    import flowerDivider from "$lib/assets/flower-divider.png"
    import venueImage from "$lib/assets/venue.png"
    import PrimaryButton from "$lib/PrimaryButton.svelte";
</script>


<section id="venueInfo">
    <aside>
        <h2>The Venue</h2>
        <h1>Sterling Hills</h1>
        <p>
            Overlooking the Topanga Mountains, the stunning Tuscan architecture tucked away between strawberry fields and orange groves creates the perfect atmosphere for our special day.
        </p>
        <p>
            901 Sterling Hills Drive<br />
            Camarillo, California 93010
        </p>
    </aside>
    <figure>
        <img src="{venueImage}" alt="ceremony arch" />
    </figure>
</section>
<div id="divider">
    <img src="{flowerDivider}" alt="" />
</div>
<section>
    <div id="accommodations">
        <div class="accommodation-section">
            <h3>Hotels</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum erat id elit odio kasd dolore option, eleifend nam ullamco elit eum sea culpa aliqua augue sunt in. Labore duis stet praesent doming officia eiusmod facilisis. Dolor laoreet sit doming wisi ullamco. Volutpat dolor tincidunt. Laborum cillum sunt.</p>
        </div>
        <div class="accommodation-section">
            <h3>Travel</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum erat id elit odio kasd dolore option, eleifend nam ullamco elit eum sea culpa aliqua augue sunt in. Labore duis stet praesent doming officia eiusmod facilisis. Dolor laoreet sit doming wisi ullamco. Volutpat dolor tincidunt. Laborum cillum sunt.</p>
        </div>
        <div class="accommodation-section">
            <h3>Activities</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum erat id elit odio kasd dolore option, eleifend nam ullamco elit eum sea culpa aliqua augue sunt in. Labore duis stet praesent doming officia eiusmod facilisis. Dolor laoreet sit doming wisi ullamco. Volutpat dolor tincidunt. Laborum cillum sunt.</p>
        </div>
    </div>
    <div id="button">
        <PrimaryButton href="https://visitventuraca.com/to-do/">Explore the Area</PrimaryButton>
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

    aside, figure {
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
        margin: 15vh 8vh 8vh 8vh;
    }

    h3 {
        font-weight: normal;
        font-size: 2.6875rem;
        margin: 0 0 30px 0;
        font-family: Ortica-Light, serif;
    }

    #button {
        display: flex;
        justify-content: center;
        margin-bottom: 10rem;
    }

</style>