"use strict"

// Array of objects
const gallery = [
  { imageFile: "optimized-image1.jpg" },
  { imageFile: "optimized-image2.jpg" },
  { imageFile: "optimized-image3.jpg" },
  { imageFile: "optimized-image4.jpg" },
  { imageFile: "optimized-image5.jpg" },
  { imageFile: "optimized-image6.jpg" },
  { imageFile: "optimized-image7.jpg" },
  { imageFile: "optimized-image8.jpg" },
  { imageFile: "optimized-image9.jpg" },
]
// Get the container element
const container = document.getElementById("gallery-container");

// Loop through the data array and render images
gallery.forEach((item) => {
  const images = document.createElement("div");
  images.innerHTML = `
      
  <img src="assets/images/${item.imageFile}">
  `;
  container.appendChild(images);
});

let coll = document.getElementsByClassName("collapsible");
let i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });

   // Initially hide the content from collapsible
   const content = coll[i].nextElementSibling;
   content.style.display = "none";
}
