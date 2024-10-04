const container = document.querySelector("#container")

function createGrid(){
    let i=0;
    let j=0;

    for(i=0;i<16;i++){
        let row= document.createElement("div")
        row.className = "row"
        container.appendChild(row)
        row.textContent= "i"

        for(j=0;j<16;j++){
            let col = document.createElement("div")
            col.className = "col"
            row.appendChild(col)
            col.textContent= "j"
    
        }
    }
        
    }

    
 createGrid()