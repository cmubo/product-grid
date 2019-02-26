<template>
<section class="site-container split-config">

  <div class="product-configurator">
    <div class="config-container">
      <h3>Page</h3>
      <div class="config-item">
        <label>Background</label>
        <input data-c-object="page.background" placeholder="#ffffff"></input>
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
      </div>
      <div class="config-item">
        <label>Color</label>
        <input data-c-object="product.color" placeholder="#ffffff"></input>
      </div>
      <div class="config-item">
        <label>Font Size</label>
        <input data-c-object="product.fontSize" placeholder="0.875rem"></input>
      </div>
      <div class="config-item">
        <label>Font Family
          <Tooltip content="Whatever font you use needs to be pre-installed onto your computer."/>
        </label>
        <input data-c-object="product.fontFamily" placeholder="Montserrat"></input>
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
        <input data-c-object="title.color" placeholder="#ffffff"></input>
      </div>
      <div class="config-item">
        <label>Font Size</label>
        <input data-c-object="title.fontSize" placeholder="0.875rem"></input>
      </div>

      <h3>Price</h3>
      <div class="config-item">
        <label>Color</label>
        <input data-c-object="price.color" placeholder="#ffffff"></input>
      </div>
      <div class="config-item">
        <label>Font Size</label>
        <input data-c-object="price.fontSize" placeholder="0.875rem"></input>
      </div>

      <h3>Sale Price</h3>
      <div class="config-item">
        <label>Color</label>
        <input data-c-object="sale.color" placeholder="#ffffff"></input>
      </div>
      <div class="config-item">
        <label>Font Size</label>
        <input data-c-object="sale.fontSize" placeholder="0.875rem"></input>
      </div>
      <div class="config-item">
        <label>Text Decoration</label>
        <input data-c-object="sale.textDecoration" placeholder="none"></input>
      </div>

      <h3>Sale Emblem</h3>
      <div class="config-item">
        <label>Color</label>
        <input data-c-object="sale.color" placeholder="#ffffff"></input>
      </div>
      <div class="config-item">
        <label>Font Size</label>
        <input data-c-object="sale.fontSize" placeholder="0.875rem"></input>
      </div>

      <h3>Add To Cart</h3>
      <div class="config-item">
        <label>Background</label>
        <input data-c-object="addToCart.background" placeholder="#ffffff"></input>
      </div>
      <div class="config-item">
        <label>Color</label>
        <input data-c-object="addToCart.color" placeholder="#ffffff"></input>
      </div>
      <div class="config-item">
        <label>Font Size</label>
        <input data-c-object="addToCart.fontSize" placeholder="0.875rem"></input>
      </div>

      <h3>View Product</h3>
      <div class="config-item">
        <label>Background</label>
        <input data-c-object="viewProduct.background" placeholder="#ffffff"></input>
      </div>
      <div class="config-item">
        <label>Color</label>
        <input data-c-object="viewProduct.color" placeholder="#ffffff"></input>
      </div>
      <div class="config-item">
        <label>Font Size</label>
        <input data-c-object="viewProduct.fontSize" placeholder="0.875rem"></input>
      </div>


    </div>
  </div>
  <!-- TODO: Create a list view class which changes layout of products to full width -->
  <div class="cm-products-container">
    <div class="cm-products-actions">
      <!-- TODO: Only show col count if in grid view -->
      <div class="column-count">
        <div class="col-count-selector" v-on:click="toggleColumns($event)">
          <div class="selected">{{ this.columnSelector.HRCount }}<span class="chevron-down"></span></div>
          <div class="options">
            <a href="#" class="col-count-btn" v-on:click.prevent="selectColumnCount('three-col', 'Three Columns', $event)">Three</a>
            <a href="#" class="col-count-btn" v-on:click.prevent="selectColumnCount('four-col', 'Four Columns', $event)">Four</a>
            <a href="#" class="col-count-btn" v-on:click.prevent="selectColumnCount('five-col', 'Five Columns', $event)">Five</a>
            <a href="#" class="col-count-btn" v-on:click.prevent="selectColumnCount('six-col', 'Six Columns', $event)">Six</a></div>
        </div>
      </div>
      <div class="col-type-selector"></div>
    </div>
    <div class="cm-products cm-grid-view cm-style-1" :class="columnSelector.columnCount">
      <div class="cm-product-cell" v-for="item in productsList">
        <div class="cm-product-inner" :style="{backgroundColor: customiserOptions.product.background,
          fontSize: customiserOptions.product.fontSize,
          fontFamily: customiserOptions.product.fontFamily,
          color: customiserOptions.product.color,
          paddingTop: customiserOptions.product.paddingY,
          paddingLeft: customiserOptions.product.paddingX,
          paddingRight: customiserOptions.product.paddingX}">
          <!-- TODO: Out of stock -->
          <!-- TODO: On sale -->
          <!-- TODO: Space for star rating/other snippet -->
          <!-- TODO: Add To cart/Quick Buy -->
          <div class="cm-product-img" :style="{ backgroundImage: 'url(' + item.images[0].src + ')' }">
            <!-- TODO: Create background img layout -->
            <a href="#">
              <img :src="item.images[0].src">
            </a>
          </div>
          <div class="cm-product-title">
            <a href="#">
              <div class="cm-title" :style="{color: customiserOptions.title.color, fontSize: customiserOptions.title.fontSize}">{{ item.title }}</div>
            </a>
          </div>
          <div class="cm-product-price" v-if="item.variants[0].compare_at_price === null">
            <div class="cm-price" :style="{color: customiserOptions.price.color, fontSize: customiserOptions.price.fontSize}">{{ item.variants[0].price}}</div>
          </div>

          <div class="cm-product-price price-with-sale" v-if="item.variants[0].compare_at_price">
            <div class="cm-price" :style="{color: customiserOptions.price.color, fontSize: customiserOptions.price.fontSize}">{{ item.variants[0].price}}</div>
            <div class="compare-at-price" v-if="item.variants[0].compare_at_price" :style="{color: customiserOptions.sale.color, fontSize: customiserOptions.sale.fontSize, textDecoration: customiserOptions.sale.textDecoration}">{{ item.variants[0].compare_at_price }}</div>
          </div>

          <div class="cm-links">
            <a class="cm-cart-link" :style="{backgroundColor: customiserOptions.addToCart.background, fontSize: customiserOptions.addToCart.fontSize, color: customiserOptions.addToCart.color}">Add To Cart</a>
            <a class="cm-view-link" :style="{backgroundColor: customiserOptions.viewProduct.background, fontSize: customiserOptions.viewProduct.fontSize, color: customiserOptions.viewProduct.color}">View Product</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
