'use strict';

/**
 * @ngdoc function
 * @name dashboard2017App.controller:MycarctrlCtrl
 * @description
 * # MycarctrlCtrl
 * Controller of the dashboard2017App
 */
angular.module('dashboard2017App')
  .controller('myCarCtrl', function($scope, $firebaseObject, filepickerService, $rootScope, $timeout, $mdDialog, $state) {




    var user = firebase.auth().currentUser;

    if (user != null) {

      $scope.UserID = user.uid;
    }



    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {

      } else {
        $mdDialog.show(
          $mdDialog.alert()
          .parent(angular.element(document.querySelector('#popupContainer')))
          .clickOutsideToClose(true)
          .title('please login/register first')
          .ok('Ok')
          .targetEvent()

        );
        $state.go('login');

      }
    });




    var UserID = firebase.auth().currentUser.uid;
    var refModels = firebase.database().ref("/users/" + UserID);



    var carUserDetails = [];
    refModels.once('value').then(function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        var usersValue = childSnapshot.val();

        carUserDetails.push(
          usersValue.carMake,
          usersValue.carYear,
          usersValue.carModel,
          usersValue.carTrim);

      });


    });



    $scope.content = null;

    $scope.showUsersCarData = function() {


      var base_url = "https://www.carqueryapi.com/api/0.3/";

      var carYear = carUserDetails[1];
      var carModel = carUserDetails[2];
      var carTrim = carUserDetails[3];
      var carMake = carUserDetails[0];
      console.log(carModel)

      $.getJSON(base_url + "?callback=?", { cmd: "getTrims", year: carYear, make: carMake, model: carModel, trim: carTrim }).then(function successCallback(response) {

        $scope.trims = response.Trims[0];
        console.log($scope.trims)


      }, function errorCallback(response) {
        console.log("failed" + response);


      });




      // $scope.showUsersCarData(function (data) {  console.log(data); return data;  } )


    }
    $timeout(function() {
      $scope.showUsersCarData();
    }, 100);


  });
