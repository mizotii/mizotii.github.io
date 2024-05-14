<script>
    import Router from "./lib/components/Router.svelte";
    import Page from "./lib/components/Page.svelte";
    import Footer from "./lib/components/Footer.svelte";
</script>

<main>
    <page>
        <Page title='home' />
        <router><Router /></router>
    </page>
    <footer><Footer /></footer>
</main>

<style>
    page {
        position: absolute;
        height: calc(100% - 48px);
        width: 100%;
    }

    page > router {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
    }

    @media only screen and (max-width: 600px) {main {width: 90vw;}}
</style>
