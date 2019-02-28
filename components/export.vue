<template>
<div class="export-container">
  <div class="export-inner">
    <div class="export-information">
      <h4>Export</h4>
      <p>
        Replace any comments in the html with the appropriate code to generate specific elements.
        A container should be placed around the cm-product-cell to control the width of the element.
      </p>
    </div>

    <div class="export-code-container">
      <div class="top-bar"><span>HTML</span></div>
        <code class="html">
&#x3C;div class=&#x22;cm-product-cell&#x22;&#x3E;
  &#x3C;div class=&#x22;cm-product-inner&#x22;&#x3E;
    &#x3C;div class=&#x22;cm-product-img&#x22; style=&#x22;background-image: url(&#x3C;!-- Product image here --&#x3E;);&#x22;&#x3E;
      &#x3C;a href=&#x22;&#x3C;!-- PRODUCT LINK HERE --&#x3E;&#x22;&#x3E;
        &#x3C;img src=&#x22;&#x3C;!-- PRODUCT IMAGE HERE --&#x3E;&#x22;&#x3E;
        &#x3C;/a&#x3E;
    &#x3C;/div&#x3E;
    &#x3C;div class=&#x22;cm-product-title&#x22;&#x3E;
      &#x3C;a href=&#x22;&#x3C;!-- PRODUCT LINK HERE --&#x3E;&#x22;&#x3E;
        &#x3C;div class=&#x22;cm-title&#x22;&#x3E;&#x3C;!-- PRODUCT TITLE HERE --&#x3E;&#x3C;/div&#x3E;
      &#x3C;/a&#x3E;
    &#x3C;/div&#x3E;
    &#x3C;!-- IF THERE IS NO SALE PRICE --&#x3E;
    &#x3C;div class=&#x22;cm-product-price&#x22;&#x3E;
      &#x3C;div class=&#x22;cm-price&#x22;&#x3E;&#x3C;!-- PRODUCT PRICE HERE --&#x3E; &#x3C;/div&#x3E;
    &#x3C;/div&#x3E;

    &#x3C;!-- IF THERE IS A SALE PRICE --&#x3E;
    &#x3C;div class=&#x22;cm-product-price price-with-sale&#x22;&#x3E;
      &#x3C;div class=&#x22;cm-price&#x22;&#x3E;&#x3C;!-- PRODUCT PRICE HERE --&#x3E; &#x3C;/div&#x3E;
      &#x3C;div class=&#x22;compare-at-price&#x22;&#x3E;&#x3C;!-- COMPARE PRICE HERE --&#x3E; &#x3C;/div&#x3E;
    &#x3C;/div&#x3E;

    &#x3C;div class=&#x22;cm-links&#x22;&#x3E;
      &#x3C;a href=&#x22;#&#x22; class=&#x22;cm-cart-link&#x22;&#x3E;Add To Cart&#x3C;/a&#x3E;&#x3C;!-- Add an event listener to this a --&#x3E;
      &#x3C;a href=&#x22;&#x3C;!-- PRODUCT LINK HERE --&#x3E;&#x22; class=&#x22;cm-view-link&#x22;&#x3E;View Product&#x3C;/a&#x3E;
    &#x3C;/div&#x3E;
  &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
        </code>
    </div>

    <div class="export-code-container">
      <div class="top-bar"><span>CSS</span></div>
        <code class="css" v-if="styleType == 'css'">
          <div v-for="block in css" class="style-block">
            <div class="selector">{{block.selector}} {</div>
            <div class="style" v-for="(style, styleName) in block.attributes"><span v-if="whitespace" v-html="whitespace"></span>{{styleName}}: {{style}};</div>
            <div class="closing-bracket">}</div>
            <br>
            <!-- TODO: These will need to be replaced with a recursive component in the future so it can traverse through multiple children-->
            <div v-if="block.pseudo" v-for="pseudoBlock in block.pseudo">
              <div class="selector">{{block.selector}}{{pseudoBlock.selector}} {</div>
              <div class="style" v-for="(pseudoStyle, pseudoStyleName) in pseudoBlock.attributes"><span v-if="whitespace" v-html="whitespace"></span>{{pseudoStyleName}}: {{pseudoStyle}};</div>
              <div class="closing-bracket">}</div>
              <br>
            </div>

            <div v-if="block.children" v-for="childBlock in block.children">
              <div class="selector">{{block.selector}} {{childBlock.selector}} {</div>
              <div class="style" v-for="(childStyle, childStyleName) in childBlock.attributes"><span v-if="whitespace" v-html="whitespace"></span>{{childStyleName}}: {{childStyle}};</div>
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
      currentStyle: "style1",
      styleType: "css",
      whitespace: "&nbsp; &nbsp;",
      // TODO: Attributes needs to be of type array ideally so that we can push and remove attributes.
      css: {
        ".cm-product-cell": {
          selector: ".cm-product-cell",
          attributes: {
            "display": "flex",
            "padding": "15px"
          },
          pseudo: {
            ":hover .cm-product-inner": {
              selector: ":hover .cm-product-inner",
              attributes: {
                "box-shadow": "0 0 15px rgba(0,0,0,0.2)",
              }
            },
            ":hover .cm-product-inner .cm-links": {
              selector: ":hover .cm-product-inner .cm-links",
              attributes: {
                "visibility": "visible",
                "opacity": "1",
              }
            }
          }
        },
        ".cm-product-inner": {
          selector: ".cm-product-inner",
          attributes: {
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
            "font-size": "14px",
            "font-family": "Montserrat",
            "transition": ".3s", // TODO: Need to push this on style 1 only.
          }
        },
        ".cm-product-img": { // TODO: This will need to be changed when more styles are added.
          selector: ".cm-product-img",
          attributes: {
            "position": "relative",
            "width": "100%",
            "padding": "50%",
            "height": "0",
            "background-size": "contain",
            "background-position": "center center",
            "background-repeat": "no-repeat",
          },
          children: {
            "> a": {
              selector: "> a",
              attributes: {
                "position": "asolute",
                "width": "100%",
                "height": "100%",
                "top": "0",
                "left": "0",
              }
            },
            "img": {
              selector: "img",
              attributes: {
                "width": "0",
                "height": "0",
              }
            }
          }
        },
        ".cm-product-title": {
          selector: ".cm-product-title",
          attributes: {
            "text-align": "center",
            "padding-top": "15px",
            "padding-bottom": "15px",
          },
          children: {
            "a": {
              selector: "a",
              attributes: {
                "color": "inherit",
                "text-decoration": "none",
              }
            },
            "a .cm-title": {
              selector: "a .cm-title",
              attributes: {
                "color": "#000000",
                "font-size": "14px"
              }
            }
          }
        },
        ".cm-product-price": {
          selector: ".cm-product-price",
          attributes: {
            "flex-grow": "1",
            "text-align": "center", // TODO: Add these (font-weight too) as reactive attributes
            "font-weight": "bold",
          },
          children: {
            ".cm-price": {
              selector: ".cm-price",
              attributes: {
                "color": "#000000",
                "font-size": "14px"
              }
            },
            ".cm-compare-at-price": {
              selector: ".cm-compare-at-price",
              attributes: {
                "color": "#000000",
                "font-size": "14px",
                "text-decoration": "none"
              }
            }
          }
        },
        ".cm-links": {
          selector: ".cm-links",
          attributes: {
            "display": "flex",
            "position": "absolute",
            "width": "100%",
            "bottom": "0",
            "left": "0",
            "opacity": "0",
            "visibility": "hidden",
            "transition": "0.3s",
          },
          children: {
            "> a": {
              selector: "> a",
              attributes: {
                "display": "block",
                "width": "50%",
                "background": "#000000",
                "color": "#ffffff",
                "padding": "5px",
                "text-align": "center",
                "font-size": "14px",
                "font-weight": "bold",
                "text-decoration": "none",
                "line-height": "25px",
              }
            },
            "> a.cm-cart-link": {
              selector: "> a.cm-cart-link",
              attributes: {
                "background": "#2e2e2e",
                "color": "#fff",
                "font-size": "14px"
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
    window.addEventListener('toggle-export', (event) => {
      this.generateCSS();
    }, false);

    let exportOuter = document.querySelector(".export-outer");
    exportOuter.addEventListener("click", (event) => {
      event.stopPropagation();
      if (!event.path.includes(document.querySelector(".export-inner"))) {
          if (exportOuter.classList.contains("export-outer--active")) exportOuter.classList.remove("export-outer--active");
      }
    })
  },
  methods: {
    generateCSS(){
      // TODO: If a value is added then removed, the attribute will show an empty value, default value needs to be there.

      let productProperties = Object.entries(this.product);
      for (let [property, style] of productProperties) {
        // TODO: Need to configure this so padding works too.
        if (style !== null) this.css[".cm-product-inner"].attributes[property] = style;
      }

      let titleProperties = Object.entries(this.title);
      for (let [property, style] of titleProperties){
        if (style !== null) this.css[".cm-product-title"].children["a .cm-title"].attributes[property] = style;
      }

      let priceProperties = Object.entries(this.price);
      for (let [property, style] of priceProperties){
        if (style !== null) this.css[".cm-product-price"].children[".cm-price"].attributes[property] = style;
      }

      let salePriceProperties = Object.entries(this.sale);
      for (let [property, style] of salePriceProperties){
        if (style !== null) this.css[".cm-product-price"].children[".cm-compare-at-price"].attributes[property] = style;
      }

      //TODO: Sale Emblem
      //TODO: image

      let addCartProperties = Object.entries(this.addToCart);
      for (let [property, style] of addCartProperties){
        if (style !== null) this.css[".cm-links"].children["> a"].attributes[property] = style;
      }

      let viewProductProperties = Object.entries(this.viewProduct);
      for (let [property, style] of viewProductProperties){
        if (style !== null) this.css[".cm-links"].children["> a.cm-cart-link"].attributes[property] = style;
      }

      // Place the specific style properties here.

    }
  }
}
</script>
