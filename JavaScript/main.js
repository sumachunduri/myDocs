var counterItem = 1;
var ourList = document.querySelector("#list");
var  OurButton = document.getElementById("btn");
var HeadLine = document.getElementById("headline")
var listItems = document.getElementById("list").getElementsByTagName("li");

//  function activateItem (e){
//    // alert("Click Detected");
//    if(e.target.nodeName == "LI"){
//     HeadLine.innerHTML = e.target.innerHTML;
//    }
//  }

const activateItem = (e) => {
    // alert("Click Detected");
  if(e.target.nodeName == "LI"){
   HeadLine.innerHTML = e.target.innerHTML;
  }
};
 
ourList.addEventListener("click", activateItem);

// for(i=0 ; i<listItems.length; i++){
//   listItems[i].addEventListener("click", activateItem);

// }



OurButton.addEventListener("click", addItem);
function addItem(){
   ourList.innerHTML += " <li>Something New" + counterItem + "</li> "
  counterItem++;

}


3