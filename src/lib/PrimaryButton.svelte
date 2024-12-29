<script lang="ts">
    export let href: string | null = null;
    export let inverted: boolean = false;
    export let submit: boolean = false;

    function submitForm(e: Event) {
        e.preventDefault();
        const form = (e.target as HTMLElement)?.closest("form");
        if (form) {
            form.submit();
        }

    }
</script>

{#if submit}
    <button class={inverted ? "inverted" : "primary"} type="submit"><slot /></button>
{:else}
    <a href="{href}" class={inverted ? "inverted" : "primary"}><slot /></a>
{/if}

<style>
    button {
        all: unset;
    }

    a, button {
        padding: 18px 26px;
        font-family: Ortica-Light, serif;
        font-size: 1.375rem;
        text-decoration: none;
    }

    .primary {
        background-color: var(--primary);
        color: var(--white);
    }

    .inverted {
        background: var(--white);
        color: var(--primary);
    }


</style>