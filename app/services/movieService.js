app.factory('movieService', ($http) => ({
  getData(category) {
    return $http.get(getLink(category))
      .then((movies) => movies.data.results.map((movie) => ({
        posterPath: `${imageURL}${movie.poster_path}`,
      })));
  },
}));
