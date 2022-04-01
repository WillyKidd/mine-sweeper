# mine-sweeper 💣
My implementation of the classic mine-sweeper game!

The game runs in the browser, with the front-end written with VueJs  and the backend in Rust with Wasm-Pack.

The game is deployed [HERE](https://willykidd.github.io/mine-sweeper/), have a try!

## Build and run locally

1. Clone this repo...

2. Compile the backend...

   ```shell
   cd ./miner-back
   wasm-pack build
   ```

3. Build the frontend and run it...

   ```shell
   cd ./miner-front
   npm install --save
   npm run serve
   ```

4. Go and checkout the game in your browser!

   The app should be running [here](http://localhost:8080/mine-sweeper/ ) if the port 8080 is available.

## Features

- Classical mine-sweeper icons and functions
- Button animation
- Random emojis 😆
- Customizable
  - Board dimensions
  - Percentage of mines

## Known issues

I wrote this game in a weekend when I had nothing better to do, as I was locked up in the dorm due to Covid...

I didn't plan well and started coding right away, and I used mostly brute-force algorithms (lots of recursions, which makes the game crash when the board gets bigger).

Also, there are lots of performance issues when deployed online. It's probably a bad idea to make each button a table cell... Canvas might have been a good replacement... Also, the emojis are too large, which induces lags when loaded.
