angular
  .module("app.listCreate", ["ngRoute"])
  .controller("createCtrl", function (listsService) {
    this.approve = "unknown";
    this.update = function (list) {
      console.log(list);

      // input validation
      if (!(list?.name | list?.description)) {
        this.approve = "false";
      } else {
        this.approve = "true";
        listsService.createList(list.name, list.description).then((res) => {
          localStorage.setItem("list_id", res.data.list_id);
          console.log(`status_message : ${res.data.status_message}`);
        });
      }
    };
  });
