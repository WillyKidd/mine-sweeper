<template>
  <div>
    <div id="container">
      <div id="scoreContainer" class="buttonPressed">
        <div id="flag">
          <span id="flagIndicator" class="buttonPressed">{{ this.flagStr }}</span>
        </div>
        <div id="face" class="noSelect">
          <img :src='require(`@/assets/emoji/${faceType}.png`)' 
            class="faceImg, noSelect, buttonNormal"
            @mousedown="e => buttonPress(e)"
            @mouseup="e => {
                        buttonRelease(e);
                        getFace(0);
                        init(this.row, this.col, this.bombPercentage);
                      }"
            @mouseleave="e => buttonRelease(e)"
          >
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
                      if (e.target.classList.contains('flagged')) {
                        return;
                      }
                      uncoverWrap(r, c);
                      buttonReleaseCell(e);
                      getFace(0);
                      e.target.classList.add('noClick');
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
    <div id="optionTab">
        <div id="optionContent">#Rows:</div>
        <input v-model.lazy="rowInput" class="optionInput" placeholder=">=7" />
        <div id="optionContent">#Columns:</div>
        <input v-model.lazy="colInput" class="optionInput" placeholder=">=7" />
        <div id="optionContent">%Bombs:</div>
        <input v-model.lazy="bombPercentageInput" class="optionInput" placeholder="0-1" />
        <div class="optionButton buttonNormal"
          @mousedown="e => buttonPress(e)"
          @mouseup.left="e => {
            buttonRelease(e);
            updateInit();
          }"
        >
          customize
        </div>
        <div class="optionButton buttonNormal"
          @mousedown="e => buttonPress(e)"
          @mouseup.left="e => {
            buttonRelease(e);
            updateInit(1);
          }"
        >
          beginner
        </div>
        <div class="optionButton buttonNormal"
          @mousedown="e => buttonPress(e)"
          @mouseup.left="e => {
            buttonRelease(e);
            updateInit(2);
          }"
        >
          intermediate
        </div>
        <div class="optionButton buttonNormal"
          @mousedown="e => buttonPress(e)"
          @mouseup.left="e => {
            buttonRelease(e);
            updateInit(3);
          }"
        >
          master
        </div>
    </div>
    <div 
      id="optionShow" 
      @mouseup.left="e => {
        toggleOption();
      }">
        <div>options</div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import VueConfetti from 'vue-confetti'

Vue.use(VueConfetti)

