
(function () {
    'use strict';

    angular
        .module('dtm.medicines.controllers')
        .controller('UploadController', UploadController);

    UploadController.$inject = ['$state', 'Authenticate', 'Medicine', '$cordovaToast'];

    function UploadController($state, Authenticate, Medicine, $cordovaToast) {

        var vm = this;
        console.log('UploadController');

        angular.extend(vm, {
            medicine:{},
            uploadData: uploadData
        });


        _activate();


        function uploadData(){
            if(Object.keys(vm.medicine).length===8){
                console.log(vm.medicine);
                vm.medicine.dateExpire = vm.medicine.dateExpire.toString();
                Medicine.addMedicine(vm.medicine);
                vm.medicine={};
                $state.go('tab.dash');
            }
        }


        function _activate(){
            vm.medicine.profile= Authenticate.getUser().profile.$id;

            vm.dateExpire = {
                titleLabel: 'Fecha de Vencimiento',  //Optional
                closeLabel: 'Cerrar',  //Optional
                setLabel: 'Seleccionar',  //Optional
                setButtonType : 'button-assertive',  //Optional
                todayButtonType : 'button-assertive',  //Optional
                closeButtonType : 'button-assertive',  //Optional
                inputDate: new Date(),  //Optional
                mondayFirst: true,  //Optional
                templateType: 'popup', //Optional
                showTodayButton: 'true', //Optional
                modalHeaderColor: 'bar-positive', //Optional
                modalFooterColor: 'bar-positive', //Optional
                from: new Date(2016, 1, 1), //Optional
                to: new Date(2030, 8, 25),  //Optional
                callback: function (val) {  //Mandatory
                    dateExpireCallback(val);
                },
                dateFormat: 'dd-MM-yyyy', //Optional
                closeOnSelect: false, //Optional
            };

        }

        function dateExpireCallback(val){
            vm.medicine.uploadDate=vm.dateExpire.inputDate.toString();
            vm.medicine.dateExpire=val;
        }

    }
})();
