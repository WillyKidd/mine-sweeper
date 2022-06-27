<style>
  @import './assets/css/styles.css';
</style>

<template>
  <div>
    <head>
      <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>Weili's Home Page</title>
    </head>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Weili's Personal Website</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active"> <a class="nav-link" href="https://willykidd.github.io/index.html">Home <span class="sr-only">(current)</span></a> </li>
          <li class="nav-item"> <a class="nav-link" href="https://willykidd.github.io/flight.html">My Past Flights</a> </li>
          <li class="nav-item"> <a class="nav-link" href="https://willykidd.github.io/mine-sweeper/">Game: Mine Sweeping</a> </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Dropdown </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">Action</a> <a class="dropdown-item" href="#">Another action</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Something else here</a> 
            </div>
          </li>
        </ul>
      </div>
    </nav>
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
#back {
  background-color: rgba(255, 160, 122, 0.2);
}
</style>
