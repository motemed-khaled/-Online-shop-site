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
let allLi = document.querySelectorAll(".nav-bar .left .links li a:not(.page) ");
allLi.forEach((li) => {
    li.addEventListener("click", (e) => {
        e.target.parentElement.parentElement.querySelectorAll(".active").forEach(ele => {
        ele.classList.remove("active");
        });
        e.target.classList.add("active");
    });
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

// =========================================================================

// start shop page
document.querySelectorAll(".product-nav .right .drop-down .btn-drop").forEach((btn) => {
    btn.addEventListener("click", e => {
        e.target.classList.toggle("clicked");
        e.target.nextElementSibling.classList.toggle("show");
    });
});

// start scroll to top action
document.addEventListener("scroll", () => {
    let scrollTop = document.documentElement.scrollTop;
    let scrollTopButton = document.querySelector(".scroll-top");
    if (localStorage.getItem("scroll")) {
       
            if (scrollTop >=400) {
                scrollTopButton.style.display = "flex";
            } else {
                scrollTopButton.style.display = "none";
            }
       
    } 
    scrollTopButton.addEventListener("click", () => {
            document.documentElement.scrollTop = 0;
    })
})
// end scroll to top action
   
