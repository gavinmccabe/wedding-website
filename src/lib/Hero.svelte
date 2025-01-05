<script lang="ts">
    import image from "$lib/assets/cliff-photo.png"
</script>

<header>
    <h2>Please join us to celebrate</h2>
    <h1>Gavin<br class="mobileOnly" /> & <br class="mobileOnly" />Amy</h1>
    <h2>June 16, 2025 <span class="mobileHidden"> &mdash; </span><br class="mobileOnly"/> Camarillo, California</h2>
</header>

<section>
    <img src="{image}" alt="cliff in Malibu"/>
</section>

<style>
    h2 {
        font-weight: normal;
        color: var(--primary);
        font-size: 1.5rem;
        font-family: Ortica-Light, serif;
        margin: 0;
        padding: 0;
        text-align: center;
    }

    h1 {
        font-weight: normal;
        color: var(--textPrimary);
        font-size: 6.3125rem;
        font-family: Ortica-Light, serif;
        margin: 5vw 0;
        padding: 0;
        line-height: 85%;
        text-align: center;
    }

    header {
        margin-top: 7rem;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    section {
        display: flex;
        justify-content: center;
        margin-top: 4rem;
    }

    img {
        width: 75%;
    }

    @media (min-width: 700px) {
        .mobileOnly {
            display: none;
        }
    }

    @media (max-width: 700px) {
        img {
            width: 85%;
        }

        .mobileHidden {
            display: none;
        }
    }
</style>