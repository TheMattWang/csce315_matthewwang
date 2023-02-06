const button = document.getElementById("changeCSS");
button.addEventListener("click", function() {
  const currentLink = document.querySelector("link[rel='stylesheet']");
  if (currentLink.getAttribute("href") === "style1.css") {
    currentLink.setAttribute("href", "style2.css");
  } else {
    currentLink.setAttribute("href", "style1.css");
  }
});