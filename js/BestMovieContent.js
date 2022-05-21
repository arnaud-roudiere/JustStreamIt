function createDiv() {
    return document.createElement('div');
}

function createA() {
    return document.createElement('a');
}

function cleanString(st) {
    return st.replace('\"', '').replace('"', '').replace('[', '').replace(']', '');
}


function bestMovieContent() {
  fetch("http://localhost:8000/api/v1/titles/?actor=&actor_contains=&company=&company_contains=&country=&country_contains=&director=&director_contains=&format=json&genre=&genre_contains=&imdb_score=&imdb_score_max=&imdb_score_min=&lang=&lang_contains=&max_year=&min_year=&rating=&rating_contains=&sort_by=-imdb_score&title=&title_contains=&writer=&writer_contains=&year=")
     .then((response) => {
       return response.json();
     })
     .then((data) => {
       const json = data;
  console.log(json)
  let bestMovieContent = document.getElementById('bestMovieContent');


  const NUMBER_OF_IMAGES = 0;
  for(let index=0; index<=NUMBER_OF_IMAGES; index++) {

    let txtMovies = '';
    let txtGenres = '';
    let txtTitle = 'Titre :' + JSON.stringify(json.results[index].title);
    let txtSortie = 'Année :' + JSON.stringify(json.results[index].year);
    let txtRated = 'Votes :' + JSON.stringify(json.results[index].votes);
    let txtScore = 'Score Imdb :' + JSON.stringify(json.results[index].imdb_score);
    let txtDirectors = 'Réalisateur(s) :' + JSON.stringify(json.results[index].directors[0]);

    let divSortie = document.createElement('div');
    divSortie.innerHTML =  txtSortie;

    let divRated = document.createElement('div');
    divRated.innerHTML =  txtRated;

    let divScore = document.createElement('div');
    divScore.innerHTML = txtScore;

    let divTitle = document.createElement('div');
    divTitle.innerHTML = txtTitle;

    let divDirectors = document.createElement('div');
    divDirectors.innerHTML = txtDirectors;

    let div = createDiv();
    div.id = "popup"+index+40;
    div.className = "overlay";

    let div_2 = createDiv();
    div_2.className = "popup";
    div_2.innerHTML = "<h2>"+txtTitle+"</h2>"

    let a = createA();
    a.className = "close";
    a.setAttribute("href","#");
    a.innerHTML = "X";

    let div_3 = createDiv();
    div_3.className = "content";

    let affiche = cleanString(json.results[index].image_url);
    let title = cleanString(json.results[index].title);
    div_3.appendChild(createImgPopup(affiche, title));

    div_3.appendChild(divTitle);
    div_3.appendChild(divSortie);
    div_3.appendChild(divRated);
    div_3.appendChild(divScore);
    div_3.appendChild(divDirectors);

    div_2.appendChild(div_3);
    div_2.appendChild(a);

    div.appendChild(div_2);

    bestMovieContent.appendChild(div);

  }
})

};
bestMovieContent()
