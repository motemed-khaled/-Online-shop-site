// start first nav

document.getElementById("drop-one").addEventListener("click", () => {
    document.querySelector(".nav-right .account .accounts").classList.toggle("show")
})
document.getElementById("drop-two").addEventListener("click", () => {
    document.querySelector(".nav-right .account .usd").classList.toggle("show")
})
document.getElementById("drop-three").addEventListener("click", () => {
    document.querySelector(".nav-right .account .en").classList.toggle("show")
})

// start navbar
// add class active in navbar link
let allLi = document.querySelectorAll(".nav-bar .left .links li:not(.page)");
allLi.forEach((li) => {
    li.addEventListener("click", (e) => {
        e.target.parentElement.querySelectorAll(".active").forEach(ele => {
            ele.classList.remove("active");
        })
        e.target.classList.add("active");
    })
});
// start dropdown menu
document.querySelector(".nav-bar .left .categories .cat").addEventListener("click", () => {
    document.querySelector(".nav-bar .left .categories .cat-dropDown").classList.toggle("show");
});

// pages dropdown
document.querySelector(".nav-bar .links .dropDown").addEventListener("click", () => {
    document.querySelector(".nav-bar .left .links ul .pages-drop").classList.toggle("show");
    console.log("true")
});

// dresses menu 
 document.querySelector(".nav-bar .left .categories .cat-dropDown .dress-drop").addEventListener("click", () => {
document.querySelector(".nav-bar .left .categories .cat-dropDown .dressDown").classList.toggle("show");
 });

//mobile dropdown
document.querySelector(".nav-bar .mobile-bars").addEventListener("click", () => {
    document.querySelector(".nav-bar .left .links").classList.toggle("show");
}) 
// start navbar 