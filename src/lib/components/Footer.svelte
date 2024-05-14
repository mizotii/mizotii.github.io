<script>
    import ToggleTheme from "./ToggleTheme.svelte";
</script>

<footer>
    <toggle><ToggleTheme /></toggle>
</footer>

<style>
    footer {
        position: absolute;
        width: 100%;
        height: 48px;
        bottom: 0px;
    }

    toggle {
        right: 12px;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
    }    
</style>