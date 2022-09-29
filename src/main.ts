import './style.css'

function setupGame(elementsButtons: HTMLElement[]) {
 
  let count = 0;
  let playerX: number[] = []
  let playerO: number[] = []
  const winnerCombinations = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [3,5,7],
    [1,5,9]
  ]
  

  elementsButtons.forEach(element => {
    element.innerHTML = `-`
    element.addEventListener('click', () => {
      
      
      if(count % 2 === 0 && count < 9){
        playerX.push(parseInt(element.id.charAt(1)))
        

        const xwin = winnerCombinations.some(combination => {
          return combination.every((curr, index) => {
            
            return  playerX.includes(curr)

          })
        })

    
        element.innerHTML = "X"
        count++
        xwin && winner("X", element)

      } else if (count % 2 != 0 && count < 9){
        playerO.push(parseInt(element.id.charAt(1)))
        

        const owin = winnerCombinations.some(combination => {
          return combination.every((curr, index) => {
            
            return  playerO.includes(curr)

          })
        })

      
        element.innerHTML = "O"
        count++
        owin && winner("O", element) 
        
      }else {
        console.log('9 rodadas' ) 
      }
    }, {once: true})
    
  });
}
function winner (winner: string, element: HTMLElement){

   let title = document.querySelector('#win')
   title.innerHTML = `Jogador ${winner} venceu`
 
   
     //element.setAttribute('disabled', true)
   


}


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h3 id="win"></h3>
    <div class="box">
     <button class="game" id="b1" type="button" ></button>
     <button class="game" id="b2" type="button" ></button>
     <button class="game" id="b3" type="button" ></button>

     <button class="game" id="b4" type="button" ></button>
     <button class="game" id="b5" type="button" ></button>
     <button class="game" id="b6" type="button" ></button>

     <button class="game" id="b7" type="button" ></button>
     <button class="game" id="b8" type="button" ></button>
     <button class="game" id="b9" type="button" ></button>

    </div>
  </div>
`
setupGame(document.querySelectorAll<HTMLButtonElement>('.game'))
