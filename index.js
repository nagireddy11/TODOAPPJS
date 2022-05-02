function addList() {
  // document.getElementById("pop").style.display="none";
  document.getElementById("pop").style.display = "inline-block";
  document.getElementById("mainContainer").style.filter = "blur(5px)";
}
// function inner(){
//     // document.getElementById("pop").style.display="none";
//     document.getElementById("pop2").style.display = "inline-block";
//     document.getElementById("mainContainer").style.filter="blur(5px)"
//     // addtaskonScreen();
// }

const tasklist = [];

function changeHere() {
  // document.getElementById("pop").style.display="none"

  document.getElementById("content").style.display = "none";
  const name = document.getElementById("name").value;
  document.getElementById("mainContainer").style.filter = "blur(0px)";

  document.getElementById("pop").style.display = "none";

  const tempObject = {
    taskname: name,
  };
  tasklist.push(tempObject);
  console.log(tasklist);

  addtaskonScreen();
}
// function inner(){
//     document.getElementById("pop2").style.display="none";
//     const smallBox = document.getElementById("innername").value;
//     // const conObject = {
//     //     wishList : innername
//     // }
//     // tasklist.push(conObject)
//     // console.log(tasklist);
//     // addtaskonScreen()

// }
function close() {
  document.getElementById("pop2").style.display = "none";
}

function addtaskonScreen() {
  // const element=document.createElement("h1")
  const element = document.createElement("div");
  element.setAttribute("class", "child");
  element.innerText = tasklist[tasklist.length - 1].taskname;
  // element.innerText=tasklist[tasklist.length-1].wishList
  // element.innerText = smallBox
  element.style.color = "whilte";

  const ExistingElement = document.getElementById("parent");
  ExistingElement.appendChild(element);

  const hori = document.createElement("hr");
  hori.setAttribute("class", "hari");
  element.appendChild(hori);

  const plus = document.createElement("i");
  plus.setAttribute("class", "fa-solid fa-2x fa-circle-plus");
  element.appendChild(plus);
  plus.onclick = secPop;

  // const del = document.createElement("i")
  // del.setAttribute("id","delete")
  // // del.setAttribute("class","fa-solid fa-2x fa-trash-can")
  // del.innerHTML='<i class="fa-solid fa-trash-can"></i>'
  // element.appendChild(del);
  // del.onclick = deleteCard
  const j = document.createElement("i");
  j.setAttribute("id", "delete");
  j.innerHTML = '<i class="fa-solid fa-2x fa-trash-can"></i>';
  element.appendChild(j);
  j.onclick = deletecard;
}

function secPop() {
  document.getElementById("pop2").style.display = "inline-block";
  // document.getElementById("mainContainer").style.filter="blur(5px)"
}

function deletecard() {
  const trash = document.getElementById("child");
  trash.parentNode.removeChild(trash);
}

//  function inner(){
//     if(document.querySelector('#pop2 input').value.length==0){
//         alert("Please Enter a Task")
//     }
//     else{
//             document.querySelector('#parent').innerHTML +=`
//          <div class = "task">
//             <span id = "taskname">
//             ${document.querySelector('#pop2  input').value}
//             </span>
//             //     <button class = "delete">
//             // <i class="fa-solid fa-trash-can"></i>
//             // </button>
//         </div>
//             `
//     }
// }

const tasklist2 = [];
const inner = () => {
  document.getElementById("pop2").style.display = "none";

  const name2 = document.getElementById("innername").value;

  const tempObject2 = {
    taskname2: name2,
  };
  tasklist2.push(tempObject2);
  Cardsonscreen2();
};
function Cardsonscreen2() {
  const element3 = document.createElement("div");
  element3.setAttribute("class", "dummy");

  element3.innerText = tasklist2[tasklist2.length - 1].taskname2;

  const ExistingChild = document.getElementById("child");
  ExistingChild.appendChild(element3);

  const butt = document.createElement("button");
  butt.setAttribute("id", "but");
  butt.innerText = "Mark Done";
  element3.appendChild(butt);
}
