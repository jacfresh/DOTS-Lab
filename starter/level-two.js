/*
 * DOTS: Level Two
 *
 */
const scoreboard = document.querySelector (".score")
const arena = document.querySelector (".level-arena")
const winner = document.querySelector(".level-winner")
let score = 0
arena.addEventListener ("click",(event)=>{
    const el = event.target
    if (el.classList.contains("ball")){

        score += 10
        scoreboard.textContent = score
        if (score>=100){
            winner.style.opacity = 1
        }
        console.log("ball was clicked")
    }
} )