<script lang="ts">
  export let href: string | null = null;
  export let inverted: boolean = false;
  export let submit: boolean = false;
</script>

{#if submit}
  <button class={inverted ? "inverted" : "primary"} type="submit"
    ><slot /></button
  >
{:else}
  <a {href} class={inverted ? "inverted" : "primary"}><slot /></a>
{/if}

<style>
  button {
    all: unset;
  }

  a,
  button {
    padding: 1em 2em;
    font-family: Ortica-Light, serif;
    font-size: 1.375rem;
    text-decoration: none;
    cursor: pointer;
  }

  .primary {
    background-color: var(--primary);
    color: var(--white);
  }

  .inverted {
    background: var(--white);
    color: var(--primary);
  }

  @media (max-width: 700px) {
    a,
    button {
      font-size: 4vw;
    }
  }
</style>
