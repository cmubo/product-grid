<template>
<section class="site-container split-config">

  <Customiser />
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
        <div class="cm-product-inner" :style="{backgroundColor: product.background,
          fontSize: product['font-size'],
          fontFamily: product['font-family'],
          color: product.color,
          paddingTop: product.paddingY,
          paddingLeft: product.paddingX,
          paddingRight: product.paddingX}">
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
              <div class="cm-title" :style="{color: title.color, fontSize: title['font-size']}">{{ item.title }}</div>
            </a>
          </div>
          <div class="cm-product-price" v-if="item.variants[0].compare_at_price === null">
            <div class="cm-price" :style="{color: price.color, fontSize: price['font-size']}">{{ item.variants[0].price}}</div>
          </div>

          <div class="cm-product-price price-with-sale" v-if="item.variants[0].compare_at_price">
            <div class="cm-price" :style="{color: price.color, fontSize: price['font-size']}">{{ item.variants[0].price}}</div>
            <div class="cm-compare-at-price" v-if="item.variants[0].compare_at_price" :style="{color: sale.color, fontSize: sale['font-size'], textDecoration: sale.textDecoration}">{{ item.variants[0].compare_at_price }}</div>
          </div>

          <div class="cm-links">
            <a href="#" class="cm-cart-link" :style="{backgroundColor: addToCart.background, fontSize: addToCart['font-size'], color: addToCart.color}">Add To Cart</a>
            <a href="#" class="cm-view-link" :style="{backgroundColor: viewProduct.background, fontSize: viewProduct['font-size'], color: viewProduct.color}">View Product</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
import axios from 'axios';
import Customiser from '~/components/customiser.vue';
import { mapState } from 'vuex';
const json = require('~/static/products.json');

export default {
  components: {
    Customiser
  },
  data: function() {
    return {
      columnSelector: {
          columnCount: "five-col",
          HRCount: "Five Columns"
      }
    }
  },
  computed: {
    ...mapState({
      productsList: state => state.products.products,
      product: state => state.customiser.cOptions.product,
      image: state => state.customiser.cOptions.image,
      title: state => state.customiser.cOptions.title,
      price: state => state.customiser.cOptions.price,
      sale: state => state.customiser.cOptions.sale,
      addToCart: state => state.customiser.cOptions.addToCart,
      viewProduct: state => state.customiser.cOptions.viewProduct
    })
  },
  mounted: function() {
    document.addEventListener('click', function(){
      document.querySelector('.col-count-selector').classList.remove("active");
    });
  },
  methods: {
    getProducts() {
      this.$store.commit('setProducts', json);
    },

    selectColumnCount(columns, hrcolumns, e) {
      this.columnSelector.columnCount = columns;
      this.columnSelector.HRCount = hrcolumns;
      this.toggleColumns(e);
    },

    toggleColumns(e){
      e.stopPropagation();
      let selector = document.querySelector(".col-count-selector");
      selector.classList.contains("active") ? selector.classList.remove("active") : selector.classList.add("active");
    }
  }
}
</script>
