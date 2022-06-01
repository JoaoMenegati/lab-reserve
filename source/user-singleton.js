var UserSingleton = (function () {
  var userInstance;

  return {
    deleteInstance: function () {
      userInstance = undefined;
    },

    setInstance: function (newInstance) {
      userInstance = newInstance;
    },

    getInstance: function () {
      if (!userInstance) {
        userInstance = new Object();
      }

      return userInstance;
    },
  };
})();

export default UserSingleton;
