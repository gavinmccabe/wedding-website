<script lang="ts">
  export let selectedValue: number;
  export let value: number;

  function onClick() {
    selectedValue = value;
  }
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<div tabindex="0" role="button" on:click={onClick}>
  <span class={selectedValue === value ? "selected" : "unselected"}></span><slot
  />
</div>

<style>
  span {
    width: 15px;
    height: 15px;
    display: inline-block;
    border: 1px solid var(--textPrimary);
    border-radius: 50%;
    margin: 0 8px;
  }

  .selected {
    width: 17px;
    height: 17px;
    border: 5px solid var(--primary);
    box-sizing: border-box;
  }

  div:hover .unselected {
    border: 1px solid var(--primary);
  }

  div {
    border: 1px solid var(--textPrimary);
    display: flex;
    margin-right: 2rem;
    align-items: center;
    height: 50px;
    padding-right: 10px;
    font-size: 0.875rem;
    cursor: pointer;
    margin-bottom: 0.3rem;
  }

  @media (max-width: 700px) {
    div {
      margin-bottom: 15px;
    }
  }
</style>
