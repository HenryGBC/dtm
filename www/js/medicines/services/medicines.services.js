(function () {
    'use strict';

    angular
        .module('dtm.medicines.services')
        .factory('Medicine', Medicine);

    Medicine.$inject = ['FURL', '$firebaseAuth', '$state', '$firebaseObject', '$firebaseArray'];

    function Medicine(FURL, $firebaseAuth, $state, $firebaseObject, $firebaseArray) {
        var ref = new Firebase(FURL);
        var medicines = $firebaseArray(ref.child('medicines'));

        var service = {
            addMedicine:addMedicine,
            all:all
        }

        return service;

        function addMedicine(data){
            return medicines.$add(data);

        }

        function all(){
            return medicines;
        }
    }
})();
