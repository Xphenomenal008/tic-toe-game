let boxes=document.querySelectorAll(".box")
let winChances=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]]
let turno=true;
let msg=document.getElementById("msg")
let reset=document.querySelector(".restart-game")

 function reseto(){
    turno=true
     msg.innerHTML=""
    enable()
 }
 function enable(){
    boxes.forEach((box)=>{
          box.disabled=false;
box.innerHTML=""
    })
 }
function disabled(){
    boxes.forEach((box)=>{
        
        box.disabled=true

    })
}
 function showWinner(fist){
    disabled()

    msg.innerHTML=`winnner is ${fist}`
    msg.style.display="block"

}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
       
        if(turno){
            box.innerHTML="o"
            turno=false;
        }else{
            box.innerHTML="x"
turno=true;

        }
        box.disabled=true
        winfun()
    })
 
})
 function winfun(){
    winChances.forEach((Chances,box)=>{
        let fist=boxes[Chances[0]].innerHTML
        let second=boxes[Chances[1]].innerHTML
        let third=boxes[Chances[2]].innerHTML
       if(fist!=="" && second!=="" && third!==""){
        if(fist===second && second===third){
             
               showWinner(fist)
               
        }
    }
    })
}
