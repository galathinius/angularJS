"use strict";
//  to do
describe("list creating service", function () {
  let $httpBackend, $rootScope;

  beforeEach(module("app"));
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
    it("should show api error", inject(function (listsService) {
      const ERROR_RESPONSE = {
        status_message: "The resource you requested could not be found.",
        status_code: 34,
      };
      const LIST = {
        name: "test name",
        description: "test description",
      };
      localStorage.setItem("session_id", "test-session-id");
      const CREATE_LIST_URL = `https://api.themoviedb.org/3/list?api_key=${tmdbKey}&session_id=test-session-id`;
      let RESULT;
      $httpBackend.whenPOST(CREATE_LIST_URL).respond(ERROR_RESPONSE);
      listsService.createList(LIST.name, LIST.description).then((res) => {
        RESULT = res;
      });
      $httpBackend.flush();
      expect(RESULT.list_id).toBe(-1);
    }));

    it("should show api succes", inject(function (listsService) {
      const SUCCES_RESPONSE = {
        status_message: "The item/record was created successfully.",
        success: true,
        status_code: 1,
        list_id: 1111,
      };
      const LIST = {
        name: "test name",
        description: "test description",
      };
      localStorage.setItem("session_id", "test-session-id");
      const CREATE_LIST_URL = `https://api.themoviedb.org/3/list?api_key=${tmdbKey}&session_id=test-session-id`;
      let RESULT;
      $httpBackend.whenPOST(CREATE_LIST_URL).respond(SUCCES_RESPONSE);
      listsService.createList(LIST.name, LIST.description).then((res) => {
        RESULT = res;
      });
      $httpBackend.flush();
      expect(RESULT.list_id).toBe(1111);
    }));
  });
});
