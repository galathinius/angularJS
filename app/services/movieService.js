app.factory('movieService', ($http) => ({
  getData(category) {
    return $http.get(getLink(category))
      .then((response) => response.data.results)
      .then((movies) => movies.map((movie) =>({
          posterPath: `${imageURL}${movie.poster_path}`,
      })));
  },
}));