<template>
  <div>
    <p @click="mmm()">mmm</p>
    <div id="container">
      <div id="scoreContainer" class="buttonPressed">
        <div id="face" class="buttonNormal"
          @mousedown="e => buttonPress(e)"
          @mouseup="e => {
                      buttonRelease(e);
                      getFace(0);
                    }"
          @mouseleave="e => buttonRelease(e)"
        >
          <img :src='require(`@/assets/${faceType}.png`)' class="faceImg">
        </div>
      </div>
      <div id="tableContainer">
        <table id="table">
          <tbody id="tableBody">
              <tr v-for="r in rowIndex" :key="r">
                  <td v-for="c in colIndex" :key="c" class="buttonNormal"
                    @mousedown="e => {
                      buttonPress(e);
                      getFace(1);
                    }"
                    @mouseup="e => {
                      buttonRelease(e);
                      getFace(0);
                    }"
                    @mouseleave="e => {
                      buttonRelease(e);
                    }"
                  >

                  </td>
              </tr>
          </tbody>
        </table>  
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'GameBoard',
  data() {
    return {
      row: 16,
      col: 16,
      board: this.$minerBack.Board.new(),
      facePath: "../assets/grin0.png",
      faceType: "grin0",
    }
  },
  computed: {
    rowIndex: function() {
      return Array.from(Array(this.row).keys())
    },
    colIndex: function() {
      console.log(this.col);
      return Array.from(Array(this.col).keys())
    },
  },
  methods: {
    mmm() {
      this.$minerBack.greet()
      let board = this.$minerBack.Board.new();
      console.log(board);
      try {
        console.log(this.colIndex);
      } catch {(err) => {
        console.log(err);
      }}
      // try(console.log(this.colIndex);
      console.log("this should work!");
    },
    buttonPress(event) {
      event.target.classList.add('buttonPressed');
    },
    buttonRelease(event) {
      event.target.classList.remove('buttonPressed');
    },
    getFace(type) {
      const state = this.board.get_state();
      const rand = Math.floor(Math.random() * 4)
      if (state == this.$minerBack.GameState.Dead) {
        this.faceType = "dead" + rand;
        return;
      }
      if (state == this.$minerBack.GameState.Won) {
        this.faceType = "win";
        return;
      }
      if (type == 1) {
        this.faceType = "oops" + rand;
        return;
      }
      this.faceType = "grin" + rand;
    }
  }
}
</script>

<style>
#container {
  box-sizing: border-box;
  text-align: center;
  width: 440px;
  height: 800px;
  margin: auto;
  justify-content: center;
  padding: 7px;
  border-top: solid 4px #eee;
  border-left: solid 4px #eee;
  border-right: solid 4px #666;
  border-bottom: solid 4px #666;
  border-radius: 3px;
  background-color: #aaa;
}
#tableContainer {
  width:400px;
  height: 400px;
  margin-left: auto;
  margin-right: auto;
  box-sizing: border-box;
  text-align: center;
  position: relative;
  top: 20px;
}
#table {
  display: table;
  table-layout: fixed;
  width: 100%;
  height: 100%;
  border-collapse: separate;
  border-spacing: 0px;
}
#tableBody {
  border-spacing: 0;
}
#scoreContainer {
  width: 400px;
  height: 50px;
  position: relative;
  top: 7px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
}
#face {
  position: relative;
  text-align: center;
  top: 5px;
  width: 35px;
  height: 35px;
  margin-left: auto;
  margin-right: auto;
}
.scoreElements {
  position: relative;
}
.buttonNormal {
  border-top: solid 2.5px #eee;
  border-left: solid 2.5px #eee;
  border-right: solid 2.5px #666;
  border-bottom: solid 2.5px #666;
  border-radius: 3px;
}
.buttonPressed {
  border-top: solid 2.5px #666;
  border-left: solid 2.5px #666;
  border-right: solid 2.5px #eee;
  border-bottom: solid 2.5px #eee;
}
.faceImg {
  max-width: 100%;
  max-height: 100%;
  display: block;
}
</style>
