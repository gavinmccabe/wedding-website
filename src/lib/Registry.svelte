<script lang="ts">
  import PrimaryButton from "$lib/PrimaryButton.svelte";
</script>

<section>
  <div>
    <h1>Registry</h1>
    <p>
      We are so grateful for your love and support as we embark on this exciting
      journey together! While we have created a registry for those who wish to
      celebrate with us through gifts, please know that your presence at our
      wedding is the greatest gift of all. Thank you for being a part of our
      special day! If you’d like to explore our registry, you can find it below.
      Additionally, a card box and gift table will be available at our venue.
    </p>
    <PrimaryButton href="https://www.zola.com/registry/gavinandamy2025" inverted
      >View Our Registry</PrimaryButton
    >
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
    margin: 10vw 0;
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
    margin: 7vw 0;
    opacity: 80%;
  }
</style>
