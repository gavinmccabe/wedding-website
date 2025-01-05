<script lang="ts">
    import checkIcon from "$lib/assets/check.png";

    export let attending = true;
</script>


<section>
    <span class="label">Attendance</span>
    <main>
        <!-- svelte-ignore a11y_click_events_have_key_events -->
        <div tabindex=0 role="button" on:click={() => {attending = true}}>
            <span class="radio {attending ? 'selected' : 'unselected' }">
                {#if attending}
                    <img src="{checkIcon}" alt="checkmark" />
                {/if}
            </span>
            Accept with Pleasure
        </div>
        <!-- svelte-ignore a11y_click_events_have_key_events -->
        <div tabindex=0 role="button" on:click={() => {attending = false}}>
            <span class="radio {attending ? 'unselected' : 'selected' }">
                {#if !attending}
                    <img src="{checkIcon}" alt="checkmark" />
                {/if}
            </span>
            Regretfully Decline
        </div>
    </main>
</section>

<style>
    .radio {
        width: 15px;
        height: 15px;
        border: 1px solid var(--textPrimary);
        margin: 0 8px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .selected {
        background-color: var(--primary);
    }

    div:hover .unselected, div:hover .selected {
        border-color: var(--primary);
    }

    div {
        height: 50px;
        width: 100%;
        display: flex;
        border: 1px solid var(--textPrimary);
        align-items: center;
        margin: 0 1rem;
    }

    main {
        width: 100%;
        display: flex;
        flex-direction: row;
    }

    img {
        width: 18px;
        height: 18px;
    }

    .label {
        font-size: 0.875rem;
        line-height: 170%;
        margin-bottom: 0.3rem;
        margin-left: 1rem;
        display: flex;
    }

    section {
        width: 100%;
    }

    @media (max-width: 700px) {
        div {
            font-size: 3vw
        }
    }

</style>