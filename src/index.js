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
      data.forEach(renderDogs)
      console.log(data)
    })

  const renderDogs = (dog) => {
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

      dogInfo.appendChild(img)
      dogInfo.appendChild(h2)
      dogInfo.appendChild(button)

      if (dog.isGoodDog === true) {
        button.innerText = "Good Dog!"
      } else {
        button.innerText = "Bad Dog!"
      }

        button.addEventListener('click', () => {
          console.log(button.innerText)
        })

    })
  }




  
  
  

})