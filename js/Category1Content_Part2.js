function createDiv() {
    return document.createElement('div');
}

function createA() {
    return document.createElement('a');
}

function cleanString(st) {
    return st.replace('\"', '').replace('"', '').replace('[', '').replace(']', '');
}


function category1ContentPart_2() {
  fetch("http://localhost:8000/api/v1/titles/?actor=&actor_contains=&company=&company_contains=&country=&country_contains=&director=&director_contains=&format=json&genre=Action&genre_contains=&imdb_score=&imdb_score_max=&imdb_score_min=&lang=&lang_contains=&max_year=&min_year=&page=2&rating=&rating_contains=&sort_by=-imdb_score&title=&title_contains=&writer=&writer_contains=&year=")
     .then((response) => {
       return response.json();
     })
     .then((data) => {
       const json = data;

  let category1ContentPart_2 = document.getElementById('category1ContentPart_2');


  const NUMBER_OF_IMAGES = 2;
  for(let index=0; index<=NUMBER_OF_IMAGES; index++) {

    let txtActors =     'Acteur(s) : '          +       cleanString((JSON.stringify(json.results[index].actors)).toString());
    let txtGenres =     'Genre(s) : '           +       cleanString((JSON.stringify(json.results[index].genres)).toString());
    let txtTitle =      'Titre : '              +       cleanString((JSON.stringify(json.results[index].title)));
    let txtSortie =     'Année : '              +       JSON.stringify(json.results[index].year);
    let txtRated =      'Votes : '              +       JSON.stringify(json.results[index].votes);
    let txtScore =      'Score Imdb : '         +       cleanString(JSON.stringify(json.results[index].imdb_score));
    let txtDirectors =  'Réalisateur(s) :     ' +       cleanString((JSON.stringify(json.results[index].directors)).toString());

    let divActors = document.createElement('div');
    divActors.innerHTML =  txtActors;

    let divGenres = document.createElement('div');
    divGenres.innerHTML =  txtGenres;

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
    div.id = "popup"+index+14;
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
    div_3.appendChild(divGenres);
    div_3.appendChild(divActors);

    div_2.appendChild(div_3);
    div_2.appendChild(a);

    div.appendChild(div_2);

    category1ContentPart_2.appendChild(div);

  }
})

};
category1ContentPart_2()
