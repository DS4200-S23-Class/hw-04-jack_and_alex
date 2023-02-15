// This function adds a border when a circle is clicked
// As well as gets the attributes of the svgs
function addBorder() {

   this.classList.toggle("border-item");

   let x = this.getAttribute('cx');
   let y = this.getAttribute('cy');

   // Scaled the x and y coords
   let scaled_x = x/30;
   let scaled_y = 10 - y/30;

   // Replaces the null paragraph in the right div with text of the last point clicked
   let newtext = 'Last point clicked' + ' ' + '('+ scaled_x + ',' + ' ' + scaled_y + ')';
   document.getElementById('coord_text').innerHTML=newtext;

 }

// gets a list of circles using classname
 // Loops over the list and adds an event listener for each circle clicked
let circs = document.getElementsByClassName('circ');
for (let i = 0; i < circs.length; i++) {
   circs[i].addEventListener("click", addBorder)};
