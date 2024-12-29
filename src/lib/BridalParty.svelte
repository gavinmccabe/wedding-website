<script lang="ts">
    import BridalPartySelector from "$lib/BridalPartySelector.svelte";
    import placeholder from "$lib/assets/bridal-party-placeholder.png"

    let groomSelected = true;
</script>

<header>
    <h1>The Bridal Party</h1>
</header>
<BridalPartySelector bind:groomSelected />
<div id="party">
    <figure>
        <img src="{placeholder}" alt="placeholder" />
        <figcaption>
            {#if groomSelected}
                Kai Vylet
            {:else}
                Nina Tang
            {/if}
        </figcaption>
    </figure>
    <figure>
        <img src="{placeholder}" alt="placeholder" />
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
    }

    figure > img {
        margin: 1vw 2vw;
        border: 3px solid var(--primary);
    }

    div {
        margin-bottom: 10rem;
    }


</style>