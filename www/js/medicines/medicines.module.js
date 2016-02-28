(function () {
  'use strict';

  angular
    .module('dtm.medicines', [
      'dtm.medicines.controllers',
      'dtm.medicines.services',
    ]);



  angular
    .module('dtm.medicines.controllers',['ionic-datepicker']);

  angular
   .module('dtm.medicines.services',[]);

})();
