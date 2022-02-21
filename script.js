const url = 'https://emojihub.herokuapp.com/api/all/category_food_and_drink'
fetch(url)
    .then((response) => {
        return response.json();
    }).then((json) => {
        let results = ""
        json.map(x => {
            results += `<p>${x.htmlCode[0]}</p>`
        })
        document.getElementById("js_target").innerHTML = results
    })