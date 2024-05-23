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
  let dogInfo = document.getElementById("dog-info")

  fetch('http://localhost:3000/pups')
    .then(response => response.json())
    .then(data => {
      data.forEach(createDogBar)
    })

  const createDogBar = (dog) => {
    let span = document.createElement("span")
    span.innerText = dog.name
    dogBar.appendChild(span)

    span.addEventListener('click', () => {
      dogInfo.innerHTML = ""
      let img = document.createElement('img')
      let h2 = document.createElement('h2')
      let button = document.createElement('button')
  
      img.src = dog.image
      h2.innerText = dog.name
      button.innerText = "Good Dog!"
  
      dogInfo.appendChild(img)
      dogInfo.appendChild(h2)
      dogInfo.appendChild(button)
    })
  }


  
  
  

})