export default {
  name: 'GameBoard',
  data() {
    return {
      row: 16,
      col: 16,
      rowIndex: Array.from(Array(16).keys()),
      colIndex: Array.from(Array(16).keys()),
      bombPercentage: 0.15,
      board: this.$minerBack.Board.new(16, 16, 0.15),
      faceType: "grin0",
      rowInput: null,
      colInput: null,
      bombPercentageInput: null,
      flagStr: "0038",
      optionShown: true,
    }
  },
  methods: {
    boom() {
      document.getElementById("tableBody").classList.add('noClick');
      for (let i = 0; i < this.row; i++) {
        for (let j = 0; j < this.col; j++) {
          const ret = this.board.uncover(i, j);
          if (ret == -1) {
            const element = document.getElementById("tableBody").rows[i].cells[j];
            if (element.classList.contains('flagged')) {
              element.classList.remove('flagged');
              element.classList.add('boom2', 'uncovered', 'noSelect', 'noClick');
            } else {
              element.classList.add('boom', 'uncovered', 'noSelect', 'noClick');
            }
          }
        }
      }
    },
    buttonPress(event) {
      event.target.classList.add('buttonPressed');
    },
    buttonReleaseCell(event) {
      event.target.classList.remove('buttonPressed');
      event.target.classList.add('noSelect', 'noClick');
    },
    buttonRelease(event) {
      event.target.classList.remove('buttonPressed');
    },
    clearStyle() {
      for (let i = 0; i < this.row; i++) {
        for (let j = 0; j < this.col; j++) {
          const element = document.getElementById("tableBody").rows[i].cells[j];
          element.classList.remove('boom', 'uncovered', 'boomRed', 
            'flagged', 'bomb0', 'bomb1', 'bomb2', 'bomb3','bomb4', 
            'bomb5', 'bomb6', 'bomb7', 'bomb8', 'noClick', 'boom2', 'noSelect');
          element.classList.add('bomb0');
        }
      }
      document.getElementById("tableBody").classList.remove('noClick');
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
        document.getElementById("tableBody").classList.add('noClick');
        this.$confetti.start();
        return;
      }
      if (type == 1) {
        this.faceType = "oops" + rand;
        return;
      }
      this.faceType = "grin" + rand;
    },
    init(row, col, bombPercentage) {
      this.$confetti.stop();
      this.rowIndex = Array.from(Array(parseInt(row)).keys()),
      this.colIndex = Array.from(Array(parseInt(col)).keys()),
      console.log(this.colIndex);
      this.board = this.$minerBack.Board.new(row, col, bombPercentage);
      console.log(this.board.get_flagcnt());
      this.clearStyle();
      this.updateFlagCnt();
      this.getFace(0);
    },
    toggleFlag(row, col, e) {
      const cellState = this.board.toggle_flag(row, col);
      if (cellState == this.$minerBack.CellState.Flagged) {
        console.log("ok");
        e.target.classList.add(`flagged`);
      } else if (cellState == this.$minerBack.CellState.Covered) {
        e.target.classList.remove(`flagged`);
      }
      this.updateFlagCnt();
    },
    toggleOption() {
      if (this.optionShown) {
        document.getElementById("optionTab").style.visibility = `hidden`;
        document.getElementById("optionShow").style.marginLeft = `0`;
        this.optionShown = false;
      } else {
        document.getElementById("optionTab").style.visibility = `visible`;
        document.getElementById("optionShow").style.marginLeft = `112.5px`;
        this.optionShown = true;
      }
    },
    uncover(row, col) {
      const ret = this.board.uncover(row, col);
      const element = document.getElementById("tableBody").rows[row].cells[col];
      if (ret >= 0) {
        element.classList.remove('flagged');
        element.classList.add(`bomb${ret}`, 'uncovered', 'noSelect', 'noClick');
      }
      else if (ret == -1) {
        element.classList.add('boom', 'uncovered', 'boomRed', 'noSelect', 'noClick');
        this.boom();
      }
      return ret;
    },
    uncoverWrap(r, c) {
      // console.log("uncoverWrap: ", r, " ", c);
      const ret = this.uncover(r, c);
      if (ret == -2) return;
      if (ret == -1) return;
      if (ret == 0) {
        for (let i = Math.max(r-1, 0); i <= Math.min(r+1, this.row-1); i++) {
          for (let j = Math.max(c-1, 0); j <= Math.min(c+1, this.col-1); j++) {
            if (i == r && j == c) continue;
            this.uncoverWrap(i, j)
          }
        }
      }
      if (this.board.get_state() == this.$minerBack.Board.Won) {
        this.faceType = "win";
        document.getElementById("tableBody").classList.add('noClick');
        this.$confetti.start();
      }
    },
    updateFlagCnt() {
      const flagCnt = this.board.get_flagcnt();
      this.flagStr = ("000" + flagCnt).slice(-4);
    },
    updateBeginner() {
      this.rowInput = "8";
      this.colInput = "8";
      this.bombPercentageInput = "0.15";
    },
    updateInit(type=0) {
      let r, c, bp;
      if (type == 0) {
        r = parseInt(this.rowInput, 10);
        c = parseInt(this.colInput, 10);
        bp = parseFloat(this.bombPercentageInput);
      } else if (type == 1) {
        r = 8;
        c = 8;
        bp = 0.15;
      } else if (type == 2) {
        r = 16;
        c = 16;
        bp = 0.15;
      } else if (type == 3) {
        r = 32;
        c = 32;
        bp = 0.15;
      }
      if (isNaN(r) || isNaN(c) || isNaN(bp) || r < 7 || c < 7) {
        alert("Please check your inputs, #row and #col must >= 7.");
        return;
      } else if (bp < 0 || bp > 1) {
        alert("%Bombs: enter a number in range [0, 1].");
        return;
      }
      this.clearStyle();
      this.row = r;
      this.col = c;
      this.bombPercentage = bp;
      let width = 25 * c;
      let height = 25 * r; 
      document.getElementById("tableContainer").style.width = `${width}px`;
      document.getElementById("tableContainer").style.height = `${height}px`;
      width += 40;
      height += 100;
      document.getElementById("container").style.width = `${width}px`;
      document.getElementById("container").style.height = `${height}px`;
      const scWidth = Math.min(width-40, 400);
      document.getElementById("scoreContainer").style.width = `${scWidth}px`;
      this.getFace(0);
      this.init(r, c, bp);
    }
  }
}
</script>

