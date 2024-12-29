<script lang="ts">
    import NumberButton from "$lib/partySelector/NumberButton.svelte";

    export let selectedValue: number = 1;
</script>

<section>
    <span>Total Party Size</span>
    <div>
        <NumberButton bind:selectedValue value={1}>One</NumberButton>
        <NumberButton bind:selectedValue value={2}>Two</NumberButton>
        <NumberButton bind:selectedValue value={3}>Three</NumberButton>
        <NumberButton bind:selectedValue value={4}>Four</NumberButton>
        <NumberButton bind:selectedValue value={5}>Five</NumberButton>
    </div>
</section>

<style>
    div {
        display: flex;
        width: 100%;
    }

    span {
        font-family: Ortica-Light, serif;
        color: var(--textPrimary);
        font-size: 0.875rem;
        line-height: 170%;
        margin-left: 1rem;
        margin-bottom: 0.3rem;
    }

    section {
        width: 100%;
    }

</style>