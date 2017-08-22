'use strict';

/**
 * @ngdoc function
 * @name dashboard2017App.controller:CarservicedetailsctrlCtrl
 * @description
 * # CarservicedetailsctrlCtrl
 * Controller of the dashboard2017App
 */
angular.module('dashboard2017App')
  .controller('CarservicedetailsctrlCtrl', function($scope, $rootScope, $state, $http,
    $log, $stateParams, $localStorage,
    $sessionStorage, $firebaseObject, filepickerService, getDatafromDBservice, $mdDialog) {


    // connect to firebase 
    'use strict';


    $scope.data = {
      boldTextTitle: "Done",
      textAlert: "Some content"
    };


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



    getDatafromDBservice.getTotalServiceSpend(function(data) {

      console.log("Total service spent :" + data)

      var total = 0;

      for (var i = 0; i < data.length; i++) {

        total += parseInt(data[i]);
        $scope.totalService = total;

        console.log($scope.totalService)

      }

    });





    getDatafromDBservice.getLastMonthServiceSpend(function(dataMonths) {
      console.log(dataMonths)

      var totalServiceMonth = 0;

      for (var p = 0; p < dataMonths.length; p++) {

        totalServiceMonth += parseInt(dataMonths[p]);
        $scope.totalMonths = totalServiceMonth;

      }

    });




    var ref = firebase.database().ref("services/" + $scope.UserID);
    var syncObject = $firebaseObject(ref);
    syncObject.$bindTo($scope, 'reportData');



    $scope.updateServiceRow = function() {
      var user = firebase.auth().currentUser;

      user.updateProfile({
        displayName: $scope.FistName.name,
        photoURL: "https://example.com/jane-q-user/profile.jpg"
      }).then(function(success) {

        alert("Updated successfully");
        $window.location.reload()
        // Update successful.
      }, function(error) {
        // An error happened.
      })

    }



    var dataObjService = [];
    ref.once("value").then(function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        dataObjService.push(childSnapshot.val());


      });


    });





    $scope.options = {
      data: dataObjService,
      dimensions: {
        price: {
          type: 'line'
        },
        date: {
          axis: 'x'
        }
      }
    };

    // optional (direct access to c3js API http://c3js.org/reference.html#api)
    $scope.instance = null;


  });
