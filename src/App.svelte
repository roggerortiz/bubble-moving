<script lang="ts">
  import { onMount } from 'svelte'
  import { Canvas } from './classes/Canvas'
  import { MINUS_KEY, PLUS_KEY, SPACE_BAR_KEY, X_KEY, Z_KEY } from './helpers/constants'

  let canvas: Canvas = $state(new Canvas())
  let pause: boolean = $state(false)
  let inputEl: HTMLInputElement

  onMount(() => inputEl && inputEl.focus())

  const onKeyDown = ({ key }: KeyboardEvent) => {
    if (key === Z_KEY) {
      canvas.addBubble()
    } else if (key === X_KEY) {
      canvas.removeBubble()
    } else if (key === PLUS_KEY) {
      canvas.speedUp()
    } else if (key === MINUS_KEY) {
      canvas.speedDown()
    } else if (key === SPACE_BAR_KEY) {
      pause = !pause

      if (!pause) {
        draw()
      }
    }
  }

  const onLoad = () => {
    canvas = new Canvas()
    draw()
  }

  const draw = () => {
    canvas.clear()
    canvas.detectCollisions()
    canvas.draw()

    if (!pause) {
      window.requestAnimationFrame(draw)
    }
  }
</script>

<main class="w-full md:w-10/12 xl:w-8/12 bg-zinc-950 border border-gray-700 rounded overflow-hidden">
  <canvas class="w-full"></canvas>
  <div class="absolute w-full bottom-0 sm:relative bg-zinc-950 border-t border-gray-700 -mx-4 sm:m-0">
    <div class="flex flex-wrap gap-x-2 sm:gap-x-4 text-gray-400 text-sm px-4 py-1 sm:py-2">
      <span>Pause : [ ]</span>
      <span>Speed : [+] / [-]</span>
      <span>Bubble : [N] / [X]</span>
      <input
        class="hidden"
        bind:this={inputEl}
      />
    </div>
  </div>
</main>

<svelte:window
  on:load|preventDefault={onLoad}
  on:keydown|capture={onKeyDown}
/>
