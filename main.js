let isclicked = false;

function addBorder() {
  if (!isclicked) {
    document.getElementById('circ').classList.add("border");
    isclicked = true;
  }
  

  else {
    document.getElementById('circ').classList.remove("border");
    isclicked = false;
  }
}


  document.getElementById("circ").addEventListener("click", addBorder);
