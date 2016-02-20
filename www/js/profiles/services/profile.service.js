(function () {
    'use strict';

    angular
        .module('dtm.profiles.services')
        .factory('Profile', Profile);

    Profile.$inject = ['FURL', '$firebaseAuth', '$state', '$firebaseObject', '$firebaseArray'];

    function Profile(FURL, $firebaseAuth, $state, $firebaseObject, $firebaseArray) {
        var ref = new Firebase(FURL);
        var profiles = $firebaseArray(ref.child('profiles'));

        var service = {
            createProfile:createProfile,
            getProfiles:getProfiles,
            getProfile:getProfile
        }

        return service;
        //$save Edit
        function createProfile(uid, user){
            var profile = {
                name: {value:user.name, public: true},
                lastname: {value:'', public: false},
                email: {value:user.email, public: false},
                twitter: {value:'', public: false},
                facebook: {value:'', public: false},
                telf: {value:'', public: false}

            }
             return ref.child('profiles').child(uid).set(profile);
        }

        function getProfiles(){
            return profiles;
        }

        function getProfile(uid){
            return $firebaseObject(ref.child('profiles').child(uid));
        }


    }
})();
