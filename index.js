fetch('https://dog.ceo/api/breeds/list/all')
    .then(function (res) {
        return res.json()
    })
    .then(function (dogs) {

        const breeds = dogs.message

        //console.log(breeds)
        showBreed(breeds)

    })

const card = document.querySelector('.card')
//console.log(card)

function showBreed(breeds) {
    let html = ''
    for (let breed in breeds) {
        //console.log(breed)
        html += `<li><a href=/breed?breed=${breed}>${breed}</a></li>`

        //console.log(breeds[breed].length)
        const subBreeds = breeds[breed]
        if (subBreeds.length > 0) {
            //console.log(`show sub breeds for ${breed}`)
            console.log(subBreeds)
            html += `<ul>`
            subBreeds.forEach(function (subBreed) {
                html += `<li><a href=/breed?breed=${breed}&subbreed=${subBreed}> ${subBreed} </a></li>`
            }) 
            html += `</ul>`
        } else {
            console.log(`this breed no have sub breeds`)
        }


    }

    //console.log(html)

    card.innerHTML = `<ul> ${html} </ul>`




}


