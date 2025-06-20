<script lang="ts">
  import Icon from '@iconify/svelte'
  let { icon } = $props()
</script>

<span class="flex items-center">
  <span>{'['}</span>
  <Icon {icon} />
  <span>{']'}</span>
</span>
