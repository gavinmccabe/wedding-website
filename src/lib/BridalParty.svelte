<script lang="ts">
    import BridalPartySelector from "$lib/BridalPartySelector.svelte";
    import placeholder from "$lib/assets/bridal-party-placeholder.png"
    import ninaHeadshot from "$lib/assets/nina-headshot.png";
    import shiqiHeadshot from "$lib/assets/shiqi-headshot.png";

    let groomSelected = true;
</script>

<header>
    <h1>The Bridal Party</h1>
</header>
<BridalPartySelector bind:groomSelected />
<div id="party">
    <figure>
        <img src="{groomSelected ? placeholder : ninaHeadshot}" alt="placeholder" />
        <figcaption>
            {#if groomSelected}
                Kai Vylet
            {:else}
                Nina Tang
            {/if}
        </figcaption>
    </figure>
    <figure>
        <img src="{groomSelected ? placeholder : shiqiHeadshot}" alt="placeholder" />
        <figcaption>
            {#if groomSelected}
                José de la Fuente
            {:else}
                Shiqi Zhang
            {/if}
        </figcaption>
    </figure>
</div>


<style>
    header {
        display: flex;
        justify-content: center;
    }

    h1 {
        font-size: 1.125rem;
        font-weight: normal;
        font-family: Ortica-Light, serif;
        color: var(--primary);
    }

    #party {
        display: flex;
        justify-content: center;
    }

    figure {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    figcaption {
        font-size: 2rem;
        font-family: Ortica-Light, serif;
        text-align: center;
    }

    figure > img {
        aspect-ratio: 1;
        width: 100%;
        max-width: 200px;
        margin: 1vw 2vw;
        border: 3px solid var(--primary);
    }

    div {
        margin-bottom: 10rem;
    }

    @media (max-width: 700px) {
        figcaption {
            font-size: 5vw;
        }

        #party {
            flex-direction: column;
        }

    }

</style>