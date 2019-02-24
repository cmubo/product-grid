<template>
  <header>
    <div class="header-inner-container">
      <div class="logo">
        <h1>Product Customiser</h1>
      </div>
      <nav>
        <ul class="list-reset">
          <li><nuxt-link to="/">Home</nuxt-link></li>
          <li><nuxt-link to="/styles/style1">Style 1</nuxt-link></li>
          <li><nuxt-link to="/styles/style2">Style 2</nuxt-link></li>
        </ul>
      </nav>
      <div class="help-button">
        <a href="#">Help</a>
      </div>
    </div>
  </header>
</template>

<script>
    export default {

    }
</script>
