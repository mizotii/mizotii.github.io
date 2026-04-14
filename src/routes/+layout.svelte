<script>
    import Header from "$lib/components/Header.svelte";
    import Background from "$lib/components/Background.svelte";
    import NowPlaying from "$lib/components/NowPlaying.svelte";
    import "../app.css";

    let bgVisible = true;
</script>

<Background bind:visible={bgVisible} />

<!-- Desktop: fixed NowPlaying + bg toggle (hidden on mobile) -->
<div class="hidden md:block">
    <NowPlaying />
</div>
<button
    class="hidden md:block fixed bottom-5 right-5 z-50 font-mono text-xs opacity-40 hover:opacity-80 transition-opacity"
    on:click={() => bgVisible = !bgVisible}
    title="{bgVisible ? 'hide' : 'show'} background"
>
    {bgVisible ? '[ bg off ]' : '[ bg on ]'}
</button>

<!-- Mobile footer: NowPlaying + bg toggle as a bottom bar -->
<footer class="md:hidden fixed bottom-0 inset-x-0 z-50 flex justify-between items-end px-5 py-4 bg-base-100/90 backdrop-blur-sm border-t border-neutral/20">
    <NowPlaying mobile />
    <button
        class="font-mono text-xs opacity-40 hover:opacity-80 transition-opacity self-end"
        on:click={() => bgVisible = !bgVisible}
        title="{bgVisible ? 'hide' : 'show'} background"
    >
        {bgVisible ? '[ bg off ]' : '[ bg on ]'}
    </button>
</footer>

<!-- Hero: header dead-center, then slot below -->
<div class="min-h-screen flex flex-col items-center justify-center px-6 py-16">
    <Header />
    <div class="divider divider-neutral w-full max-w-xl my-8 opacity-30"></div>
    <main class="w-full max-w-2xl pb-36 md:pb-0">
        <slot />
    </main>
</div>
