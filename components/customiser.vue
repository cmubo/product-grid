<template>
<div class="product-configurator">
  <div class="config-container">
    <h3>Page</h3>
    <div class="config-item">
      <label>Background</label>
      <input data-c-object="page.background" placeholder="#ffffff"></input>
      <Colorpicker />
    </div>

    <h3>Product Cell</h3>
    <div class="config-item">
      <label>padding</label>
      <input data-c-object="cell.padding" placeholder="15px"></input>
    </div>

    <h3>Product</h3>
    <div class="config-item">
      <label>Background</label>
      <input data-c-object="product.background" placeholder="#ffffff"></input>
      <Colorpicker />
    </div>
    <div class="config-item">
      <label>Color</label>
      <input data-c-object="product.color" placeholder="#000000"></input>
      <Colorpicker />
    </div>
    <div class="config-item">
      <label>Font Size</label>
      <input data-c-object="product.font-size" placeholder="0.875rem"></input>
    </div>
    <div class="config-item">
      <label>Font Family
        <Tooltip content="Whatever font you use needs to be pre-installed onto your computer." />
      </label>
      <input data-c-object="product.font-family" placeholder="Montserrat"></input>
    </div>
    <div class="config-item full-width dual-inputs">
      <label>Padding - X Y</label>
      <div class="di-container">
        <input data-c-object="product.paddingX" placeholder="15px"></input>
        <input data-c-object="product.paddingY" placeholder="15px"></input>
      </div>
    </div>

    <h3>Title</h3>
    <div class="config-item">
      <label>Color</label>
      <input data-c-object="title.color" placeholder="#000000"></input>
      <Colorpicker />
    </div>
    <div class="config-item">
      <label>Font Size</label>
      <input data-c-object="title.font-size" placeholder="0.875rem"></input>
    </div>

    <h3>Price</h3>
    <div class="config-item">
      <label>Color</label>
      <input data-c-object="price.color" placeholder="#000000"></input>
      <Colorpicker />
    </div>
    <div class="config-item">
      <label>Font Size</label>
      <input data-c-object="price.font-size" placeholder="0.875rem"></input>
    </div>

    <h3>Sale Price</h3>
    <div class="config-item">
      <label>Color</label>
      <input data-c-object="sale.color" placeholder="#000000"></input>
      <Colorpicker />
    </div>
    <div class="config-item">
      <label>Font Size</label>
      <input data-c-object="sale.font-size" placeholder="0.875rem"></input>
    </div>
    <div class="config-item">
      <label>Text Decoration</label>
      <input data-c-object="sale.text-decoration" placeholder="none"></input>
    </div>

    <h3>Add To Cart</h3>
    <div class="config-item">
      <label>Background</label>
      <input data-c-object="addToCart.background" placeholder="#000000"></input>
      <Colorpicker />
    </div>
    <div class="config-item">
      <label>Color</label>
      <input data-c-object="addToCart.color" placeholder="#ffffff"></input>
      <Colorpicker />
    </div>
    <div class="config-item">
      <label>Font Size</label>
      <input data-c-object="addToCart.font-size" placeholder="0.875rem"></input>
    </div>

    <h3>View Product</h3>
    <div class="config-item">
      <label>Background</label>
      <input data-c-object="viewProduct.background" placeholder="#2e2e2e"></input>
      <Colorpicker />
    </div>
    <div class="config-item">
      <label>Color</label>
      <input data-c-object="viewProduct.color" placeholder="#ffffff"></input>
      <Colorpicker />
    </div>
    <div class="config-item">
      <label>Font Size</label>
      <input data-c-object="viewProduct.font-size" placeholder="0.875rem"></input>
    </div>
    <div class="config-toggle" v-on:click="toggleCustomiser()">Toggle</div>
  </div>
</div>
</template>

<script>
import Tooltip from '~/components/tooltip.vue';
import Colorpicker from '~/components/colorpicker.vue';

export default {
  components: {
    Tooltip,
    Colorpicker
  },
  data: function() {
    return {
      typingTimer: null
    }
  },
  mounted: function() {
    let self = this;
    let customiserInputs = document.querySelectorAll(".config-container input");

    for (let i = 0; i < customiserInputs.length; i++) {
      customiserInputs[i].addEventListener('keyup', function(e) {
        self.customiserInput(e);
      });
    }
  },
  methods: {
    customiserInput(e) {
      let self = this;
      let objectArray = e.srcElement.dataset.cObject.split(".");

      clearTimeout(this.typingTimer);
      this.typingTimer = setTimeout(function() {
        self.$store.commit('customiser/setCustomiserValues', {
          value: e.srcElement.value,
          objectArray: objectArray
        });
      }, 1000);
    },
    toggleCustomiser() {
      let siteContainer = document.querySelector(".site-container");

      siteContainer.classList.contains("hide-config") ? siteContainer.classList.remove("hide-config") : siteContainer.classList.add("hide-config");
    }
  }
}
</script>
