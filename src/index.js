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
          if (button.innerText === "Good Dog!") {
            button.innerText = "Bad Dog!"
            dog.isGoodDog = false
          } else {
            button.innerText = "Good Dog!"
            dog.isGoodDog = true
          }

          fetch('http://localhost:3000/pups/' + dog.id, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
            },
            body: JSON.stringify({
              "isGoodDog": dog.isGoodDog
            })
          })
        })

    })
  }




  
  
  

})