"use strict";

describe("creating lists module", function () {
  let $httpBackend, $rootScope;

  beforeEach(module("services.lists"));
  beforeEach(module("app.listCreate"));

  beforeEach(inject(function ($injector) {
    $httpBackend = $injector.get("$httpBackend");
    $rootScope = $injector.get("$rootScope");
  }));

  afterEach(function () {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  describe("listCreate controller", function () {
    it("should show validation error with both empty fields", inject(function (
      $controller
    ) {
      const ctrl = $controller("createCtrl", { $scope: $rootScope });
      const list = "";
      ctrl.update(list);
      expect(ctrl.approve).toBeFalsy();
    }));

    it("should show validation error with empty name", inject(function (
      $controller
    ) {
      const ctrl = $controller("createCtrl", { $scope: $rootScope });
      const list = { description: "cth" };
      ctrl.update(list);
      expect(ctrl.approve).toBeFalsy();
    }));

    it("should show validation error with empty description", inject(function (
      $controller
    ) {
      const ctrl = $controller("createCtrl", { $scope: $rootScope });
      const list = { name: "cth" };
      ctrl.update(list);
      expect(ctrl.approve).toBeFalsy();
    }));

    // commented code
    it("should create list", inject(function ($controller) {
      const SUCCES_RESPONSE = {
        status_message: "The item/record was created successfully.",
        success: true,
        status_code: 1,
        list_id: 5861,
      };
      const ERROR_RESPONSE = {
        status_message: "The resource you requested could not be found.",
        status_code: 34,
      };
      localStorage.setItem("sessionId", "test-session-id");
      const CREATE_LIST =
        "https://api.themoviedb.org/3/list?api_key=fc298428bb77d2a10fb5e0bc411eb836&session_id=test-session-id";
      $httpBackend.whenPOST(CREATE_LIST).respond(SUCCES_RESPONSE);
      const ctrl = $controller("createCtrl", { $scope: $rootScope });
      const list = {
        name: "test name",
        description: "test description",
      };
      ctrl.update(list.name, list.description);
      $httpBackend.flush();
      expect(ctrl.approve).toBeTruthy();
    }));
  });
});
