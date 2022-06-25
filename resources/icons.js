var Icons = (function () {
  var instance;

  function createInstance() {
    var object = new Object();
    object.main = require("./icons/main.png");
    object.userDefault = require("./icons/user-default.png");
    object.view = require("./icons/view.png");
    object.plus = require("./icons/plus.png");
    object.accept = require("./icons/accept.png");
    object.deny = require("./icons/deny.png");

    return object;
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();

export default Icons;
