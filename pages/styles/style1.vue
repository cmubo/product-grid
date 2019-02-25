<template>
<section class="site-container split-config">

  <div class="product-configurator">
    <div class="config-container">
      <h3>Product</h3>
      <div class="config-row">
        <label>Product BG</label>
        <input v-model="colours.productBackground" placeholder="#ffffff"></input>
      </div>
      <div class="config-row">
        <label>Title</label>
        <input v-model="colours.title" placeholder="#ffffff"></input>
      </div>
      <div class="config-row">
        <label>Price</label>
        <input v-model="colours.price" placeholder="#ffffff"></input>
      </div>
    </div>
  </div>
  <!-- TODO: Create a list view class which changes layout of products to full width -->
  <div class="cm-products-container">
    <div class="cm-products-actions">
      <!-- TODO: Only show col count if in grid view -->
      <div class="col-count-selector">
        <a href="#" class="three-col-btn col-count-btn"></a>
        <a href="#" class="four-col-btn col-count-btn"></a>
        <a href="#" class="five-col-btn col-count-btn"></a>
        <a href="#" class="six-col-btn col-count-btn"></a>
      </div>
      <div class="col-type-selector"></div>
    </div>
    <div class="cm-products cm-grid-view cm-style-1 five-col">
      <div class="cm-product-cell" v-for="item in productsList">
        <div class="cm-product-inner" :style="{backgroundColor: colours.productBackground}">
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
            <a href="">
              <div class="cm-title" :style="{color: colours.title}">{{ item.title }}</div>
            </a>
          </div>
          <div class="cm-product-price">
            <div class="cm-price" :style="{color: colours.price}">{{ item.variants[0].price}}</div>
          </div>

          <div class="cm-product-price price-with-sale" v-if="item.variants[0].compare_at_price">
            <div class="cm-price" :style="{color: colours.price}">{{ item.variants[0].price}}</div>
            <div class="compare-at-price" v-if="item.variants[0].compare_at_price" :style="{color: colours.salePrice}">{{ item.variants[0].compare_at_price }}</div>
          </div>

          <div class="cm-links">
            <a class="cm-cart-link" :style="{backgroundColor: colours.addToCart}">Add To Cart</a>
            <a class="cm-view-link">View Product</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
import axios from 'axios';
import {
  mapState
} from 'vuex';

export default {
  components: {

  },
  data: function() {
    return {
      shopifyProductResponse: null,
      AllProductsJson: null,
      productsList: null,
      productsShown: false,
      colours: {
        pageBackground: "#000000",
        productBackground: "#ffffff",
        title: "#000000",
        price: "#000000",
        salePrice: "#ff0000",
        addToCart: "#00ff00",
      }
    }

  },
  mounted: function() {
    this.getAllProducts();
  },
  methods: {
    //TODO: Move these products into the vue store so that product images can be changed
    getAllProducts() {
      let self = this
      axios.get('/shopify/products')
        .then(function(response) {
          self.shopifyProductResponse = response.data.body;
          self.productsList = JSON.parse(response.data.body).products;
          self.productsShown = true;

          console.log(response.data.body);
        })
        .catch(function(error) {
          console.log(error);
        });
    },

  }
}
</script>
