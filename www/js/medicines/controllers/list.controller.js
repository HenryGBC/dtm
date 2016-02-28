
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
            closeModal:closeModal,
            remove:remove
        });


        _activate();

        function showContact(id){
            $scope.profile = Profile.getProfile(id);

            vm.modal.show();

        }

        function closeModal(){
            console.log('close');
            vm.modal.hide();
        }
        function mapDate(date){
            return new Date(date);
        }
        function remove(item){
            console.log(item);
            Medicine.removeItem(item);
        }

        function _activate(){
            vm.profileId = Authenticate.getUser().profile.$id;
            console.log(vm.profileId);
            $ionicModal.fromTemplateUrl('profile-modal.html', {
                scope: $scope,
                animation: 'slide-in-up'
            }).then(function(modal) {
                vm.modal = modal;
            });
            vm.medicines = Medicine.all();
            console.log(vm.medicines);

        }

    }
})();
