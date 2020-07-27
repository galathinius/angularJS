function dynamicallyLoadScript(url) {
  const script = document.createElement('script'); // create a script DOM node
  script.src = url; // set its src to the provided URL

  document.head.appendChild(script); // add it to the end of the head section of the page (could change 'head' to 'body' to add it to the end of the body section instead)
}

{ /* <script src="lib/angular/angular.js"></script>
  <script src="lib/angular-route/angular-route.js"></script>
  <script src="app.js"></script>
  <script src="MovieLists/MovieLists.js"></script>
  <script src="services/movieService.js"></script>
  <script src="list/list.js"></script> */ }

scriptsToLoad = [
//   'lib/angular/angular.js',
//   'lib/angular-route/angular-route.js',
//   'app.js',
//   'MovieLists/MovieLists.js',
//   'services/movieService.js',
  'list/list.js',
  'configuration.js',
];

for (const urlul of scriptsToLoad) {
  dynamicallyLoadScript(urlul);
}
