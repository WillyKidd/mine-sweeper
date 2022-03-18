mod utils;

use wasm_bindgen::prelude::*;
use std::cmp;

// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
// allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
extern {
    fn alert(s: &str);
}

#[wasm_bindgen]
pub fn greet() {
    alert("OK");
}

#[derive(Copy, Clone, PartialEq)]
#[wasm_bindgen]
pub enum CellState {
    Covered,
    Uncovered,
    Flagged,
}

#[derive(Copy, Clone)]
struct Cell {
    state: CellState,
    is_bomb: bool,
    bomb_num: i32,
}

impl Cell {
    fn new() -> Cell {
        Cell { 
            state: CellState::Covered,
            is_bomb: false,
            bomb_num: 0 
        }
    }
}

#[derive(Copy, Clone)]
#[wasm_bindgen]
pub enum GameState {
    Start,
    Gaming,
    Won,
    Dead,
}

#[wasm_bindgen]
pub struct Board {
    row: i32,
    col: i32,
    flagcnt: i32,
    foundcnt: i32,
    time: i32,
    state: GameState,
    cells: Vec<Vec<Cell>>,
}

// private methods
impl Board {
    fn fill_bomb_num(&mut self) {
        for x in 0..self.col {
            for y in 0..self.row {
                for m in cmp::max(0, x-1)..cmp::min(self.row, x+2) {
                    for n in cmp::max(0, y-1)..cmp::min(self.col, y+2) {
                        if m == x && n == y {
                            continue;
                        }
                        if self.cells[m as usize][n as usize].is_bomb == true {
                            self.cells[x as usize][y as usize].bomb_num += 1;
                        }
                    }
                }
            }
        }
    }
    
}

// public methods
#[wasm_bindgen]
impl Board {
    pub fn new(row: i32, col: i32) -> Board {
        let mut board: Board = Board {
            row: row,
            col: col,
            flagcnt: 32,
            foundcnt: 0,
            time: 0,
            state: GameState::Start,
            cells: vec![vec![Cell::new(); row as usize]; col as usize],
        };
        board.board_init();
        board
    }

    pub fn get_row(&self) -> i32 {
        self.row
    }

    pub fn get_col(&self) -> i32 {
        self.col
    }

    pub fn get_flagcnt(&self) -> i32 {
        self.flagcnt
    }

    pub fn get_state(&self) -> GameState {
        self.state
    }

    pub fn get_time(&self) -> i32 {
        self.time
    }

    pub fn board_init(&mut self) {
        let mut bomb_num: i32 = 0;
        while bomb_num != self.flagcnt {
            let rand_x: i32 = ((self.col as f64) * js_sys::Math::random()) as i32;
            let rand_y: i32 = ((self.row as f64) * js_sys::Math::random()) as i32;
            if self.cells[rand_x as usize][rand_y as usize].is_bomb == true {
                continue;
            }
            self.cells[rand_x as usize][rand_y as usize].is_bomb = true;
            bomb_num += 1;
        }
        self.fill_bomb_num();
    }

    pub fn toggle_flag(&mut self, x: i32, y: i32) -> CellState {
        self.cells[x as usize][y as usize].state = match self.cells[x as usize][y as usize].state {
            CellState::Covered => {
                self.flagcnt -= 1;
                CellState::Flagged
            },
            CellState::Flagged => {
                self.flagcnt += 1;
                CellState::Covered
            },
            CellState::Uncovered => CellState::Uncovered,
        };
        self.cells[x as usize][y as usize].state
    }

    // TODO
    pub fn uncover(&mut self, x: i32, y: i32) -> i32 {
        if self.cells[x as usize][y as usize].state == CellState::Uncovered {
            return -2
        }
        self.cells[x as usize][y as usize].state = CellState::Uncovered;
        if self.cells[x as usize][y as usize].is_bomb == true {
            self.state = GameState::Dead;
            return -1
        }
        self.foundcnt += 1;
        self.cells[x as usize][y as usize].bomb_num
    }
}
