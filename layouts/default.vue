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
  import { mapState } from 'vuex';
  const json = require('~/static/products.json');

  export default {
      components: {
          Navigation,
          Export
      },
      created: function() {
        this.$store.commit('setProducts', json);
      }
  }
</script>
