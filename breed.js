const queryString = new URLSearchParams(window.location.search)
const breedName = queryString.get('breed')
const subBreedName = queryString.get('subbreed')
// const breed = 'terrier'
console.log(breedName)

if(breedName && !subBreedName)  {  // breedname varsa(&&), (!)yoksa
    fetch(`https://dog.ceo/api/breed/${breedName}/images`)
        .then(function (res) {
            return res.json()
        })
        .then(function (photos) {

            showPhotos(photos.message, breedName)
        })
} 
if(breedName && subBreedName)  {  // breedname varsa(&&), (!)yoksa
    fetch(`https://dog.ceo/api/breed/${breedName}/${subBreedName}/images`)
        .then(function (res) {
            return res.json()
        })
        .then(function (photos) {

            showPhotos(photos.message, `${breedName} ${subBreedName}`)
        })
} 

function showPhotos(photos, breedName) { // 3.parametre ekle numberOfPhotos,slice'in ikinci numarasını kaldırıp numberofphotosu koy.
    //console.log(photos)
    const sliced = photos.slice(0, 3)
    console.log(sliced)

    let html = ''

    sliced.forEach(function (photoURL) {
        html += `<img src="${photoURL}" >`
        console.log(photoURL)
    })

    document.querySelector('h1').innerHTML = breedName
    document.querySelector('.dog-images').innerHTML = html
}


//event listener ekle (button),numberofphotosun sayısını değiştir.
