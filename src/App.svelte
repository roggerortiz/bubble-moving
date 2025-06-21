<script lang="ts">
  import { Canvas } from './classes/Canvas'
  import Keys from './components/keys.svelte'
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

<main class="w-full h-dvh flex justify-center items-center bg-zinc-900 p-4">
  <section class="w-full sm:w-10/12 md:w-8/12 lg-w-6/12 bg-zinc-950 border border-gray-700 rounded overflow-hidden">
    <canvas class="w-full"></canvas>
    <Keys />
  </section>
</main>

<svelte:window
  on:load|preventDefault={onLoad}
  on:keydown|capture={onKeyDown}
/>
