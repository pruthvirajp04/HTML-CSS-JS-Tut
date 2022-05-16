  // This is the function for hide and show text with the help of Event Listener in button.
  function toggleHide() {
    let btn = document.getElementById("id");
    let para = document.getElementById("para");
    if (para.style.display != "none") {
    document.getElementById('btn').innerHTML = "Read";

      para.style.display = "none";
    } else {
    document.getElementById('btn').innerHTML = "Hide";

      para.style.display = "block";
    }
  }
  //Now using the Event Listener of mouseover
  // let mouseOver = document.getElementById('para');
  // mouseOver.addEventListener('mouseover' ,function run(){alert("The mouse is inside the Paragraph");});
  //Now using the Event Listener of mouseout 
  // let mouseOut = document.getElementById('para');
  // mouseOut.addEventListener('mouseout', function run(){alert("The mouse is outside the Paragraph");});