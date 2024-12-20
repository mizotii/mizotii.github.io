<script>
    import Navbar from "$lib/components/Navbar.svelte";
    import Header from "$lib/components/Header.svelte";
    import "../app.css";
</script>

<div class="p-4 flex flex-col justify-center items-center">
    <Header />
    <div class="divider divider-neutral"></div>
</div>
<div class="p-4 flex flex-row">
    <Navbar />
    <div class="divider divider-horizontal divider-neutral"></div>
    <div class="w-4/5">
        <slot />
    </div>
    <div class="divider divider-neutral"></div>
</div>