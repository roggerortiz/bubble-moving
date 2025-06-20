<script lang="ts">
  import { Canvas } from './classes/Canvas'
  import Keys from './components/keys.svelte'
  import {
    COLOR_KEYS,
    DEFAULT_RADIUS,
    DOWN_KEYS,
    LEFT_KEYS,
    MAX_RADIUS,
    MIN_RADIUS,
    MINUS_KEY,
    PAUSE_KEYS,
    PLUS_KEY,
    RIGHT_KEYS,
    UP_KEYS
  } from './helpers/constants'
  import { getRandomColor } from './helpers/utils'
  import { defaultPressed, type Pressed } from './types/pressed'

  let canvas: Canvas = $state(new Canvas())
  let pressed: Pressed = $state(defaultPressed)
  let color: string = $state(getRandomColor())
  let radius: number = $state(DEFAULT_RADIUS)

  const onKeyDown = ({ key }: KeyboardEvent) => {
    if (key === PLUS_KEY && radius < MAX_RADIUS) {
      radius++
    } else if (key === MINUS_KEY && radius > MIN_RADIUS) {
      radius--
    } else if (COLOR_KEYS.includes(key)) {
      color = getRandomColor()
    } else if (UP_KEYS.includes(key)) {
      pressed.up = true
    } else if (DOWN_KEYS.includes(key)) {
      pressed.down = true
    } else if (LEFT_KEYS.includes(key)) {
      pressed.left = true
    } else if (RIGHT_KEYS.includes(key)) {
      pressed.right = true
    } else if (PAUSE_KEYS.includes(key)) {
      pressed.pause = !pressed.pause

      if (!pressed.pause) {
        draw()
      }
    }
  }

  const onKeyUp = ({ key }: KeyboardEvent) => {
    if (UP_KEYS.includes(key)) {
      pressed.up = false
    } else if (DOWN_KEYS.includes(key)) {
      pressed.down = false
    } else if (LEFT_KEYS.includes(key)) {
      pressed.left = false
    } else if (RIGHT_KEYS.includes(key)) {
      pressed.right = false
    }
  }

  const onLoad = () => {
    canvas = new Canvas()
    draw()
  }

  const draw = () => {
    canvas.clear()
    canvas.draw({ color, radius }, pressed)

    if (!pressed.pause) {
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
  on:keyup|capture={onKeyUp}
/>
