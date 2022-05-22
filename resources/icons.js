var Icons = (function () {
  var instance;

  function createInstance() {
    var object = new Object();
    object.main =
      "https://drive.google.com/u/0/uc?id=1f_fpybrA5NgTkaT1DeLy_c1y1r84GVjd&export=download";
    object.userDefault =
      "https://drive.google.com/u/0/uc?id=1AobmIry_Fy4k442Rvy5phukzPVoEjTZr&export=download";
    object.view =
      "https://drive.google.com/u/0/uc?id=1qPIl2ucTW42ARFykKWVTE-WlvK9UQvlJ&export=download";
    object.plus =
      "https://drive.google.com/u/0/uc?id=1cZbQQpAkCDJt8lq04ikLaukYJDBgClWZ&export=download";

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
