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
      const list = { description: "test1" };
      ctrl.update(list);
      expect(ctrl.approve).toBeFalsy();
    }));

    it("should show validation error with empty description", inject(function (
      $controller
    ) {
      const ctrl = $controller("createCtrl", { $scope: $rootScope });
      const list = { name: "test2" };
      ctrl.update(list);
      expect(ctrl.approve).toBeFalsy();
    }));

    it("should create list", inject(function ($controller) {
      const ctrl = $controller("createCtrl", { $scope: $rootScope });
      const LIST = {
        name: "test name",
        description: "test description",
      };
      const SUCCES_RESPONSE = {
        status_message: "The item/record was created successfully.",
        success: true,
        status_code: 1,
        list_id: 5861,
      };
      localStorage.setItem("session_id", "test-session-id");
      const CREATE_LIST_URL = `https://api.themoviedb.org/3/list?api_key=${tmdbKey}&session_id=test-session-id`;

      $httpBackend.whenPOST(CREATE_LIST_URL).respond(SUCCES_RESPONSE);

      ctrl.update(LIST);
      $httpBackend.flush();
      expect(ctrl.approve).toBeTruthy();
    }));
  });
});
