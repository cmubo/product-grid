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
        <label>Color</label>
        <input v-model="cOptions.product.color" placeholder="#ffffff"></input>
      </div>
      <div class="config-item">
        <label>Font Size</label>
        <input v-model="cOptions.product.fontSize" placeholder="0.875rem"></input>
      </div>
      <div class="config-item">
        <label>Font Family
          <Tooltip content="Whatever font you use needs to be pre-installed onto your computer."/>
        </label>
        <input v-model="cOptions.product.fontFamily" placeholder="Montserrat"></input>
      </div>
      <div class="config-item full-width dual-inputs">
        <label>Padding - X Y</label>
        <div class="di-container">
          <input v-model="cOptions.product.paddingX" placeholder="15px"></input>
          <input v-model="cOptions.product.paddingY" placeholder="15px"></input>
        </div>
      </div>

      <h3>Title</h3>
      <div class="config-item">
        <label>Color</label>
        <input v-model="cOptions.title.color" placeholder="#ffffff"></input>
      </div>
      <div class="config-item">
        <label>Font Size</label>
        <input v-model="cOptions.title.fontSize" placeholder="0.875rem"></input>
      </div>

      <h3>Price</h3>
      <div class="config-item">
        <label>Color</label>
        <input v-model="cOptions.price.color" placeholder="#ffffff"></input>
      </div>
      <div class="config-item">
        <label>Font Size</label>
        <input v-model="cOptions.price.fontSize" placeholder="0.875rem"></input>
      </div>

      <h3>Sale Price</h3>
      <div class="config-item">
        <label>Color</label>
        <input v-model="cOptions.sale.color" placeholder="#ffffff"></input>
      </div>
      <div class="config-item">
        <label>Font Size</label>
        <input v-model="cOptions.sale.fontSize" placeholder="0.875rem"></input>
      </div>
      <div class="config-item">
        <label>Text Decoration</label>
        <input v-model="cOptions.sale.textDecoration" placeholder="none"></input>
      </div>

      <h3>Sale Emblem</h3>
      <div class="config-item">
        <label>Color</label>
        <input v-model="cOptions.sale.color" placeholder="#ffffff"></input>
      </div>
      <div class="config-item">
        <label>Font Size</label>
        <input v-model="cOptions.sale.fontSize" placeholder="0.875rem"></input>
      </div>

      <h3>Add To Cart</h3>
      <div class="config-item">
        <label>Background</label>
        <input v-model="cOptions.addToCart.background" placeholder="#ffffff"></input>
      </div>
      <div class="config-item">
        <label>Color</label>
        <input v-model="cOptions.addToCart.color" placeholder="#ffffff"></input>
      </div>
      <div class="config-item">
        <label>Font Size</label>
        <input v-model="cOptions.addToCart.fontSize" placeholder="0.875rem"></input>
      </div>

      <h3>View Product</h3>
      <div class="config-item">
        <label>Background</label>
        <input v-model="cOptions.viewProduct.background" placeholder="#ffffff"></input>
      </div>
      <div class="config-item">
        <label>Color</label>
        <input v-model="cOptions.viewProduct.color" placeholder="#ffffff"></input>
      </div>
      <div class="config-item">
        <label>Font Size</label>
        <input v-model="cOptions.viewProduct.fontSize" placeholder="0.875rem"></input>
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
        <div class="cm-product-inner" :style="{backgroundColor: cOptions.product.background,
          fontSize: cOptions.product.fontSize,
          fontFamily: cOptions.product.fontFamily,
          color: cOptions.product.color,
          paddingTop: cOptions.product.paddingY,
          paddingLeft: cOptions.product.paddingX,
          paddingRight: cOptions.product.paddingX}">
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
              <div class="cm-title" :style="{color: cOptions.title.color, fontSize: cOptions.title.fontSize}">{{ item.title }}</div>
            </a>
          </div>
          <div class="cm-product-price" v-if="item.variants[0].compare_at_price === null">
            <div class="cm-price" :style="{color: cOptions.price.color, fontSize: cOptions.price.fontSize}">{{ item.variants[0].price}}</div>
          </div>

          <div class="cm-product-price price-with-sale" v-if="item.variants[0].compare_at_price">
            <div class="cm-price" :style="{color: cOptions.price.color, fontSize: cOptions.price.fontSize}">{{ item.variants[0].price}}</div>
            <div class="compare-at-price" v-if="item.variants[0].compare_at_price" :style="{color: cOptions.sale.color, fontSize: cOptions.sale.fontSize, textDecoration: cOptions.sale.textDecoration}">{{ item.variants[0].compare_at_price }}</div>
          </div>

          <div class="cm-links">
            <a class="cm-cart-link" :style="{backgroundColor: cOptions.addToCart.background, fontSize: cOptions.addToCart.fontSize, color: cOptions.addToCart.color}">Add To Cart</a>
            <a class="cm-view-link" :style="{backgroundColor: cOptions.viewProduct.background, fontSize: cOptions.viewProduct.fontSize, color: cOptions.viewProduct.color}">View Product</a>
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
import {
  mapState
} from 'vuex';

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
      columnSelector: {
          columnCount: "five-col",
          HRCount: "Five Columns"
      },
      cOptions: {
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
  mounted: function() {
    this.getAllProducts();

    document.addEventListener('click', function(){
      document.querySelector('.col-count-selector').classList.remove("active");
    });
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
    }

  }
}
</script>
