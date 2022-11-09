const body = document.querySelector("body"),
      modeToggle = body.querySelector(".mode-toggle")
      sidebar = body.querySelector("nav")
      sidebarToggle = body.querySelector(".sidebar-toggle")

let selectedTheme = localStorage.getItem("selected-theme")
if(selectedTheme && selectedTheme ==="dark"){
    body.classList.toggle("dark");
}

let getStatus = localStorage.getItem("status");
if(getStatus && getStatus === "close" ){
    sidebar.classList.toggle("close");
}

modeToggle.addEventListener("click", () =>{
    body.classList.toggle("dark-theme");
    if(body.classList.contains("dark-theme")){
        localStorage.setItem("selected-theme", "dark");
    }else{
        localStorage.setItem("selected-theme", "light");
    }
});

sidebarToggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
    if(sidebar.classList.contains("close")){
        localStorage.setItem("status", "close");
    }else{
        localStorage.setItem("status", "open");
    }
})