// Step2: On the page, there is a div with the id of "dog-bar". When the page loads, 
// use fetch to get all of the pup data from your server. When you have this 
// information, you'll need to add a span with the pup's name to the dog bar 
// (ex: <span>Mr. Bonkers</span>).

// Step3: When a user clicks on a pup's span in the div#dog-bar, that pup's info 
// (image, name, and isGoodDog status) should show up in the div with the id of 
// "dog-info". Display the pup's info in the div with the following elements:
  // -- an img tag with the pup's image url
  // -- an h2 with the pup's name
  // -- a button that says "Good Dog!" or "Bad Dog!" based on whether isGoodDog is
  // true or false. 

// Step4: When a user clicks the Good Dog/Bad Dog button, two things should happen:
    // -- The button's text should change from Good to Bad or Bad to Good
    // --  The corresponding pup object in the database should be updated to 
    // reflect the new isGoodDog value
// You can update a dog by making a PATCH request to /pups/:id and including the 
// updated isGoodDog status in the body of the request.

document.addEventListener("DOMContentLoaded", (e) => {
  let dogBar = document.getElementById("dog-bar")

  fetch('http://localhost:3000/pups')
    .then(response => response.json())
    .then(data => {
      data.forEach(createDogBar)
    })

  const createDogBar = (dog) => {
    let span = document.createElement("span")
    span.innerText = dog.name
    dogBar.appendChild(span)
    console.log(dog.name)
  }

  
  
  

})