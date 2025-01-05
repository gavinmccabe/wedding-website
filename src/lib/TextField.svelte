<script lang="ts">
  export let title: string;
  export let placeholder: string;
  export let value: string;
  export let required: boolean = false;
  export let onInputChange: (event: Event) => void = (event: Event): void => {};
</script>

<div>
  <label for="title"
    >{title}
    {#if required}
      <span>*</span>
    {/if}
  </label>
  <input
    id="title"
    bind:value
    on:input={onInputChange}
    {placeholder}
    {required}
    autocomplete="off"
  />
</div>

<style>
  div {
    display: flex;
    flex-direction: column;
    font-family: Ortica-Light, serif;
    color: var(--textPrimary);
    margin: 0 1rem;
    width: 100%;
  }

  label {
    font-size: 0.875rem;
    line-height: 140%;
    margin-bottom: 0.3rem;
  }

  span {
    color: var(--primary);
  }

  input {
    border: 1px solid var(--textPrimary);
    font-family: Ortica-Light, serif;
    font-size: 1rem;
    padding: 0.75rem;
    background: none;
    border-radius: 0;
  }
</style>
