function getEmoji(category) {
    const url = `https://emojihub.herokuapp.com/api/random/${category}`
    console.log(url)
    fetch(url)
        .then((response) => {
            return response.json();
        }).then((json) => {
            let results = `<p>${json.htmlCode[0]}</p>`

            document.getElementById("js_emoji").innerHTML = results
        })
}

document.getElementById("faceEmoji").addEventListener("click", (event) => {
    getEmoji("category_smileys_and_people")
})
document.getElementById("foodEmoji").addEventListener("click", (event) => {
    getEmoji("category_food_and_drink")
})
document.getElementById("animalEmoji").addEventListener("click", (event) => {
    getEmoji("category_animals_and_nature")
})

// $(function() {
//     $('[data-toggle="popover"]').popover()
// })

// $('.popover-dismiss').popover({
//     trigger: 'focus'
// })

// //   $(function () {
// //     $('.example-popover').popover({
// //       container: 'body'
// //     })
// //   })