<script lang="ts">
    import PrimaryButton from "$lib/PrimaryButton.svelte";
</script>

<section>
    <div>
        <h1>Registry</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Laoreet magna iriure amet. Wisi hendrerit labore iusto sit lobortis qui delenit autem nihil nonummy. Cum eros eros.</p>
        <PrimaryButton href="" inverted>View Our Registry</PrimaryButton>
    </div>
</section>

<style>
    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-family: Ortica-Light, serif;
        color: var(--white);
        width: 60%;
        margin: 10vh 0;
    }

    h1 {
        font-weight: normal;
        font-size: 3.5rem;
        margin: 0;
    }

    section {
        display: flex;
        justify-content: center;
        width: 100%;
        background-color: var(--primary);
    }

    p {
        margin: 7vh 0;
        opacity: 80%;
    }

</style>