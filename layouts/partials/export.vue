<template>
  <div class="export-outer">
    <Export />
  </div>
</template>


<script>
import Export from '~/components/export.vue';
  export default{
    components: {
      Export
    },
    data: function(){
      return {
        export: ""
      }
    }
  }
</script>
