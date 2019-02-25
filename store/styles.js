export const state = () => ({
  colours: {
    pageBackground: "#000000",
    productBackground: "#ffffff",
    title: "#000000",
    price: "#000000",
    salePrice: "#ff0000",
    addToCart: "#00ff00",
  },
  color: "#ffffff"
})

export const actions = {
  getImages({commit}, query) {

  }
}

export const mutations = {
  setImages(state, images){
    //state.imageResults = images;
  },
  setProductBackground(state, value){
    state.colours.productBackground = value;
  }
}
