<script>
    import Header from "$lib/components/Header.svelte";
    import Autoplayer from "$lib/components/Autoplayer.svelte";
    import NowPlaying from "$lib/components/NowPlaying.svelte";
    import "../app.css";
</script>

<Autoplayer />
<NowPlaying />

<div class="h-screen overflow-hidden flex flex-col items-center justify-center px-6 py-16">
    <Header />
    <main class="w-full max-w-2xl">
        <slot />
    </main>
</div>
