export const state = () => ({
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
      "font-size": null, // 0.875rem
      "font-family": null, // Montserrat
      color: null, // #000000
    },
    title: {
      color: null,
      "font-size": null
    },
    price: {
      color: null,
      "font-size": null
    },
    sale: {
      color: null,
      "font-size": null,
      "text-decoration": null
    },
    saleEmblem: {
      position: null,
      background: null,
      color: null,
      "border-radius": null
    },
    image: {
      hoverStyle: null, // This will Control whether user wants to hover and display the next image or not. Or any other image hover styles I think of.
      bgStyle: null
    },
    addToCart: {
      "font-size": null,
      background: null,
      color: null
    },
    viewProduct: {
      "font-size": null,
      background: null,
      color: null
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
