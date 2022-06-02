var UserSingleton = (function () {
  var userInstance;

  return {
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