<style>
#container {
  vertical-align: top;
  box-sizing: border-box;
  text-align: center;
  width: 440px;
  height: 500px;
  margin-top: 30px;
  margin-left: auto;
  margin-right:auto;
  left: 0;
  right: 0;
  position: absolute;
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
  background-color: #aaa;
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
  background-color: #aaa;
}
#face {
  position: relative;
  text-align: center;
  top: 5px;
  width: 35px;
  height: 35px;
  margin-left: auto;
  margin-right: auto;
  cursor: pointer;
  text-decoration: none;
}
#flag {
  float: left;
  display: inline;
  margin-top: 8px;
  margin-left: 2px;
}
#flagIndicator {
  margin-left: 10px;
  display: inline;
  position: relative;
  user-select: none;
  text-align: center;
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;
  font-family: "Courier New", monospace;
  font-weight: 800;
  background: rgb(37, 37, 37);
  color: #ffdd1b;
  padding: 2px;
}
#optionShow {
  -webkit-margin-start: 112.5px;
  text-align: center;
  position: fixed;
  display: inline;
  margin-top: 30px;
  margin-left: 112.5px;
  padding-right: 8px;
  width:40px;
  height:70px;
  text-orientation: sideways;
  writing-mode: vertical-rl;
  background:#ccc;
  border-top: solid 2.5px #eee;
  border-right: solid 2.5px #666;
  border-bottom: solid 2.5px #666;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  cursor: pointer;
}
@media (hover: hover) and (pointer: fine) {
  #optionShow:hover {
    background-color: #bbb;
  }
}
#optionTab {
  visibility: visible;
  vertical-align: top;
  text-align: left;
  text-decoration: none;
  display: inline-flex;
  position: fixed;
  margin-top: 30px;
  width:115px;
  height:320px;
  writing-mode: vertical-rl;
  background:#ccc;
  border-top: solid 2.5px #eee;
  border-bottom: solid 2.5px #666;
  border-right: solid 2.5px #666;
  border-bottom-right-radius: 5px;
}
#optionContent {
  text-align: left;
  writing-mode: horizontal-tb;
  margin-left: 5px;
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
@media (hover: hover) and (pointer: fine) {
  .buttonNormal:hover {
    background-color: #999;
  }
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
  cursor: pointer;
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
.optionInput {
  width: 105px;
  margin-right: 5px;
  writing-mode: horizontal-tb;
}
.optionButton {
  margin-top: 5px;
  margin-right: 8px;
  text-align: center;
  writing-mode: horizontal-tb;
  width: 100px;
  height: 30px;
  cursor: pointer;
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
.boom2 {
  background-image: url('../assets/num/11.png');
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
.noSelect {
  -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
}
.uncovered {
  border: none;
  cursor: default;
}
</style>
