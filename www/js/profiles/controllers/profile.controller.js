
(function () {
    'use strict';

    angular
        .module('dtm.profiles.controllers')
        .controller('ProfileController', ProfileController);

    ProfileController.$inject = ['$state', 'Authenticate'];

    function ProfileController($state, Authenticate) {

        var vm = this;
        console.log('ProfileController');

        angular.extend(vm, {
            isAuthenticate: 'siiii'
        });



    }
})();
