<script lang="ts">
    import { onMount, onDestroy } from 'svelte';
    import { browser } from '$app/environment';
    import { chartStore } from '$lib/stores/chartStore';
    import type { ChartData } from '$lib/stores/chartStore';

    // Visual config — tweak to taste
    const SCROLL_SPEED     = 1600;   // px per second
    const JUDGEMENT_RATIO  = 0.85;  // 0 = top, 1 = bottom
    const OPACITY          = 0.12;  // overall canvas opacity (CSS)

    // Lane colours: 7 keys (white/blue alternating) + scratch (red)
    const NOTE_COLORS = [
        '#ffffff', '#78b4ff', '#ffffff', '#78b4ff',
        '#ffffff', '#78b4ff', '#ffffff', '#ff5050',
    ];
    const LN_COLORS = [
        '#aaaaaa', '#4478cc', '#aaaaaa', '#4478cc',
        '#aaaaaa', '#4478cc', '#aaaaaa', '#cc3232',
    ];
    const MEASURE_COLOR  = '#555577';
    const BG_COLOR       = '#0a0a10';

    // IIDX-style lane proportions (relative to white key = 1.0):
    //   white keys (1,3,5,7) = 1.0,  blue keys (2,4,6) = 0.9,  scratch = 1.5
    //   total ratio: 4×1.0 + 3×0.9 + 1×1.5 = 8.2
    // Note height = 30% of white key width (computed per-frame).
    const LANE_RATIOS      = [1.0, 0.9, 1.0, 0.9, 1.0, 0.9, 1.0, 1.5];
    const LANE_RATIO_TOTAL = LANE_RATIOS.reduce((a, b) => a + b, 0); // 8.2
    const NOTE_HEIGHT_RATIO = 0.3;  // fraction of white key width

    function getLaneWidths(canvasWidth: number): number[] {
        const keyW = canvasWidth / LANE_RATIO_TOTAL;
        return LANE_RATIOS.map(r => r * keyW);
    }

    export let visible = true;

    let canvas: HTMLCanvasElement;
    let raf: number;
    let chart: ChartData | null = null;
    let currentTime = -2.0;
    let lastTs: number | null = null;

    chartStore.subscribe(data => {
        chart = data;
        currentTime = -2.0;
        lastTs = null;
    });

    // Binary search: rightmost index where arr[i] <= value
    function bisectRight(arr: number[], value: number): number {
        let lo = 0, hi = arr.length;
        while (lo < hi) {
            const mid = (lo + hi) >>> 1;
            if (arr[mid] <= value) lo = mid + 1;
            else hi = mid;
        }
        return lo;
    }

    function timeToY(eventTime: number, judgementY: number): number {
        return judgementY - (eventTime - currentTime) * SCROLL_SPEED;
    }

    function laneX(lane: number, laneWidths: number[]): number {
        let x = 0;
        for (let i = 0; i < lane; i++) x += laneWidths[i];
        return x;
    }

    function draw() {
        if (!chart || !canvas) return;
        const ctx = canvas.getContext('2d')!;
        const W = canvas.width;
        const H = canvas.height;

        const laneWidths  = getLaneWidths(W);
        const keyW        = W / LANE_RATIO_TOTAL;
        const noteHeight  = Math.round(keyW * NOTE_HEIGHT_RATIO);
        const judgementY  = Math.floor(H * JUDGEMENT_RATIO);
        const lookahead   = judgementY / SCROLL_SPEED;
        const lookbehind  = (H - judgementY) / SCROLL_SPEED;
        const offsetX     = 0;

        // Background
        ctx.fillStyle = BG_COLOR;
        ctx.fillRect(0, 0, W, H);

        // Pre-extract times for bisect
        const noteTimes = chart.notes.map(n => n.time);
        const mlTimes   = chart.measure_lines.map(m => m.time);

        const t0 = currentTime - lookbehind;
        const t1 = currentTime + lookahead;

        // Measure lines
        ctx.fillStyle = MEASURE_COLOR;
        const mlStart = bisectRight(mlTimes, t0);
        const mlEnd   = bisectRight(mlTimes, t1);
        for (let i = mlStart; i < mlEnd; i++) {
            const y = timeToY(chart.measure_lines[i].time, judgementY);
            ctx.fillRect(offsetX, y, W, 1);
        }

        // Notes
        const nStart = bisectRight(noteTimes, t0);
        const nEnd   = bisectRight(noteTimes, t1);
        for (let i = nStart; i < nEnd; i++) {
            const n = chart.notes[i];
            if (n.is_ln_end) continue;

            const x     = laneX(n.lane, laneWidths);
            const w     = laneWidths[n.lane];
            const headY = timeToY(n.time, judgementY);

            if (n.is_ln_start) {
                const tailY = timeToY(n.ln_end_time, judgementY);
                const topY  = Math.min(headY, tailY);
                const botY  = Math.max(headY, tailY);
                ctx.fillStyle = LN_COLORS[n.lane];
                ctx.fillRect(x, topY, w, botY - topY);
                // tail cap
                ctx.fillStyle = NOTE_COLORS[n.lane];
                ctx.fillRect(x, tailY, w, noteHeight);
            }

            ctx.fillStyle = NOTE_COLORS[n.lane];
            ctx.fillRect(x, headY, w, noteHeight);
        }
    }

    function loop(ts: number) {
        if (lastTs !== null) {
            const dt = (ts - lastTs) / 1000;
            currentTime += dt;
            if (chart && currentTime > chart.total_time + 2) {
                currentTime = -2.0;  // loop
            }
        }
        lastTs = ts;
        draw();
        raf = requestAnimationFrame(loop);
    }

    function resize() {
        if (!canvas) return;
        canvas.width  = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    onMount(() => {
        resize();
        window.addEventListener('resize', resize);
        raf = requestAnimationFrame(loop);
    });

    onDestroy(() => {
        if (!browser) return;
        cancelAnimationFrame(raf);
        window.removeEventListener('resize', resize);
    });
</script>

<canvas bind:this={canvas} style="opacity: {visible ? OPACITY : 0}"></canvas>

<style>
    canvas {
        position: fixed;
        inset: 0;
        z-index: -1;
        pointer-events: none;
        transition: opacity 0.4s ease;
    }
</style>
