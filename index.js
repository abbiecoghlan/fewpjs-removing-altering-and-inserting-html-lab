// Write your code here!

// remove DOM node with id #main 
document.querySelector("#main").remove();

//make a 'newheader' variable that points to node 'h1#victory';
let newHeader = document.createElement("h1");
newHeader.id = "victory";
newHeader.innerHTML = "ABBIE is the champion"
