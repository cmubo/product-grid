export const state = () => ({
  colours: {
    pageBackground: "#000000",
    productBackground: "#ffffff",
    title: "#000000",
    price: "#000000",
    salePrice: "#ff0000",
    addToCart: "#00ff00",
  },
  color: "#ffffff",
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
      paddingX: null, // 15px
      paddingY: null, // 15px
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
})

export const actions = {

}

export const mutations = {
  setCustomiserValues(state, payload) {
    let objectArray = payload.objectArray;
    if (objectArray.length === 1) {
      state.cOptions[objectArray[0]] = payload.value;
    } else if (objectArray.length === 2) {
      state.cOptions[objectArray[0]][objectArray[1]] = payload.value;
    } else if (objectArray.length === 3) {
      state.cOptions[objectArray[0]][objectArray[1]][objectArray[2]] = payload.value;
    }
  }
}
