<script>
    import image from "$lib/assets/ring.png"
</script>

<section>
    <h1>Our<br />Story</h1>
    <aside>
        <div>
            <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Purus auctor pharetra hendrerit; ullamcorper massa diam elementum platea. Vehicula cras inceptos enim; eu aenean elementum massa. Nisi eros dictumst tempus mus nostra consectetur. Non pulvinar ante maecenas scelerisque natoque facilisi. Neque eget inceptos tellus sagittis elit at. Euismod turpis integer himenaeos; ridiculus etiam nam class. Lacinia ligula elementum, platea tristique urna ultrices nostra? Proin ipsum interdum molestie class integer conubia mus cursus.</p>
            <p>Convallis velit at ex quis, eros maximus sodales nec. Laoreet tempor tempus; in augue consectetur dolor. Gravida fames non consequat feugiat maximus orci. Sapien maximus nascetur semper nulla porttitor curabitur facilisi. Tempor ut primis semper consectetur curae praesent, sem neque taciti. Montes nisi proin ridiculus platea varius. Et quis aliquet lobortis condimentum malesuada.</p>
        </div>
    </aside>
</section>
<img src="{image}" alt="ring on finger" />


<style>

    section {
        min-height: 45vw;
        background-color: var(--primary);
        color: var(--white);
        font-family: Ortica-Light, serif;
        margin-top: 100px;
        align-items: center;
    }

    h1 {
        font-weight: normal;
        font-size: 6.3125rem;
        line-height: 101%;
        display: flex;
        justify-content: center;
        padding: 3vw;
        margin: 0;
    }

    aside {
        display: flex;
        justify-content: center;
        padding: 8vw;
        font-size: 1.375rem;
        line-height: 160%;
    }

    p {
        margin: 2.75rem 0;
    }

    img {
        width: 100%;
    }


    @media(min-width: 700px) {
        section {
            display: flex;
        }

        h1 {
            width: 33%;
        }

        aside {
            width: 67%;
        }
    }

</style>