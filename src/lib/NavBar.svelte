<script lang="ts">
    import Logo from "$lib/Logo.svelte"
</script>


<nav>
    <ul>
        <div id="navLeft">
            <li><a href={"#"}>Home</a></li>
            <li><a href={"#"}>Our Story</a></li>
            <li><a href={"#"}>Venue</a></li>
        </div>
        <li id="logo"><Logo /></li>
        <div id="navRight">
            <li><a href={"#"}>Itinerary</a></li>
            <li><a href={"#"}>Registry</a></li>
            <li><a href={"#"}>RSVP</a></li>
        </div>
    </ul>
</nav>


<style>

    ul {
        list-style: none;
        font-family: Ortica-Light, serif;
        font-size: 1.375rem;
        color: var(--textPrimary);
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 80%;
        margin: 0;
        padding: 0;
        justify-content: center;
    }

    #logo {
        display: flex;
        justify-content: center;
        width: 10%;
    }

    nav {
        width: 100%;
        display: flex;
        justify-content: center;
        margin: 0;
        padding: 0;
    }

    #navLeft, #navRight {
        width: 45%;
        display: flex;
        justify-content: space-evenly;

    }

    a {
        text-decoration: none;
        color: var(--textPrimary);
        opacity: 60%;
    }

    @media (max-width: 1200px) {
        #navLeft, #navRight {
            display: none;
        }
    }

</style>