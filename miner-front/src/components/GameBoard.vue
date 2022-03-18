<template>
  <div>
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
          <img :src='require(`@/assets/emoji/${faceType}.png`)' class="faceImg">
        </div>
      </div>
      <div id="tableContainer">
        <table id="table" class="buttonPressed" oncontextmenu="return false;">
          <tbody id="tableBody">
              <tr v-for="r in rowIndex" :key="r">
                  <td v-for="c in colIndex" :key="c" class="buttonNormal cellFixed"
                    @mousedown="e => {
                      buttonPress(e);
                      getFace(1);
                    }"
                    @mouseup.left="e => {
                      uncoverWrap(r, c);
                      buttonRelease(e);
                      getFace(0);
                    }"
                    @mouseout="e => {
                      buttonRelease(e);
                    }"
                    @mouseup.right="e => {
                      toggleFlag(r, c, e);
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
      board: this.$minerBack.Board.new(16, 16),
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
    },
    toggleFlag(row, col, e) {
      const cellState = this.board.toggle_flag(row, col);
      if (cellState == this.$minerBack.CellState.Flagged) {
        e.target.classList.add(`flagged`);
      } else if (cellState == this.$minerBack.CellState.Covered) {
        e.target.classList.remove(`flagged`);
      }
    },
    uncover(row, col) {
      console.log(row, col);
      const ret = this.board.uncover(row, col);
      const element = document.getElementById("tableBody").rows[row].cells[col];
      if (ret >= 0) {
        element.classList.add(`bomb${ret}`, 'uncovered');
      }
      else if (ret == -1) {
        element.classList.add('boom', 'uncovered', 'boomRed');
        this.boom();
      }
      return ret;
    },
    uncoverWrap(r, c) {
      const ret = this.uncover(r, c);
      if (ret == -2) return;
      if (ret == 0) {
        for (let i = Math.max(r-1, 0); i <= Math.min(r+1, this.row-1); i++) {
          for (let j = Math.max(c-1, 0); j <= Math.min(c+1, this.col-1); j++) {
            if (i == r && j == c) continue;
            console.log(i, j);
            this.uncoverWrap(i, j)
          }
        }
      }
    },
    boom() {
      for (let i = 0; i < this.row; i++) {
        for (let j = 0; j < this.row; j++) {
          const ret = this.board.uncover(i, j);
          if (ret == -1)
            document.getElementById("tableBody").rows[i].cells[j].classList.add('boom', 'uncovered');
        }
      }
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
.cellFixed {
  width: 25px;
  height: 25px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space:nowrap;
  background-position: center;  
  background-repeat: no-repeat;
  background-size: 80%;
}
.faceImg {
  max-width: 100%;
  max-height: 100%;
  display: block;
  margin: auto;
}
.numImg {
  max-width: 80%;
  max-height: 80%;
  display: block;
  margin: auto;
}
.bomb0 {
  background-image: url('../assets/num/0.png');
}
.bomb1 {
  background-image: url('../assets/num/1.png');
}
.bomb2 {
  background-image: url('../assets/num/2.png');
}
.bomb3 {
  background-image: url('../assets/num/3.png');
}
.bomb4 {
  background-image: url('../assets/num/4.png');
}
.bomb5 {
  background-image: url('../assets/num/5.png');
}
.bomb6 {
  background-image: url('../assets/num/6.png');
}
.bomb7 {
  background-image: url('../assets/num/7.png');
}
.bomb8 {
  background-image: url('../assets/num/8.png');
}
.boom {
  background-image: url('../assets/num/9.png');
}
.boomRed {
  background-color: red;
}
.flagged {
  background-image: url('../assets/num/10.png');
  background-size: auto 100%;
}
.noClick {
   pointer-events: none;
}
.uncovered {
  border: none;
}
</style>
