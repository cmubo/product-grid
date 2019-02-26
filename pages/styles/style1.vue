<template>
<section class="site-container split-config">

  <div class="product-configurator">
    <div class="config-container">
      <h3>Page</h3>
      <div class="config-item">
        <label>Background</label>
        <input v-model="oldcOptions.page.background" placeholder="#ffffff"></input>
      </div>

      <h3>Product Cell</h3>
      <div class="config-item">
        <label>padding</label>
        <input v-model="oldcOptions.cell.padding" placeholder="15px"></input>
      </div>

      <h3>Product</h3>
      <div class="config-item">
        <label>Background</label>
        <input data-c-object="product.background" placeholder="#ffffff"></input>
      </div>
      <div class="config-item">
        <label>Color</label>
        <input v-model="oldcOptions.product.color" placeholder="#ffffff"></input>
      </div>
      <div class="config-item">
        <label>Font Size</label>
        <input v-model="oldcOptions.product.fontSize" placeholder="0.875rem"></input>
      </div>
      <div class="config-item">
        <label>Font Family
          <Tooltip content="Whatever font you use needs to be pre-installed onto your computer."/>
        </label>
        <input v-model="oldcOptions.product.fontFamily" placeholder="Montserrat"></input>
      </div>
      <div class="config-item full-width dual-inputs">
        <label>Padding - X Y</label>
        <div class="di-container">
          <input v-model="oldcOptions.product.paddingX" placeholder="15px"></input>
          <input v-model="oldcOptions.product.paddingY" placeholder="15px"></input>
        </div>
      </div>

      <h3>Title</h3>
      <div class="config-item">
        <label>Color</label>
        <input v-model="oldcOptions.title.color" placeholder="#ffffff"></input>
      </div>
      <div class="config-item">
        <label>Font Size</label>
        <input v-model="oldcOptions.title.fontSize" placeholder="0.875rem"></input>
      </div>

      <h3>Price</h3>
      <div class="config-item">
        <label>Color</label>
        <input v-model="oldcOptions.price.color" placeholder="#ffffff"></input>
      </div>
      <div class="config-item">
        <label>Font Size</label>
        <input v-model="oldcOptions.price.fontSize" placeholder="0.875rem"></input>
      </div>

      <h3>Sale Price</h3>
      <div class="config-item">
        <label>Color</label>
        <input v-model="oldcOptions.sale.color" placeholder="#ffffff"></input>
      </div>
      <div class="config-item">
        <label>Font Size</label>
        <input v-model="oldcOptions.sale.fontSize" placeholder="0.875rem"></input>
      </div>
      <div class="config-item">
        <label>Text Decoration</label>
        <input v-model="oldcOptions.sale.textDecoration" placeholder="none"></input>
      </div>

      <h3>Sale Emblem</h3>
      <div class="config-item">
        <label>Color</label>
        <input v-model="oldcOptions.sale.color" placeholder="#ffffff"></input>
      </div>
      <div class="config-item">
        <label>Font Size</label>
        <input v-model="oldcOptions.sale.fontSize" placeholder="0.875rem"></input>
      </div>

      <h3>Add To Cart</h3>
      <div class="config-item">
        <label>Background</label>
        <input v-model="oldcOptions.addToCart.background" placeholder="#ffffff"></input>
      </div>
      <div class="config-item">
        <label>Color</label>
        <input v-model="oldcOptions.addToCart.color" placeholder="#ffffff"></input>
      </div>
      <div class="config-item">
        <label>Font Size</label>
        <input v-model="oldcOptions.addToCart.fontSize" placeholder="0.875rem"></input>
      </div>

      <h3>View Product</h3>
      <div class="config-item">
        <label>Background</label>
        <input v-model="oldcOptions.viewProduct.background" placeholder="#ffffff"></input>
      </div>
      <div class="config-item">
        <label>Color</label>
        <input v-model="oldcOptions.viewProduct.color" placeholder="#ffffff"></input>
      </div>
      <div class="config-item">
        <label>Font Size</label>
        <input v-model="oldcOptions.viewProduct.fontSize" placeholder="0.875rem"></input>
      </div>


    </div>
  </div>
  <!-- TODO: Create a list view class which changes layout of products to full width -->
  <div class="cm-products-container">
    <div class="cm-products-actions">
      <!-- TODO: Only show col count if in grid view -->
      <div class="" v-on:click="changeColor()">{{ $store.state.customiser.color }}</div>
      <div class="">{{ $store.state.customiser.colours.pageBackground }}</div>
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
        <div class="cm-product-inner" :style="{backgroundColor: oldcOptions.product.background,
          fontSize: oldcOptions.product.fontSize,
          fontFamily: oldcOptions.product.fontFamily,
          color: oldcOptions.product.color,
          paddingTop: oldcOptions.product.paddingY,
          paddingLeft: oldcOptions.product.paddingX,
          paddingRight: oldcOptions.product.paddingX}">
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
              <div class="cm-title" :style="{color: oldcOptions.title.color, fontSize: oldcOptions.title.fontSize}">{{ item.title }}</div>
            </a>
          </div>
          <div class="cm-product-price" v-if="item.variants[0].compare_at_price === null">
            <div class="cm-price" :style="{color: oldcOptions.price.color, fontSize: oldcOptions.price.fontSize}">{{ item.variants[0].price}}</div>
          </div>

          <div class="cm-product-price price-with-sale" v-if="item.variants[0].compare_at_price">
            <div class="cm-price" :style="{color: oldcOptions.price.color, fontSize: oldcOptions.price.fontSize}">{{ item.variants[0].price}}</div>
            <div class="compare-at-price" v-if="item.variants[0].compare_at_price" :style="{color: oldcOptions.sale.color, fontSize: oldcOptions.sale.fontSize, textDecoration: oldcOptions.sale.textDecoration}">{{ item.variants[0].compare_at_price }}</div>
          </div>

          <div class="cm-links">
            <a class="cm-cart-link" :style="{backgroundColor: oldcOptions.addToCart.background, fontSize: oldcOptions.addToCart.fontSize, color: oldcOptions.addToCart.color}">Add To Cart</a>
            <a class="cm-view-link" :style="{backgroundColor: oldcOptions.viewProduct.background, fontSize: oldcOptions.viewProduct.fontSize, color: oldcOptions.viewProduct.color}">View Product</a>
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
      },
      oldcOptions: {
        //Product default null, CSS is used instead.
        page: {
          background: null
        },
        cell: {
          padding: null
        },
        product: {
          //This will control many of the default values using css inheritance
          background: null, // #fff
          paddingX: null,  // 15px
          paddingY: null,  // 15px
          fontSize: null, // 0.875rem
          fontFamily: null, // Montserrat
          color: null, // #000000
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
        saleEmblem: {
          position: null,
          background: null,
          color: null,
          borderRadius: null
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
  computed: mapState([
    'color', 'cOptions'
  ]),
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
