<template>
<header>
  <div class="header-inner-container">
    <div class="logo">
      <h1>CM Product Customiser</h1>
    </div>
    <nav>
      <ul class="list-reset nav-ul" :data-active-item="currentNavItem">
        <li>
          <nuxt-link to="/">Home</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/styles/style1">Style 1</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/styles/style2">Style 2</nuxt-link>
        </li>
        <span class="active-bar"></span>
      </ul>
    </nav>
    <div class="right-button export-button">
      <a href="#" v-on:click.prevent="openExport($event)">Export</a>
    </div>
    <div class="right-button help-button">
      <a href="#">Help</a>
    </div>
  </div>
</header>
</template>

<script>
export default {
  data: function() {
    return {
      currentNavItem: null
    }
  },
  mounted: function() {
    this.currentNavItemAnimate();
  },
  methods: {
    currentNavItemAnimate() {
      let navItems = document.querySelectorAll(".nav-ul > li > a"),
        activeBar = document.querySelector(".nav-ul > .active-bar");

      for (let i = 0; i < navItems.length; i++) {
        if (navItems[i].classList.contains("nuxt-link-exact-active")) {
          this.currentNavItem = i * 100;
        }

        activeBar.style.transform = `translateX(${this.currentNavItem}px)`;
      }
    },
    openExport(event) {
      if (document.querySelector(".export-outer")){
        let exportOuter = document.querySelector(".export-outer");
        window.dispatchEvent(new CustomEvent('toggle-export'));
        if (exportOuter.classList.contains("export-outer--active")){
            exportOuter.classList.remove("export-outer--active");
        } else {
          exportOuter.classList.add("export-outer--active");
        }
      }
    }
  },
  watch: {
    '$route.path': function() {
      let self = this;
      //Set timeout so function call is placed after the methods in the event loop
      setTimeout(function() {
        self.currentNavItemAnimate();
      }, 0);
    }
  },
}
</script>
