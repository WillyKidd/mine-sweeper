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
    <div>
      <GameBoard></GameBoard>
    </div>    
  </div>
</template>

<script>
import GameBoard from '@/components/GameBoard.vue'
import { name, version } from '../package.json';

export default {
  name: 'App',
  components: {
    GameBoard,
  },
  data() {
    return {
      name,
      version,
    }
  },
  methods: {
    mmm() {
      this.$minerBack.greet()
      let board = this.$minerBack.Board.new();
      console.log(board);
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
