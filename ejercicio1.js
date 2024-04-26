const movies = [
  {
    title: "Bracula: Condemor II",
    duration: 192,
    categories: ["comedia", "aventura"],
  },
  {
    title: "Spider-Man: No Way Home",
    duration: 122,
    categories: ["aventura", "acción"],
  },
  {
    title: "The Voices",
    duration: 223,
    categories: ["comedia", "thriller"],
  },
  {
    title: "Shrek",
    duration: 111,
    categories: ["comedia", "aventura", "animación"],
  },
];

function categoryList(movieList) {
  const categoriasArr = [];
  for (let categorias of movieList) {
    for (let categoria of categorias["categories"]) {
      if (!categoriasArr.includes(categoria)) {
        categoriasArr.push(categoria);
      }
    }
  }
  return categoriasArr;
}

console.log(
  "Estas son las categorías de tu lista de películas favoritas: ",
  categoryList(movies)
);
