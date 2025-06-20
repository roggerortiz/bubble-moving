<script lang="ts">
  import Icon from './icon.svelte'
  import Text from './text.svelte'
</script>

<div class="flex flex-wrap gap-4 border-t border-gray-700 text-gray-400 text-sm px-4 py-2">
  <span class="flex gap-2 items-center">
    <span>Play/Pause:</span>
    <span class="flex gap-1 items-center">
      <Icon icon="mdi:keyboard-space" />
      <Text text="ESC" />
    </span>
  </span>

  <span class="flex gap-2 items-center">
    <span>Left :</span>
    <span class="flex gap-1 items-center">
      <Icon icon="mdi:arrow-left-thin" />
      <Text text="A" />
    </span>
  </span>

  <span class="flex gap-2 items-center">
    <span>Right :</span>
    <span class="flex gap-1 items-center">
      <Icon icon="mdi:arrow-right-thin" />
      <Text text="D" />
    </span>
  </span>

  <span class="flex gap-2 items-center">
    <span>Up :</span>
    <span class="flex gap-1 items-center">
      <Icon icon="mdi:arrow-up-thin" />
      <Text text="W" />
    </span>
  </span>

  <span class="flex gap-2 items-center">
    <span>Down :</span>
    <span class="flex gap-1 items-center">
      <Icon icon="mdi:arrow-down-thin" />
      <Text text="S" />
    </span>
  </span>

  <span class="flex gap-2 items-center">
    <span>Radius :</span>
    <span class="flex gap-1 items-center">
      <Text text="+" />
      <Text text="-" />
    </span>
  </span>

  <span class="flex gap-2 items-center">
    <span>Color :</span>
    <span class="flex gap-1 items-center">
      <Text text="C" />
    </span>
  </span>
</div>