import axios from 'axios';
import Tooltip from '~/components/tooltip.vue';
import { mapState } from 'vuex';

export default {
  components: {
    Tooltip
  },
  data: function() {
    return {
      shopifyProductResponse: null,
      AllProductsJson: null,
      productsList: null,
      productsShown: false,
      typingTimer: null,
      columnSelector: {
          columnCount: "five-col",
          HRCount: "Five Columns"
      }
    }
  },
  computed: {
    customiserOptions () {
      return this.$store.state.customiser.cOptions;
    }
  },
  mounted: function() {
    let self = this;
    this.getAllProducts();

    document.addEventListener('click', function(){
      document.querySelector('.col-count-selector').classList.remove("active");
    });

    let customiserInputs = document.querySelectorAll(".config-container input");
    for (let i = 0; i < customiserInputs.length; i++){
      customiserInputs[i].addEventListener('keyup', function(e){
        self.customiserInput(e);
      });
    }
  },
  methods: {
    changeColor() {
      this.$store.commit('customiser/changeColor', 'red')
    },
    //TODO: Move these products into the vue store so that product images can be changed
    getAllProducts() {
      let self = this
      axios.get('/shopify/products')
        .then(function(response) {
          self.shopifyProductResponse = response.data.body;
          self.productsList = JSON.parse(response.data.body).products;
          self.productsShown = true;
        })
        .catch(function(error) {
          console.error(error);
        });
    },

    selectColumnCount(columns, hrcolumns, e) {
      this.columnSelector.columnCount = columns;
      this.columnSelector.HRCount = hrcolumns;
      this.toggleColumns(e);
    },

    toggleColumns(e){
      e.stopPropagation();
      let selector = document.querySelector(".col-count-selector");
      if (selector.classList.contains("active")) {
        selector.classList.remove("active");
      } else {
        selector.classList.add("active");
      }
    },

    customiserInput(e){
      let self = this;
      let objectArray = e.srcElement.dataset.cObject.split(".");

      clearTimeout(this.typingTimer);
      if (e.srcElement.value) {
        this.typingTimer = setTimeout(function(){
          self.$store.commit('customiser/setCustomiserValues', {value: e.srcElement.value, objectArray: objectArray});
        }, 1000);
      }

    }

  }
}
</script>
