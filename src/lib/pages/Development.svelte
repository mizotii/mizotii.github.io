<script>
    import Page from "../components/Page.svelte";
</script>

<Page>
    <h1>PROJECTS</h1>
    <p>osu-heatmap: a calendar heatmap for the rhythm game osu! and all of its modes</p>
    <div class='osu-heatmap'>
        <a href='https://osu-heatm.app'>
            <img src='https://i.imgur.com/vdWu1K5.png' alt='osu=heatmap'>
        </a>
    </div>
</Page>

<style>
    .osu-heatmap > a > img {
        width: 400px;
    }
</style>