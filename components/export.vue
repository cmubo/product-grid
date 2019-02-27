<template>
<div class="export-container">
  <div class="export-inner">
    <div class="export-code-container">
      <div class="top-bar"><span>CSS</span></div>
      <code>

        <div v-if="product.background">{{product.background}}</div>

      </code>
    </div>
  </div>
</div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data: function() {
    return {
      export: "",
      css: []
    }
  },
  computed: {
    ...mapState({
      product: state => state.customiser.cOptions.product,
      image: state => state.customiser.cOptions.image,
      title: state => state.customiser.cOptions.title,
      price: state => state.customiser.cOptions.price,
      sale: state => state.customiser.cOptions.sale,
      addToCart: state => state.customiser.cOptions.addToCart,
      viewProduct: state => state.customiser.cOptions.viewProduct
    })
  },
}
</script>
