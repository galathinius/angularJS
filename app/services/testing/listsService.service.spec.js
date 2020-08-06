"use strict";
//  to do
describe("list creating service", function () {
  let $httpBackend, $rootScope;

  beforeEach(module("listsService"));
  //   beforeEach(module("app.movieLists"));

  beforeEach(inject(function ($injector) {
    $httpBackend = $injector.get("$httpBackend");
    $rootScope = $injector.get("$rootScope");
  }));

  afterEach(function () {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  describe("list creating service", function () {
    it("should show api error", inject(function ($controller) {
      const ERROR_RESPONSE = {
        status_message: "The resource you requested could not be found.",
        status_code: 34,
      };

      localStorage.setItem("session_id", "test-session-id");
      const CREATE_LIST_URL = `https://api.themoviedb.org/3/list?api_key=${tmdbKey}&session_id=test-session-id`;

      $httpBackend.whenPOST(CREATE_LIST_URL).respond(ERROR_RESPONSE);
      expect(ctrl.submitEnabled).toBeFalsy();
    }));

    // it("should show api succes", inject(function ($controller) {
    //   const SUCCES_RESPONSE = {
    //     status_message: "The item/record was created successfully.",
    //     success: true,
    //     status_code: 1,
    //     list_id: 1111,
    //   };

    //   localStorage.setItem("session_id", "test-session-id");
    //   const CREATE_LIST_URL = `https://api.themoviedb.org/3/list?api_key=${tmdbKey}&session_id=test-session-id`;

    //   $httpBackend.whenPOST(CREATE_LIST).respond(SUCCES_RESPONSE);

    //   const ctrl = $controller("FavouritesCtrl", { $scope: $rootScope });
    //   ctrl.data = {
    //     name: "test name",
    //     description: "test description",
    //   };
    //   ctrl.submit();
    //   $httpBackend.flush();
    //   expect(ctrl.message).toBe("Your list has been created!");
    // }));
  });
});
