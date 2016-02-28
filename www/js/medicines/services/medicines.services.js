(function () {
    'use strict';

    angular
        .module('dtm.medicines.services')
        .factory('Medicine', Medicine);

    Medicine.$inject = ['FURL', '$firebaseAuth', '$state', '$firebaseObject', '$firebaseArray'];

    function Medicine(FURL, $firebaseAuth, $state, $firebaseObject, $firebaseArray) {
        var ref = new Firebase(FURL);
        var refMed= new Firebase(FURL+'medicines')
        console.log(refMed);
        var medicines = $firebaseArray(ref.child('medicines'));

        var service = {
            addMedicine:addMedicine,
            all:all,
            removeItem:removeItem
        }

        return service;

        function addMedicine(data){
            medicines.$add(data);

        }

        function removeItem(item){+
            console.log(ref.key());
            console.log(medicines);
            medicines.$remove(item.$id);
            medicines.$remove(item).then(function(ref) {
              ref.key() === item.$id; // true
            });
        }
        function all(){
            return medicines;
        }
    }
})();
