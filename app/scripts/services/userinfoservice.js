'use strict';

/**
 * @ngdoc service
 * @name dashboard2017App.userInfoService
 * @description
 * # userInfoService
 * Service in the dashboard2017App.
 */
 angular.module('dashboard2017App')
 .service('userInfoService', function () {
  
   

  this.getUserInfo = function(){



    var MainFuncUser = function() {

      var getUserProperties = function () {
        var user = firebase.auth().currentUser;

        var naming = {};

        if (user != null) {
          user.providerData.forEach(function (profile) {


           naming = profile.email.slice(0, 8);


           // console.log("the result is" + profile.email);

           // console.log("Sign-in provider: "+profile.providerId);
           // console.log("  Provider-specific UID: "+profile.uid);
           // console.log("  Name: "+profile.displayName);
           // console.log("  Email: "+profile.email);
           // console.log("  Photo URL: "+profile.photoURL);
           
           naming = profile;

         });
        }
        return naming;

      }




      return getUserProperties();
    };
    return MainFuncUser();
  }

});
