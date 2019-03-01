export const state = () => ({
  products: null,
  productsRetrieved: null
})

export const actions = {}

export const mutations = {
  setProducts(state, products) {
    state.products = products;
    state.productsRetrieved = true;
  }
}
