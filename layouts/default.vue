<template>
  <div>
    <Navigation />
    <nuxt />
    <Export />
  </div>
</template>

<script>
  import Navigation from './partials/navigation';
  import Export from './partials/export';
  export default {
      components: {
          Navigation,
          Export
      }
  }
</script>
