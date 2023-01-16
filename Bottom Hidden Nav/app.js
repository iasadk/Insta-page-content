const menuDiv = document.querySelector(".menu");

// Event Listener to toggle the nav menu close/open state.
const closeBtn = document.querySelector(".ri-close-fill"); 
menuDiv.addEventListener("click",(e)=>{
    closeBtn.classList.toggle("active")
})

