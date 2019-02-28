<template>
<div class="export-container">
  <div class="export-inner">
    <div class="export-code-container">
      <div class="top-bar"><span>CSS</span><span v-on:click="generateCSS()"> Refresh Styles</span></div>
      <code class="css" v-if="styleType == 'css'">
        <div v-for="block in css" class="style-block">
          <div class="selector">{{block.selector}} {</div>
          <div class="style" v-for="(style, styleName) in block.properties"><span v-if="whitespace" v-html="whitespace"></span>{{styleName}}: {{style}};</div>
          <div class="closing-bracket">}</div>
          <br>

          <div v-if="block.pseudo" v-for="pseudoBlock in block.pseudo">
            <div class="selector">{{block.selector}}{{pseudoBlock.selector}} {</div>
            <div class="style" v-for="(pseudoStyle, pseudoStyleName) in pseudoBlock.properties"><span v-if="whitespace" v-html="whitespace"></span>{{pseudoStyleName}}: {{pseudoStyle}};</div>
            <div class="closing-bracket">}</div>
            <br>
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
      // css: {
      //   product: [],
      //   title: [],
      //   price: [],
      //   sale: [],
      //   saleEmblem: [],
      //   image: [],
      //   addToCart: [],
      //   viewProduct: []
      // },
      currentStyle: "style1",
      styleType: "css",
      whitespace: "&nbsp; &nbsp;",
      css: {
        ".cm-product-cell": {
          selector: ".cm-product-cell",
          properties: {
            "display": "flex",
            "padding": "15px",
          }
        },
        ".cm-product-inner": {
          selector: ".cm-product-inner",
          properties: {
            "position": "relative",
            "display": "flex",
            "flex-direction": "column",
            "width": "100%",
            "padding-bottom": "70px",
            "padding-top": "15px",
            "padding-left": "15px",
            "padding-right": "15px",
            "background": "#ffffff",
            "color": "#000000",
            "font-size": "0.875rem",
            "family": "Montserrat",
            // "transition": ".3s", TODO: Need to push this on style 1 only
          },
          pseudo: {
            ":hover": {
              selector: ":hover",
              properties: {
                "color": "red",
              }
            }
          }
        }
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
      let productProperties = Object.entries(this.product);
      for (let [property, style] of productProperties){
        if (style !== null) this.css[".cm-product-inner"].properties[property] = style;

        console.log(property);
        console.log(style);
      }

      // Place the specific style properties here.

    }
  }
}
</script>
