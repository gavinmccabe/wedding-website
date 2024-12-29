<script lang="ts">
    export let groomSelected: boolean;
</script>

<header>
    <div class="{groomSelected ? 'selected' : 'unselected'}">
        <button type="button" on:click={() => {groomSelected = true}}>Groomsmen</button>
        <div class="underline"></div>
    </div>
    <div class="{groomSelected ? 'unselected' : 'selected'}">
        <button type="button" on:click={() => {groomSelected = false}}>Bridesmaids</button>
        <div class="underline"></div>
    </div>
</header>

<style>
    header {
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin-bottom: 20px; /* TODO: Remove */
    }

    button {
        background: none;
        border: none;
        cursor: pointer;
        font-family: Ortica-Light, serif;
        font-size: 3.5rem;
        color: var(--textPrimary);
    }

    .unselected > button {
        opacity: 30%;
        transition: opacity 0.25s ease-in-out;
    }

    .selected, .unselected {
        margin: 0 3vw;
    }

    .underline {
        height: 2px;
        background-color: var(--primary);
        transition: width 0.25s ease-in-out;
        margin: 0 auto;
    }

    /* Selected underline */
    .selected > .underline {
        width: 100%;
    }

    /* Unselected underline */
    .unselected > .underline {
        height: 2px;
        width: 0;
        background-color: var(--primary);
    }
</style>