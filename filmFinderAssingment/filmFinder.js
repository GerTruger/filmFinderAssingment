const overzicht = document.getElementById('overzicht');
const getsearch = document.getElementById("input-box");
const imdbUrl = "https://www.imdb.com/title/";


//maakt daadwerkelijk een list element van de gegeven film

const createItem =(movie) => {
    const li = document.createElement("li");
    const link = document.createElement("a");
    const image = document.createElement("img");
  
    image.setAttribute("src", movie.poster);
    link.setAttribute("href", imdbUrl + movie.imdbID);
    link.setAttribute("target", "_new");
  
    li.appendChild(link).appendChild(image);
    return li;
};

// Pakt films uit de database en maakt voor elke een list element in de container

function addMoviesToDom(movies) {
   
    // fillter function by title and year   

      overzicht.innerHTML = '';
      const items = movies.map(createItem);
      items.forEach((item) => {
      overzicht.appendChild(item);
});
};

addMoviesToDom(movies); 

 // search-box open dicht 

let navbar = document.querySelector(".navbar");
let searchBox = document.querySelector(".bx-search");
let searchBoxCancel = document.querySelector(".search-box .bx-x");

searchBox.addEventListener("click", () => {

  navbar.classList.toggle("showInput");
});

const letsearch = document.getElementById("zoek");

letsearch.addEventListener("keyup", (event) => {

const searchstring = event.target.value.toLowerCase() ;     
const searchDisplay = movies.filter((movie) => {
  return (
    movie.title.toLowerCase().includes(searchstring) ||
    movie.year.toLowerCase().includes(searchstring)
  );
});
  addMoviesToDom(searchDisplay);
});

// addEventListener radiobutton \\

const handleOnChangeEvent = document.querySelector('input[name="finder"]')
    document.querySelectorAll('input[name="finder"]')
            .forEach((elem) => {
        elem.addEventListener("change", function (event) {
            let item = event.target.value;

            switch (item) { 
                case "all-movies": 
                addMoviesToDom(movies)
                    break;

                case "new-movies": 
                const newMovies = movies.filter((movie) => movie.year >= 2014);
                addMoviesToDom(newMovies)
                    break;

                case "avengers":
                    const avengerMovies = movies.filter((movie) =>
                    movie.title.includes("Avengers"));
                    addMoviesToDom(avengerMovies)
                    break;

                case "x-men":
                    const xmenMovies = movies.filter((movie) =>
                    movie.title.includes("X-Men"));
                    addMoviesToDom(xmenMovies)
                    break;

                case "princess":
                    const princessMovies = movies.filter((movie) =>
                    movie.title.includes("Princess"));
                    addMoviesToDom(princessMovies)
                    break;

                case "batman":  
                 const batmanMovies = movies.filter((movie) =>
                    movie.title.includes("Batman"));
                     addMoviesToDom(batmanMovies)
                    break;
                default:
                    break;
                          };
});       
});




