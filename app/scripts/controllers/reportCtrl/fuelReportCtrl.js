'use strict';

/**
 * @ngdoc function
 * @name dashboard2017App.controller:CarservicedetailsctrlCtrl
 * @description
 * # CarservicedetailsctrlCtrl
 * Controller of the dashboard2017App
 */
angular.module('dashboard2017App')
  .controller('CarfuelreportctrlCtrl', function($scope, $rootScope, $state, $http,
    $log, $stateParams, $localStorage,
    $sessionStorage, $firebaseObject, getDatafromDBservice, $mdDialog) {


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


    getDatafromDBservice.getTotalFuelsSpend(function(data) {

      var total = 0;

      for (var i = 0; i < data.length; i++) {

        total += parseInt(data[i]);
        $scope.totalPrice = total;

      }

    });



    getDatafromDBservice.getLastMonthFuelsSpend(function(dataMonths) {

      var totalPriceMonth = 0;

      for (var p = 0; p < dataMonths.length; p++) {

        totalPriceMonth += parseInt(dataMonths[p]);
        $scope.totalPriceMonth = totalPriceMonth;

      }

    });

   


    var refFuel = firebase.database().ref("fuel/" + $scope.UserID);
    var syncObject = $firebaseObject(refFuel);
    syncObject.$bindTo($scope, 'reportFuelData');





       var dataObjFuel = [];  
      refFuel.once("value").then(function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
          dataObjFuel.push(childSnapshot.val());
          

        });


      });

  



  $scope.options = {
      data: dataObjFuel,
      dimensions: {
        priceLitre: {
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
