const container = document.querySelector("#container")
const userInput = document.querySelector("#button")


userInput.addEventListener("click",function(){
    container.innerHTML = ''
     let size = prompt ("please enter the grid size(1-100):")
     size = size*size
    createGrid(size);

})

function createGrid(size) {
        for (let j = 0; j < size; j++) { 
            let col = document.createElement("div");
            col.className = "col";
            container.appendChild(col); 

            col.addEventListener('mouseenter', function() {
                col.classList.add('hovered');
            });
        }
        
}







 
 