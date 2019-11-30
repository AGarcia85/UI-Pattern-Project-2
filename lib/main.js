// get buttons for all sharks into a node list
let sharkList = document.querySelector(".shark-list");
console.log(sharkList);
let sharks = document.querySelectorAll(".sharks");
console.log(sharks);
// get the shark modal element
let sharkModal = document.querySelector(".sharkModal");
// get the shark content element
let sharkContent = document.querySelector(".sharkContent");
// get the close button
let closeModal = document.querySelector(".closeModal");

// add eventlistener on sharks to open sharkModal 
for(let i = 0; i < sharks.length; i++) {
    sharks[i].addEventListener("click", function() {    
        //console.log("baby shark");
        sharkModal.style.display = "block";
    })
}

// add eventlistener to close sharkModal with close button
closeModal.addEventListener("click", function() {    
    sharkModal.style.display = "none";
})
// add eventlistener to close modal when clicked outside of window
window.addEventListener("click", function(e) {
    if(e.target == sharkModal){
        sharkModal.style.display = "none";
    }
})