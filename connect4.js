// Set the value for each column and turn.
val_c1 = 1
val_c2 = 1
val_c3 = 1
val_c4 = 1
val_c5 = 1
val_c6 = 1
val_c7 = 1
turn = 1 

// Run for loops for the different ways to determine a winner.

function winning(player) {
        // For loop for right diagnal 4 in a row to win.
        for (i = 1; i <= 4; i++) {
            for (j = 1; j <= 3; j++) {
                if (document.getElementById(`c${i}r${j}`).style.backgroundColor == `${player}` && document.getElementById(`c${i + 1}r${j + 1}`).style.backgroundColor == `${player}` && document.getElementById(`c${i + 2}r${j + 2}`).style.backgroundColor == `${player}` && document.getElementById(`c${i + 3}r${j + 3}`).style.backgroundColor == `${player}`) {
                    alert(`${player} wins!`)
                    location.reload()
                }

            }
        }

        // For loop for left diagnal 4 in a row to win.
        for (i = 1; i <= 4; i++) {
            for (j = 6; j >= 4; j--) {
                if (document.getElementById(`c${i}r${j}`).style.backgroundColor == `${player}` && document.getElementById(`c${i + 1}r${j - 1}`).style.backgroundColor == `${player}` && document.getElementById(`c${i + 2}r${j - 2}`).style.backgroundColor == `${player}` && document.getElementById(`c${i + 3}r${j - 3}`).style.backgroundColor == `${player}`) {
                    alert(`${player} wins!`)
                    location.reload()
                }

            }
        }   

}
        // For loop for horizontal 4 in a row to win.
        for (i = 1; i <= 7; i++) {
            for (j = 1; j <= 3; j++) {
                if (document.getElementById(`c${i}r${j}`).style.backgroundColor == `${player}` && document.getElementById(`c${i}r${j + 1}`).style.backgroundColor == `${player}` && document.getElementById(`c${i}r${j + 2}`).style.backgroundColor == `${player}` && document.getElementById(`c${i}r${j + 3}`).style.backgroundColor == `${player}`) {
                    alert(`${player} wins!`)
                    location.reload()
                }

            }
        }
        // For loop for vertical 4 in a row to win. 
        for (i = 1; i <= 6; i++) {
            for (j = 1; j <= 4; j++) {
                if (document.getElementById(`c${j}r${i}`).style.backgroundColor == `${player}` && document.getElementById(`c${j + 1}r${i}`).style.backgroundColor == `${player}` && document.getElementById(`c${j + 2}r${i}`).style.backgroundColor == `${player}` && document.getElementById(`c${j + 3}r${i}`).style.backgroundColor == `${player}`) {
                    alert(`${player} wins!`)
                    location.reload()
                }

            }

        }
// Event listener inorder to play the game.        
document.querySelectorAll(".column").forEach((e) => {
    e.addEventListener("click", () => {

    // The eval() function evaluates JavaScript code represented as a string and returns its completion value.    
        sum = eval(`val_${e.id}`)
        eval(`val_${e.id}++`)

        if (sum <= 6 && turn % 2 != 0) {
            document.getElementById(`${e.id}r${sum}`).style.backgroundColor = "blue"
            turn++
            winning('blue')
            document.getElementById("firstPlayer").innerText = "Red Player's Turn"
        }

        else if (sum <= 6 && turn % 2 == 0) {
            document.getElementById(`${e.id}r${sum}`).style.backgroundColor = "red"
            turn++
            winning('red')
            document.getElementById("firstPlayer").innerText = "Blue Player's Turn"

        }
    })
})
