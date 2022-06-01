var UserSingleton = (function () {
  var userInstance;

  return {
    deleteInstance: function () {
      userInstance = undefined;
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
