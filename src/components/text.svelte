<script lang="ts">
  let { text } = $props()
</script>

<span class="flex gap-1 items-center">
  <span>{'['}</span>
  <span>{text}</span>
  <span>{']'}</span>
</span>
