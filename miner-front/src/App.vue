<template>
  <div>
    <b-navbar type="dark" variant="dark">
      <div class="container">
        <b-navbar-nav>
          <b-nav-item @click="mmm()" href="#">
            Avoid the bombs!
          </b-nav-item>
        </b-navbar-nav>
      </div>
    </b-navbar>    
  </div>
</template>

<script>
import { name, version } from '../package.json';

export default {
  name: 'App',
  data() {
    return {
      name,
      version,
    }
  },
  methods: {
    mmm() {
      this.$minerBack.greet()
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 40px;
}
</style>
