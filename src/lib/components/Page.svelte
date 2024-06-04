<script>
</script>

<page>
    <slot />
</page>

<style>
    page {
        display: flex;
        height: 600px;
        width: 960px;
        border: solid 1px black;
        flex-direction: column;
    }

    page :global(h1) {
        font-size: 4rem;
        margin: 1rem;
        text-align: center;
    }

    page :global(p) {
        font-size: 1.5rem;
        margin: 1rem;
        text-align: center;
    }
</style>