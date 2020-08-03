angular.module("app").component("list", {
  templateUrl: "list/list.html",
  bindings: { category: "@" },
  controller: function ListController(movieService) {
    this.$onInit = function () {
      movieService
        .getData(this.category)
        .then((result) => (this.categories = result));
    };
  },
});
