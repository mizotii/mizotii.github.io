<script>
    import Router from "./lib/components/Router.svelte";
    import Footer from "./lib/components/Footer.svelte";
</script>

<main>
    <Router />
</main>

<style>
    main {
        font-family: 'Courier New', Courier, monospace;
        display: flex;
        height: 600px;
        width: 720px;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        min-width: 100%;
        flex-direction: row;
    }

    @media only screen and (max-width: 600px) {main {width: 90vw;}}
</style>
