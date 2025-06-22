<script lang="ts">
  import { Canvas } from './classes/Canvas'
  import { MINUS_KEY, PLUS_KEY, SPACE_BAR_KEY, X_KEY, Z_KEY } from './helpers/constants'

  let canvas: Canvas = $state(new Canvas())
  let pause: boolean = $state(false)

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

<main class="w-full md:w-10/12 xl:w-8/12 bg-zinc-950 border border-gray-700 rounded overflow-hidden mx-4 md:m-0">
  <canvas class="w-full"></canvas>
  <div class="flex flex-wrap gap-x-2 bg-zinc-950 border-t border-gray-700">
    <input
      class="w-full outline-0 text-gray-400 text-sm px-4 py-2 caret-transparent"
      value="Pause : [ ]  Speed : [+] / [-]  Bubble : [N] / [X]"
    />
  </div>
</main>

<svelte:window
  on:load|preventDefault={onLoad}
  on:keydown|capture={onKeyDown}
/>
