// Enforce strict mode for better code quality
"use strict"; 

// Get the checkbox element by its ID
const checkbox = document.getElementById("checkbox")
// Add an event listener to the checkbox for the 'change' event
checkbox.addEventListener("change", () => {
  // Toggle the 'dark' class on the body element when the checkbox changes
  document.body.classList.toggle("dark")
})

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
  images.innerHTML = `<img src="assets/images/${item.imageFile}">`;
  container.appendChild(images);
});

// Get all elements with class "collapsible"
let coll = document.getElementsByClassName("collapsible");
let i;
// Loop through each collapsible element
for (i = 0; i < coll.length; i++) {
  // Add a click event listener to each collapsible element
  coll[i].addEventListener("click", function() {
    // Toggle the "active" class to style the active collapsible element
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.display === "block") {
      // If content is displayed, hide it
      content.style.display = "none";
    } else {
      // If content is hidden, display it
      content.style.display = "block";
    }
  });
   // Initially hide the content from collapsible
   const content = coll[i].nextElementSibling;
   content.style.display = "none";
}

// form
function requiredField(input) {
  let errorElement = document.getElementById(input.id + '-error');
  // Check if the input value is empty
  if (input.value.length < 1) {
    // Display an error message if the field is required
    errorElement.textContent = "This field is required.";
  } else if (input.type === "email") {
    // If the input type is "email", check if it's a valid email address
    console.log("this is an email type");
    if (input.value.indexOf("@") === -1 || input.value.indexOf(".") === -1) {
      // Display an error message for an invalid email address
      errorElement.textContent = "Invalid email address.";
    } else {
      // Clear any previous error message if the email is valid
      errorElement.textContent = "";
    }
  }
}


