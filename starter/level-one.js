/*
 * DOTS: Level One
 *
 */
// console.log("hello")
const scoreboard = document.querySelector (".score")
const ball = document.querySelector (".ball")
const winner = document.querySelector(".level-winner")
let score = 0
ball.addEventListener ("click",()=>{
    score += 10
    scoreboard.textContent = score
    if (score>=100){
        winner.style.opacity = 1
    }
    console.log("ball was clicked")} )


