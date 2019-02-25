<template>
<section class="site-container split-config">

  <div class="product-configurator">
    <div class="config-container">
      <h3>Page</h3>
      <div class="config-item">
        <label>Background</label>
        <input v-model="cOptions.page.background" placeholder="#ffffff"></input>
      </div>

      <h3>Product Cell</h3>
      <div class="config-item">
        <label>padding</label>
        <input v-model="cOptions.cell.padding" placeholder="15px"></input>
      </div>

      <h3>Product</h3>
      <div class="config-item">
        <label>Background</label>
        <input v-model="cOptions.product.background" placeholder="#ffffff"></input>
      </div>
      <div class="config-item">
        <label>Font Family
          <span class="config-tooltip" data-content="Whatever font you use needs to be already installed onto your computer.">?</span>
        </label>
        <input v-model="cOptions.title.color" placeholder="#ffffff"></input>
      </div>
      <div class="config-item">
        <label>Price</label>
        <input v-model="cOptions.price.color" placeholder="#ffffff"></input>
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
        <div class="cm-product-inner" :style="{backgroundColor: cOptions.product.background}">
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
              <div class="cm-title" :style="{color: cOptions.title.color, fontSize: cOptions.title.fontSize}">{{ item.title }}</div>
            </a>
          </div>
          <div class="cm-product-price">
            <div class="cm-price" :style="{color: cOptions.price.color}">{{ item.variants[0].price}}</div>
          </div>

          <div class="cm-product-price price-with-sale" v-if="item.variants[0].compare_at_price">
            <div class="cm-price" :style="{color: cOptions.price.color}">{{ item.variants[0].price}}</div>
            <div class="compare-at-price" v-if="item.variants[0].compare_at_price" :style="{color: cOptions.salePrice.color}">{{ item.variants[0].compare_at_price }}</div>
          </div>

          <div class="cm-links">
            <a class="cm-cart-link" :style="{backgroundColor: cOptions.addToCart.background, fontSize: cOptions.addToCart.fontSize}">Add To Cart</a>
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
      cOptions: {
        //Product default null, CSS is used instead.
        page: {
          background: null
        },
        cell: {
          padding: "15px"
        },
        product: {
          //This will control many of the default values using css inheritance
          background: null, // #fff
          padding: null,  // 15px
          fontSize: null, // 0.875rem
          fontFamily: null, // Montserrat
          color: null, // #000000
          shadow: null // 0 0 15px rgba(0, 0, 0, 0.2)
        },
        title: {
          color: null,
          fontSize: null
        },
        price: {
          color: null,
          fontSize: null
        },
        sale: {
          color: null,
          fontSize: null,
          textDecoration: null
        },
        image: {
          hoverStyle: null, // This will Control whether user wants to hover and display the next image or not. Or any other image hover styles I think of.
          bgStyle: null
        },
        addToCart: {
          fontSize: null,
          background: null,
          color: null
        },
        viewProduct: {
          fontSize: null,
          background: null,
          color: null,
          hide: false
        }
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
