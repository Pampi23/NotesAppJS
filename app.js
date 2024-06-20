let addBtn = document.querySelector("#add-btn")


function showColor(){
    let show = false
    addBtn.addEventListener("click",()=>{
    
        show = !show
        if(show){
         document.querySelector("#color").style.display = "flex";
        }
        else{
         document.querySelector("#color").style.display = "none";
        }
     
     
     })
}
showColor();
function createNotes(){
    let colorArr = ["red","blue","green","purple"]
    let colorBtn = document.querySelectorAll("#color i");
colorBtn.forEach((btn)=>{
    btn.addEventListener("click", (e) => {
        let note = document.createElement("div");
        note.innerHTML = `<i  class="ri-delete-bin-6-fill delete"></i><textarea name="" id="input-text"></textarea>`;
        
        document.getElementById("note-container").appendChild(note);
        note.classList.add("notes");
        if(e.target.id==colorArr[0]){
            note.style.backgroundColor = "#fad2e1"
        }
        else if(e.target.id==colorArr[1]){
             note.style.backgroundColor = "#77abdd"
        }
        else if(e.target.id==colorArr[2]){
            note.style.backgroundColor ="#d3f8e2"
       }
       else{
        note.style.backgroundColor ="#a3c4f3"
       }
       note.querySelector("i").addEventListener("click", () => {
        note.remove();
    });
      
      });
     

      
})
}
createNotes();

function addNotes(){
    
}


 