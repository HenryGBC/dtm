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

    InitController.$inject = ['$state'];

    function InitController($state) {

        var vm = this;
        console.log('InitController');

    }
})();
