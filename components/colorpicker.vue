<template>
<div class="color-picker" acp-show-alpha></div>
</template>

<script>
const AColorPicker = require('a-color-picker');

export default {
  data: function() {
    return {
      colorpicker: ""
    }
  },
  mounted: function() {
    let self = this;

    document.addEventListener('click', function(event) {
      if (document.querySelector(".color-picker--active")) document.querySelector(".color-picker--active").classList.remove('color-picker--active');
    });

    AColorPicker.from(this.$el).on('change', (picker, color) => {
      let objectArray = picker.element.parentElement.previousElementSibling.dataset.cObject.split(".");
      this.$store.commit('customiser/setCustomiserValues', {
        value: color,
        objectArray: objectArray
      });
      picker.element.parentElement.previousElementSibling.value = color;
    });

    this.$el.parentElement.addEventListener('click', function(event) {
      event.stopPropagation();
      self.colorPickerToggle(event, self.$el.parentElement);
    });
  },

  methods: {
    colorPickerToggle(event, element) {
      if (!event.path.includes(this.$el)) { // If the path of the clicked element contains the actual color picker, dont remove the colour picker.
        if (document.querySelector(".color-picker--active")) { // Removes any other instances of the colour picker
          if (document.querySelector(".color-picker--active") !== element) document.querySelector(".color-picker--active").classList.remove('color-picker--active');
        }

        element.classList.contains('color-picker--active') ? element.classList.remove('color-picker--active') : element.classList.add('color-picker--active');
      }
    }
  }
}
</script>
