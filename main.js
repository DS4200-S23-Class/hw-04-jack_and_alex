
// This function adds a border when a circle is clicked on the already created points
// As well as gets the attributes of the svgs
function addBorderToCurrent() {

   this.classList.toggle("border-item");

   let x = this.getAttribute('cx');
   let y = this.getAttribute('cy');

   // Scaled the x and y coords
   let scaled_x = x/30;
   let scaled_y = 10 - y/30;

   // Replaces the null paragraph in the right div with text of the last point clicked
   let newtext = 'Last point clicked:' + ' ' + '('+ scaled_x + ',' + ' ' + scaled_y + ')';
   document.getElementById('coord_text').innerHTML=newtext;

 }

// gets a list of circles using classname
 // Loops over the list and adds an event listener for each circle clicked
let circs = document.getElementsByClassName('circ');
for (let i = 0; i < circs.length; i++) {
   circs[i].addEventListener("click", addBorderToCurrent)};


const visualization = document.getElementById('visualization');
const addX = document.getElementById('new-x');
const addY = document.getElementById('new-y');
const addButton = document.getElementById('add-button');

addButton.addEventListener('click', () => {
  const x = addX.value;
  const y = addY.value;
  if (x && y) {
    const newPoint = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    newPoint.setAttribute("class", "circ");
    newPoint.setAttribute("cx", (x * 30));
    newPoint.setAttribute("cy", ((10 - y) * 30));
    newPoint.setAttribute("r", 10);
    visualization.appendChild(newPoint);
    addEventListeners(newPoint);
  }
});

function addEventListeners(point) {
  point.addEventListener('mouseenter', () => {
    point.classList.add('hover');
  });
  point.addEventListener('mouseleave', () => {
    point.classList.remove('hover');
  });
  point.addEventListener('click', () => {
    point.classList.toggle('selected');
    addBorder(point);
  });
};

function addBorder(point) {
  if (point.classList.contains('border-item')) {
    point.classList.remove('border-item');
  } else {
    point.classList.add('border-item');
  }
  let x = point.getAttribute('cx');
  let y = point.getAttribute('cy');

  // Scaled the x and y coords
  let scaled_x = x/30;
  let scaled_y = 10 - y/30;

  // Replaces the null paragraph in the right div with text of the last point clicked
  let newtext = 'Last point clicked:' + ' ' + '('+ scaled_x + ',' + ' ' + scaled_y + ')';
  document.getElementById('coord_text').innerHTML=newtext;
}