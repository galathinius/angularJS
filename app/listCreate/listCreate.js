angular
  .module("app.listCreate", ["ngRoute"])
  .controller("createCtrl", function (listsService) {
    listsService.createList("brand new list").then((res) => {
      localStorage.setItem("list_id", res.data.list_id);
      console.log(`status_message : ${res.data.status_message}`);
      return res.data.session_id;
    });
  });
