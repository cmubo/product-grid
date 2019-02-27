<template>
<div class="export-container">
  <div class="export-inner">
    <div class="export-code-container">
      <div class="top-bar"><span>CSS</span></div>
      <code>
        <div class="class-block">
          <div>
            .cm-product-cell, .cm-product-cell * {
              <div><span>&nbsp;&nbsp;</span>box-sizing: border-box;</div>
            }
          </div>
          <div>
            .cm-product-cell:hover .cm-product-inner {
              <div><span>&nbsp;&nbsp;</span>box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);</div>
            }
          </div>
        </div>

        <div class="class-block">
          <div>
            .cm-product-cell {
              <div><span>&nbsp;&nbsp;</span>display: flex;</div>
              <div class="reactive">
                <span>&nbsp;&nbsp;</span>padding: <span v-if="cell.padding">{{cell.padding}}</span><span v-else>15px</span>;
              </div>
            }
          </div>
          <div>
            .cm-product-cell:hover .cm-product-inner {
              <div><span>&nbsp;&nbsp;</span>box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);</div>
            }
          </div>
        </div>
        <div class="class-block">
          .cm-product-inner {
            <div><span>&nbsp;&nbsp;</span>position: relative;</div>
            <div><span>&nbsp;&nbsp;</span>width: 100%;</div>
            <div><span>&nbsp;&nbsp;</span>display: flex;</div>
            <div><span>&nbsp;&nbsp;</span>flex-direction: column;</div>
            <div><span>&nbsp;&nbsp;</span>padding-bottom: 70px;</div>
            <div class="reactive">
              <div v-if="product.paddingX">
                <div><span>&nbsp;&nbsp;</span>padding-left: {{product.paddingX}};</div>
                <div><span>&nbsp;&nbsp;</span>padding-right: {{product.paddingX}};</div>
              </div>
              <div v-else>
                <div><span>&nbsp;&nbsp;</span>padding-left: 10px;</div>
                <div><span>&nbsp;&nbsp;</span>padding-right: 10px;</div>
              </div>
              <div>
                <span>&nbsp;&nbsp;</span><span v-if="product.paddingY">{{product.paddingY}}</span><span v-else>padding-top: 10px</span>;
              </div>
            </div>
            <div><span>&nbsp;&nbsp;</span>transition: 0.3s;</div>
            <div class="reactive">
              <span>&nbsp;&nbsp;</span>background-color: <span v-if="product.background">{{product.background}}</span><span v-else>#ffffff</span>;
            </div>
            <div class="reactive">
              <span>&nbsp;&nbsp;</span>color: <span v-if="product.color">{{product.color}}</span><span v-else>#000000</span>;
            </div>
          }
        </div>

        <div class="class-block">
          <div>
            .cm-product-title {

            }
          </div>
        </div>




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
      css: {
        product: [],
        title: [],
        price: [],
        sale: [],
        saleEmblem: [],
        image: [],
        addToCart: [],
        viewProduct: []
      }
    }
  },
  computed: {
    ...mapState({
      cell: state => state.customiser.cOptions.cell,
      product: state => state.customiser.cOptions.product,
      image: state => state.customiser.cOptions.image,
      title: state => state.customiser.cOptions.title,
      price: state => state.customiser.cOptions.price,
      sale: state => state.customiser.cOptions.sale,
      addToCart: state => state.customiser.cOptions.addToCart,
      viewProduct: state => state.customiser.cOptions.viewProduct
    })
  },
  mounted: function(){
    this.generateCSS();
  },
  methods: {
    generateCSS(){
      for (let i = 0; i < this.product.length; i++){
        console.log(this.product[i]);
      }
    }
  }
}
</script>
