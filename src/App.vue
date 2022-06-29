<script>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Navbar',
  data () {
    return {
      msg: '',
      activator: false
    }
  },
  mounted: function () {

  },
  methods: {
    makeBurger () {
      this.activator = !this.activator
      return this.activator
    },
    hideDropdown() {
      console.log('hi')
      this.$refs.burger.classList.remove("is-active");
      this.$refs.dropdown.classList.remove("is-active");
    },
  },
  watch:{
    $route (to, from){
    }
} 
}
</script>

<template>
  <header>
      <!-- <HelloWorld msg="You did it!" /> -->


    <nav class="navbar is-info">
      <div class="navbar-brand">
        <a class="navbar-item is-size-3" href="https://bulma.io">
          D3 Demos by Wes
        </a>
        <div ref="burger" class="navbar-burger" data-target="navbarExampleTransparentExample" @click="makeBurger" v-bind:class="{ 'is-active': activator }" >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div id="navbarExampleTransparentExample" class="navbar-menu" v-bind:class="{ 'is-active': activator }">
        <div class="navbar-start">
          <div class="navbar-item">
            <RouterLink style="text-decoration: none; color: inherit;" to="/home">Home</RouterLink>
          </div>
          <div class="navbar-item has-dropdown is-hoverable" ref="dropdown" v-bind:class="{ 'is-active': activator }">
            <a class="navbar-link">
              Charts
            </a>
            <div class="navbar-dropdown is-boxed">
                <a><RouterLink class="navbar-item" to="/barchart">Barchart</RouterLink></a>
                <a><RouterLink class="navbar-item" to="/linechart">Linechart</RouterLink></a>
                <a><RouterLink class="navbar-item" to="/interactivebar">Interactive Barchart</RouterLink></a>
                <a><RouterLink class="navbar-item" to="/animatedbar">Animated Barchart</RouterLink></a>
            </div>
          </div>
        </div>  
      </div>
    </nav>

  </header>
    <div class="mt-5 container is-centered is-max-desktop">
      <RouterView />
    </div>
</template>

<style>
@import '@/assets/base.css';

@media screen and (min-width: 1025px) {
    .navbar-item.is-hoverable:hover .navbar-dropdown {
        display: block !important;
    }
    .navbar-item.is-hoverable:focus-within .navbar-dropdown {
        display: none;
    }
}
</style>

<!-- todo: make a separate listener for burger and the dropdown!
both cannot rely on the same variable for the custom functionality that you want my friend
each of these situations requires closing a different element. 
-->