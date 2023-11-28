let openBtn = document.querySelector(".openBtn")
let sideBar = document.querySelector(".sidebar")

function sideBarOpen () {
    sideBar.classList.add ("active")
    
}

openBtn.addEventListener("click", sideBarOpen)

let closeBtn = document.querySelector(".closeBtn")

function sideBarClose (event) {
    if (event.target.classList.contains("sidebar") || (event.target.classList.contains("closeBtn"))) {
        sideBar.classList.remove ("active")
    }
}

closeBtn.addEventListener("click", sideBarClose)
sideBar.addEventListener("click", sideBarClose)


// *dark mode

let darkModeBtn = document.querySelector(".darkModeBtn")
let body = document.querySelector("body")
let h1 = document.querySelector("h1")

function darkMode (event) {
    body.classList.toggle("darkMode")
    if (body.classList.contains("darkMode")) {
        h1.innerHTML = "Dark Mode"
    }else{
        h1.innerHTML = "Light Mode"
    }
}

darkModeBtn.addEventListener("click", darkMode)