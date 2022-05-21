
function createDiv() {
    return document.createElement('div');
}

function createA() {
    return document.createElement('a');
}

function cleanString(st) {
    return st.replace('\"', '').replace('"', '').replace('[', '').replace(']', '');
}

function createContent(json){


}

function buildImagesBestRatesMovies_2() {
   fetch("http://localhost:8000/api/v1/titles/?actor=&actor_contains=&company=&company_contains=&country=&country_contains=&director=&director_contains=&format=json&genre=&genre_contains=&imdb_score=&imdb_score_max=&imdb_score_min=&lang=&lang_contains=&max_year=&min_year=&page=2&rating=&rating_contains=&sort_by=-imdb_score&title=&title_contains=&writer=&writer_contains=&year=")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const json = data;

    let bestRatesMovies_2 = document.getElementById('bestRatesMovies_2');
    const NUMBER_OF_IMAGES = 2;
    for(let index=0; index<=NUMBER_OF_IMAGES; index++) {
        let td = createTd();
        let affiche = cleanString(json.results[index].image_url);
        let title = cleanString(json.results[index].title);


        let div = createDiv();
        div.className = "box";

        let a = createA();
        a.className = "button";
        a.setAttribute("href","#popup"+index+3);

        a.appendChild(createImgPopup(affiche, title));
        div.appendChild(a);
        td.appendChild(div);

        bestRatesMovies_2.appendChild(td);

    }
})

};
buildImagesBestRatesMovies_2()
