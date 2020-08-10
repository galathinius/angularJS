const SESSION_ID = localStorage.getItem("session_id");
const LIST_POST_URL = `https://api.themoviedb.org/3/list?api_key=${tmdbKey}&session_id=${SESSION_ID}`;

angular

  .module("app")

  .factory("listsService", ($http) => ({
    createList(listName, listDescription) {
      const REQUEST_BODY = {
        name: listName,
        description: listDescription,
        language: "en",
      };
      const RESPONSE = {
        list_id: "",
        message: "",
      };
      return $http
        .post(LIST_POST_URL, REQUEST_BODY)
        .then((res) => {
          if (res.data.status_code === 1) {
            RESPONSE.list_id = res.data.list_id;
            RESPONSE.message = res.data.status_message;
            return RESPONSE;
          } else {
            RESPONSE.list_id = -1;
            RESPONSE.message = res.data.status_message;
            return RESPONSE;
          }
        })
        .catch((res) => {
          RESPONSE.list_id = -1;
          RESPONSE.message = res.data.status_message;
          return RESPONSE;
        });
    },
  }));

//   config: {method: "POST", transformRequest: Array(1), transformResponse: Array(1), jsonpCallbackParam: "callback", paramSerializer: ƒ, …}
// data: {status_code: 1, status_message: "The item/record was created successfully.", success: true, list_id: 7054310}
// headers: ƒ (name)
// status: 201
// statusText: ""
// xhrStatus: "complete"
