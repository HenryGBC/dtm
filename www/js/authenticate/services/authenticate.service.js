(function () {
    'use strict';

    angular
        .module('dtm.authenticate.services')
        .factory('Authenticate', Authenticate);

    Authenticate.$inject = ['FURL', '$firebaseAuth', '$state', '$firebaseObject', 'Profile'];

    function Authenticate(FURL, $firebaseAuth, $state, $firebaseObject, Profile) {
        var ref = new Firebase(FURL);
        var auth = $firebaseAuth(ref);

        var Auth = {
            register:register,
            login:login,
            isAuthenticate:isAuthenticate,
            user:{}
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
                   Auth.user = authData;
                   console.log(Profile.getProfiles());
                   var profile = $firebaseObject(ref.child('profile').child(authData.uid));
                   console.log('the user has already loggerd in');
                   profile.$loaded().then(function() {
                       console.log(profile); // "bar"
                   });
                   $state.go('tab.dash')
               }else{
                   $state.go('init')
               }
            });
        }





    }
})();
