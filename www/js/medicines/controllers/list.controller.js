
(function () {
    'use strict';

    angular
        .module('dtm.medicines.controllers')
        .controller('ListController', ListController);

    ListController.$inject = ['$scope', '$state', 'Authenticate', 'Medicine', '$cordovaToast', 'Profile', '$ionicModal'];

    function ListController($scope, $state, Authenticate, Medicine, $cordovaToast, Profile, $ionicModal) {

        var vm = this;
        console.log('ListController');
        var profile = {};
        angular.extend(vm, {
            medicines:[],
            mapDate:mapDate,
            showContact:showContact,
            closeModal:closeModal
        });


        _activate();

        function showContact(id){
            $scope.profile = Profile.getProfile(id);

            console.log($scope.profile);
            vm.modal.show();

        }

        function closeModal(){
            console.log('close');
            vm.modal.hide();
        }
        function mapDate(date){
            console.log();
            return new Date(date);
        }

        function _activate(){
            $ionicModal.fromTemplateUrl('profile-modal.html', {
                scope: $scope,
                animation: 'slide-in-up'
            }).then(function(modal) {
                vm.modal = modal;
            });
            vm.medicines = Medicine.all();


        }

    }
})();
