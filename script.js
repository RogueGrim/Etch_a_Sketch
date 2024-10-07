const container = document.querySelector("#container")
const userInput = document.querySelector("#button")

createGrid(256,16)
userInput.addEventListener("click",function(){
    container.innerHTML = ' '
     let num = prompt ("please enter the grid size(1-100):")
     size = num*num
    createGrid(size,num);   
})

function getRandomHexColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color
}

function createGrid(size,num) {

    let percentage = (100/num)+"%"

        for (let j = 0; j < size; j++) { 
            let col = document.createElement("div");
            col.className = "col";
            col.style.flex = `1 1 ${percentage}`

            col.addEventListener('mouseenter', function() {
               this.classList.add('hovered');
               this.style.background = getRandomHexColor()
            });
            container.appendChild(col);
            
        }
        
}








 
 