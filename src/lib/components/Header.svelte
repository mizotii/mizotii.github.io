<script>
    import Icons from "./Icons.svelte";
</script>

<header class="flex flex-col items-center gap-4">
    <div class="avatar">
        <div class="w-32 md:w-40 rounded-full ring ring-base-content ring-offset-base-100 ring-offset-2">
            <img src="https://i.imgur.com/OXYQwQo.jpeg" alt="Joel Yang" />
        </div>
    </div>
    <div class="flex flex-col items-center gap-1 text-center">
        <h1 class="text-5xl md:text-6xl tracking-tight">joel yang</h1>
        <p class="text-base md:text-lg font-normal opacity-60 tracking-wide">
            developer &nbsp;·&nbsp; rhythm game enjoyer &nbsp;·&nbsp; mariners fan
        </p>
    </div>
    <Icons />
</header>
