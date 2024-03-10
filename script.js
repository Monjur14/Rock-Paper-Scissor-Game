let computerMove = '';
        let result = '';        
        const score ={
            Win: 0,
            Lose: 0,
            Tie: 0
        }
        let myMove = '';
        function myMoveIs(move){
            if(move === "Rock"){
                myMove = "Rock"
                document.querySelector('.show_my_move').innerText = "✊"
            }else if(move === "Paper"){
                myMove = "Paper"
                document.querySelector('.show_my_move').innerText = "🖐️"
            }else if(move === "Scissor"){
                myMove = "Scissor"
                document.querySelector('.show_my_move').innerText = "✌️"
            }
            
        }
        function computerMovex(){
            const randomDecimal = Math.random()
            const randomMove = Math.floor(randomDecimal * 3) + 1;
            if( randomMove === 1){
                computerMove = 'Rock'
                document.querySelector('.show_comp_move').innerText = "✊"
            } else if(randomMove === 2){
                computerMove = 'Paper'
                document.querySelector('.show_comp_move').innerText = "🖐️"
            } else{
                computerMove = 'Scissor'
                document.querySelector('.show_comp_move').innerText = "✌️"
            }          
        }
        function checkGame(myTurn){
            if(myTurn === 'Rock' && computerMove === 'Rock'){
                result = 'Tie'
            }
            else if(myTurn === 'Rock' && computerMove === 'Paper'){
                result = 'Lose'
            }
            else if(myTurn === 'Rock' && computerMove === 'Scissor'){
                result = 'Win'
            }
            else if(myTurn === 'Paper' && computerMove === 'Rock'){
                result = 'Win'
            }
            else if(myTurn === 'Paper' && computerMove === 'Paper'){
                result = 'Tie'
            }
            else if(myTurn === 'Paper' && computerMove === 'Scissor'){
                result = 'Lose'
            }
            else if(myTurn === 'Scissor' && computerMove === 'Rock'){
                result = 'Lose'
            }
            else if(myTurn === 'Scissor' && computerMove === 'Paper'){
                result = 'Win'
            }
            else if(myTurn === 'Scissor' && computerMove === 'Scissor'){
                result = 'Tie'
            }
        }
        function updateScore(){
            if(result === 'Win'){
                score.Win += 1
            }
            else if(result === 'Lose'){
                score.Lose += 1
            }
            else if(result === 'Tie'){
                score.Tie += 1
            }
            localStorage.setItem("score", JSON.stringify(score))
            updateScoreElement();
           document.querySelector('.display_result').innerText = result
           let popupContainer = document.querySelector(".popup_container")
        if(score.Win === 5){
            popupContainer.classList.remove("none")
            popupContainer.classList.add("block")
            popupContainer.innerHTML = ''
            popupContainer.insertAdjacentHTML("beforeend", `
            <div class="popup">
            <img src="images/win.png" alt="">
            <h1>Congratulations🎉</h1>
            <button id="play_again" onclick="
            score.Win = 0;
            score.Lose = 0;
            score.Tie = 0;
            updateScoreElement();
            showResult()
            ">Play Again</button>
            </div>
            `)
        }else if(score.Lose === 5){
            popupContainer.classList.remove("none")
            popupContainer.classList.add("block")
            popupContainer.innerHTML = ''
            popupContainer.insertAdjacentHTML("beforeend", `
            <div class="popup">
            <img src="images/lose.png" alt="">
            <h1>Better Luck Next Time</h1>
            <button id="play_again" onclick="
            score.Win = 0;
            score.Lose = 0;
            score.Tie = 0;
            updateScoreElement();
            showResult()
            ">Play Again</button>
            </div>
            `)
        } else if(score.Tie === 5){
            popupContainer.classList.remove("none")
            popupContainer.classList.add("block")
            popupContainer.innerHTML = ''
            popupContainer.insertAdjacentHTML("beforeend", `
            <div class="popup">
            <img src="images/tie.png" alt="">
            <h1>It's Tie🤧</h1>
            <button id="play_again" onclick="
            score.Win = 0;
            score.Lose = 0;
            score.Tie = 0;
            updateScoreElement();
            showResult()
            ">Play Again</button>
            </div>
            `)
        }
        document.getElementById("play_again").addEventListener("click", function(){
            score.Win = 0;
            score.Lose = 0;
            score.Tie = 0;
            popupContainer.classList.remove("block")
            popupContainer.classList.add("none")
        })
        }
        function updateScoreElement(){
            document.querySelector('.win_score').innerText = `Win: ${score.Win}`
            document.querySelector('.lose_score').innerText = `Lose: ${score.Lose}`
            document.querySelector('.tie_score').innerText = `Tie: ${score.Tie}`
        }
        function showResult(){
            if(score.Win === 0 && score.Lose === 0 && score.Tie === 0){
                document.querySelector('.display_result').innerText = "Play Now"
                document.querySelector('.show_my_move').innerText = "❌"
                document.querySelector('.show_comp_move').innerText = "❌"
            }
        }
        
        
        
