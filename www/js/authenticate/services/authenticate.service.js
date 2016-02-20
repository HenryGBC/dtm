(function () {
    'use strict';

    angular
        .module('dtm.authenticate.services')
        .factory('Authenticate', Authenticate);

    Authenticate.$inject = ['FURL', '$firebaseAuth', '$state', '$firebaseObject', 'Profile'];

    function Authenticate(FURL, $firebaseAuth, $state, $firebaseObject, Profile) {
        var ref = new Firebase(FURL);
        var auth = $firebaseAuth(ref);
        var user = {};
        var Auth = {
            register:register,
            login:login,
            isAuthenticate:isAuthenticate,
            getUser:getUser,
            logout:logout
        }

        return Auth;


        function login(user){
            return auth.$authWithPassword({
                email:user.email,
                password:user.password,
                user:{}
            })
        }
        function register(user){
            console.log(user);
            return auth.$createUser({
                email:user.email,
                password:user.password
            }).then(function(){
                console.log('user is savin');
                return Auth.login(user);
            }).then(function(data){
                console.log('user is ', data);
                return Profile.createProfile(data.uid, user);
            })
        }


        function isAuthenticate(){
            auth.$onAuth(function(authData){
                console.log(authData);
               if(authData){
                   user = authData;
                   user.profile = Profile.getProfile(authData.uid);
                   $state.go('tab.dash')
               }else{
                   $state.go('init')
               }
            });
        }

        function logout(){
            auth.$unauth();
            $state.go('init')
        }

        function getUser(){
            return user;
        }





    }
})();
