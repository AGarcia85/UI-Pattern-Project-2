// create an array to use with modal like in GOT execise
const sharkType = [
    {
        img: "SharkImages/whaleshark2.jgp",
        bio: "The Whale Shark also known as a 'gentle giant’, is the largest known fish species in the world and have a life span of about 70 years. The average size of a Whale Shark is 32ft long and weighs in at an astonishing 9 tons(20,000 lbs). It is slow-moving, filter feeding shark. The Whale Shark has a mouth that opens up to 1.5m wide and has over 300 rows of tiny teeth and 20 filter pads to help it catch its prey. Whale Sharks are usually found in tropical and warm open seas. Whale Sharks can give birth up to 300 pups but not all at once. Evidence suggests that female Whale Sharks retain sperm from mating and give birth to young over a prolonged period of time. Whale Sharks are docile and not a threat or danger to humans. Many reports indicate that Whale Sharks will play with divers and allows swimmers to catch a ride on their dorsal fins. Due to increasing overfishing and illegal poaching of its fins and liver, the Whale Shark is an endangered species."    
    },
    {
        bio: "The Great White Shark"
    },
    {
        bio: "The Great Hammerhead Shark"
    },
    {
        bio: "The Tiger Shark"
    },
    {
        bio: "The Thresher Shark"
    },
    {
        bio: "The Bull Shark"
    },
    {
        bio: "The Short Finned Mako Shark"
    },
    {
        bio: "The Blue Shark"
    },
    {
        bio: "The Oceanic White Tip Shark"
    },
    {
        bio: "The Basking Shark"
    },
    {
        bio: "The Greenland Shark"
    },
    {
        bio: "The Goblin Shark"
    }
]


// get buttons for all sharks into a node list
let sharkList = document.querySelector(".shark-list");
console.log(sharkList);
let sharks = document.querySelectorAll(".sharks");
console.log(sharks);
// get the shark modal element
let sharkModal = document.querySelector(".sharkModal");
// get the shark content element
let sharkContent = document.querySelector(".sharkContent");
// create new image element
let sharkImg = document.createElement("img")
// create new paraTag element
let sharkPara = document.createElement("p");
// get the close button
let closeModal = document.querySelector(".closeModal");

// add eventlistener on sharks to open sharkModal 
for(let i = 0; i < sharks.length; i++) {
    sharks[i].addEventListener("click", function() {    
        //console.log("baby shark");
        sharkModal.style.display = "block";
        sharkImg.setAttribute('src', sharkType[i].img)
        sharkContent.appendChild(sharkImg)
        sharkPara.innerHTML= sharkType[i].bio
        sharkContent.appendChild(sharkPara)
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