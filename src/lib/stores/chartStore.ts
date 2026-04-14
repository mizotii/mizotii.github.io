/**
 * Fetches /charts/manifest.json, picks a random chart, fetches it,
 * and exposes the full chart data as a readable store.
 *
 * Both BmsBackground and NowPlaying import this — the fetch runs only once
 * because Svelte module-level stores are singletons.
 */

import { readable } from 'svelte/store';
import { browser } from '$app/environment';

export interface NoteData {
    time: number;
    lane: number;
    is_ln_start: boolean;
    is_ln_end: boolean;
    ln_end_time: number;
}

export interface ChartData {
    title: string;
    subtitle: string;
    artist: string;
    subartist: string;
    genre: string;
    initial_bpm: number;
    total_time: number;
    notes: NoteData[];
    measure_lines: { time: number }[];
}

async function loadRandomChart(): Promise<ChartData | null> {
    try {
        const manifest: string[] = await fetch('/charts/manifest.json').then(r => r.json());
        if (!manifest.length) return null;
        const pick = manifest[Math.floor(Math.random() * manifest.length)];
        return await fetch(`/charts/${pick}`).then(r => r.json());
    } catch {
        return null;
    }
}

export const chartStore = readable<ChartData | null>(null, (set) => {
    if (!browser) return;
    loadRandomChart().then(set);
});
