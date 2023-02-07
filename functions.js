function load_style() {
    page_style = localStorage.getItem("page_stylesheet_name");
    if(page_style === null){
        page_style = "styles1.css";
    }
    document.getElementById('page_style').setAttribute("href",page_style);
}


const button = document.getElementById("changeCSS");
const link = document.getElementById("currentCSS");
button.addEventListener("click", alert("button was clicked"));
button.addEventListener("click", function() {
    if(link.getAttribute("href") === "styles1.css") {
        link.setAttribute("href","styles2.css");
        localStorage.setItem("css", "styles2.css");
    } else {
        link.setAttribute("href","styles1.css");
        localStorage.setItem("css", "styles2.css");
    }
}

);
const storedCSS = localStorage.getItem("css");
if(storedCSS) {
    link.setAttribute("href",storedCSS);
}



