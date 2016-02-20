/**
 * @ngdoc controller
 * @name dtm.authenticate.controllers.InitController
 * @description Init app slides and login or sign up
 */

(function () {
    'use strict';

    angular
        .module('dtm.authenticate.controllers')
        .controller('InitController', InitController);

    InitController.$inject = ['$state', 'Authenticate'];

    function InitController($state, Authenticate) {

        var vm = this;
        console.log('InitController');

        angular.extend(vm, {
            isAuthenticate: 'siiii',
            formLogin: true,
            formRegister: false,
            login: login,
            register: register
        });


        function login(){
            Authenticate.login(vm.user).then(function(){
                $state.go('tab.dash');
            }, function(err){
                console.log(err);
            })
        }

        function register(){
            Authenticate.register(vm.user).then(function(){
                $state.go('tab.dash');
            }, function(err){
                console.log(err);
            })
        }

    }
})();
