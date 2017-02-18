function openMenu()  {
  document.getElementById("slide_menu").style.width = "25%";
  document.getElementById("container").style.width = "70%";
  document.getElementById("container").style.marginLeft = "30%";
  document.getElementById("menuButton").style.visibility = "hidden";
}

function closeMenu() {
  document.getElementById("container").style.width = "100%";
  document.getElementById("container").style.marginLeft = "0%";
  document.getElementById("slide_menu").style.width = "0%";
  document.getElementById("menuButton").style.visibility = "visible";
}