const getTokenLink = 'https://api.themoviedb.org/3/authentication/token/new?api_key=06f99320c4d4aafa43383b3d6c8da151';

app.factory('authService', ($http) => ({
  getToken() {
    return $http.get(getTokenLink);
    //   .then((result) => (
    //       result.request_token
    //       ));
  },
}));

// https://www.themoviedb.org/authenticate/5e270b6e3370cfaf9008b04dd0aa36fb9ca5f106?redirect_to=http://localhost:8000/#!/approved
