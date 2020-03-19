document.getElementById("menu").addEventListener("click", () => {
  document.getElementById("dropdownMenu").style.display = "block";
  //document.getElementById("dropdownMenu").classList.toggle("show");
});

document.getElementById("closebtn").addEventListener("click", () => {
  document.getElementById("dropdownMenu").style.display = "none";
});
