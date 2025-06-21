<script lang="ts">
  import Text from './text.svelte'
</script>

<div class="flex flex-wrap gap-4 border-t border-gray-700 text-gray-400 text-sm px-4 py-2">
  <span class="flex gap-1 items-center">
    <span>Play or Pause :</span>
    <span class="flex gap-1 items-center">
      <Text text="SPACE BAR" />
    </span>
  </span>

  <span class="flex gap-1 items-center">
    <span>Speed :</span>
    <span class="flex gap-1 items-center">
      <Text text="+" />
      <Text text="-" />
    </span>
  </span>

  <span class="flex gap-1 items-center">
    <span>Add Bubble :</span>
    <span class="flex gap-1 items-center">
      <Text text="Z" />
    </span>
  </span>

  <span class="flex gap-1 items-center">
    <span>Remove Bubble :</span>
    <span class="flex gap-1 items-center">
      <Text text="X" />
    </span>
  </span>
</div>
