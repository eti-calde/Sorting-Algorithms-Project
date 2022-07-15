let slider = document.getElementById("elements-slider");
let output = document.getElementById("slider-output");
output.innerText = `${slider.value} elements `; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerText = `${slider.value} elements`;
}