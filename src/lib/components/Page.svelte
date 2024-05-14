<script>
    export let title;
</script>

<page>
    <div class='title'>{title}</div>
</page>

<style>
    page {
        position: inherit;
        height: inherit;
        width: calc(100% - 224px);
        margin: 32px;
        left: 50%;
        transform: translateX(-50%);
        border: solid black 1px;
    }

    .title {
        position: inherit;
        width: inherit;
        padding-top: 12px;
        padding-bottom: 12px;
        height: 72px;
        top: 0px;
        left: 60px;
        color: black;
        font-size: 32px;
        border-bottom: solid black 1px;
    }
</style>