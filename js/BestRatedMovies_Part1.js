function createTd() {
    return document.createElement('td');
}

function createDiv() {
    return document.createElement('div');
}

function createA() {
    return document.createElement('a');
}

function createSpan() {
    return document.createElement('span');
}

function cleanString(st) {
    return st.replace('\"', '').replace('"', '').replace('[', '').replace(']', '');
}

function createImg(affiche, title) {
    affiche = cleanString(affiche);
    title = cleanString(title);
    let imgP = document.createElement('img');
    imgP.src = affiche;
    imgP.alt = title;
    return imgP;
}

function createImgPopup(affiche, title) {
    affiche = cleanString(affiche);
    title = cleanString(title);
    let imgPopup = document.createElement('img');
    imgPopup.src = affiche;
    imgPopup.alt = title;
    return imgPopup;
}


function buildImagesBestRatesMovies_1() {
   fetch("http://localhost:8000/api/v1/titles/?actor=&actor_contains=&company=&company_contains=&country=&country_contains=&director=&director_contains=&format=json&genre=&genre_contains=&imdb_score=&imdb_score_max=&imdb_score_min=&lang=&lang_contains=&max_year=&min_year=&rating=&rating_contains=&sort_by=-imdb_score&title=&title_contains=&writer=&writer_contains=&year=")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const json = data;

    let bestRatesMovies_1 = document.getElementById('bestRatesMovies_1');
    const NUMBER_OF_IMAGES = 3;
    for(let index=0; index<=NUMBER_OF_IMAGES; index++) {
        let td = createTd();
        let affiche = cleanString(json.results[index].image_url);
        let title = cleanString(json.results[index].title);


        let div = createDiv();
        div.className = "box";

        let a = createA();
        a.className = "button";
        a.setAttribute("href","#popup"+index);

        a.appendChild(createImgPopup(affiche, title));
        div.appendChild(a);
        td.appendChild(div);

        bestRatesMovies_1.appendChild(td);

    }
})

};
buildImagesBestRatesMovies_1()