<script lang="ts">
    export let question: string;
</script>

<div>
    <h1>{question}</h1>
    <p><slot /></p>
</div>

<style>
    * {
        font-family: Ortica-Light, serif;
        color: var(--textPrimary);
    }

    h1 {
        font-size: 2rem;
        font-weight: normal;
    }

    p {
        font-size: 1.125rem;
        opacity: 80%;
    }

    div {
        width: 100%;
    }
</style>