
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
            editProfile: editProfile
        });


        _activate();


        function editProfile(){
            vm.profile.$save();
        }
        function _activate(){
            vm.profile = Authenticate.getUser().profile;
            console.log(vm.profile);
        }


    }
})();
