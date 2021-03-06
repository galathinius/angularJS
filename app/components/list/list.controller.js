angular.module("app").component("list", {
  templateUrl: "components/list/list.view.html",
  bindings: { category: "@" },
  controller: function ListController(movieService) {
    this.$onInit = function () {
      movieService
        .getData(this.category)
        .then((result) => (this.categories = result));
    };
  },
});
