<script lang="ts">
    import { chartStore } from '$lib/stores/chartStore';

    // Strip Unicode replacement characters left over from the source file encoding
    function clean(s: string): string {
        return s.replace(/\uFFFD/g, '').replace(/\s+$/, '');
    }

    $: meta = $chartStore;
</script>

{#if meta}
<div class="now-playing" aria-label="now playing">
    <span class="label">// now playing</span>
    <span class="title">{clean(meta.title)}{meta.subtitle ? ` ${clean(meta.subtitle)}` : ''}</span>
    <span class="artist">{clean(meta.artist)}</span>
    {#if meta.subartist}<span class="subartist">{clean(meta.subartist)}</span>{/if}
    <span class="detail">{clean(meta.genre)} · {meta.initial_bpm} bpm</span>
</div>
{/if}

<style>
    .now-playing {
        position: fixed;
        bottom: 1.5rem;
        left: 1.5rem;
        z-index: 50;
        display: flex;
        flex-direction: column;
        gap: 0.1rem;
        opacity: 0.55;
        transition: opacity 0.2s ease;
        font-family: 'Courier New', Courier, monospace;
        font-weight: 700;
        line-height: 1.3;
        pointer-events: none;
    }
    .now-playing:hover {
        opacity: 0.9;
    }
    .label {
        font-size: 0.65rem;
        letter-spacing: 0.08em;
        opacity: 0.6;
    }
    .title {
        font-size: 1.1rem;
        letter-spacing: 0.02em;
    }
    .artist {
        font-size: 0.8rem;
        opacity: 0.75;
    }
    .subartist {
        font-size: 0.72rem;
        opacity: 0.55;
    }
    .detail {
        font-size: 0.65rem;
        letter-spacing: 0.06em;
        opacity: 0.55;
        text-transform: uppercase;
    }
</style>
