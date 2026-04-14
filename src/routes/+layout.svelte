<script>
    import Header from "$lib/components/Header.svelte";
    import BmsBackground from "$lib/components/BmsBackground.svelte";
    import NowPlaying from "$lib/components/NowPlaying.svelte";
    import "../app.css";

    let bgVisible = true;
</script>

<BmsBackground bind:visible={bgVisible} />
<NowPlaying />

<!-- BG toggle — fixed bottom-right -->
<button
    class="fixed bottom-5 right-5 z-50 font-mono text-xs opacity-40 hover:opacity-80 transition-opacity"
    on:click={() => bgVisible = !bgVisible}
    title="{bgVisible ? 'hide' : 'show'} background"
>
    {bgVisible ? '[ bg off ]' : '[ bg on ]'}
</button>

<!-- Hero: header dead-center, then slot below -->
<div class="min-h-screen flex flex-col items-center justify-center px-6 py-16">
    <Header />
    <div class="divider divider-neutral w-full max-w-xl my-8 opacity-30"></div>
    <main class="w-full max-w-2xl">
        <slot />
    </main>
</div>
