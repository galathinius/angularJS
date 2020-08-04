"use strict";

describe("movie lists module", function () {
  beforeEach(function () {
    module("services.auth");
    module("app.movieLists");
  });

  describe("movie lists controller", function () {
    it("should ....", inject(function ($controller) {
      var $scope = {};
      var view1Ctrl = $controller("movieListsCtrl", { $scope: $scope });
      expect(view1Ctrl).toBeDefined();
    }));
  });
});
