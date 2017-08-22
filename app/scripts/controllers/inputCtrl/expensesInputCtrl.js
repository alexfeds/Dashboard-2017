/**
 * @ngdoc function
 * @name dashboard2017App.controller:CarfuelinputctrlCtrl
 * @description
 * # CarfuelinputctrlCtrl
 * Controller of the dashboard2017App
 */
angular.module('dashboard2017App')
  .controller('ExpensesinputctrlCtrl', function($scope, $rootScope, $mdDialog, $log, $uibModal, $state) {


    // connect to firebase 
    'use strict';


    $scope.inputExpensesDate = new Date();


    $scope.data = {
      boldTextTitle: "Done",
      textAlert: "Some content"
    };



    var user = firebase.auth().currentUser;

    if (user != null) {

      $scope.UserID = user.uid;
      $scope.currentUserEmail = user.email;
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





    var ref = firebase.database().ref();

    $scope.saveExpensesData = function(inputExpensesDate, inputExpensesType, inputExpensesCost) {

      ref.child("expenses/" + $scope.UserID).push({
          "date": moment(inputExpensesDate).format('L'),
          "type": inputExpensesType,
          "cost": inputExpensesCost

        },

        function(error) {
          if (error) {

            $mdDialog.show(
              $mdDialog.alert()
              .parent(angular.element(document.querySelector('#popupContainer')))
              .clickOutsideToClose(true)
              .title('error record have not been updated')
              .ok('Ok')
              .targetEvent()

            );

          } else {

            $mdDialog.show(
              $mdDialog.alert()
              .parent(angular.element(document.querySelector('#popupContainer')))
              .clickOutsideToClose(true)
              .title('record have been updated, you will get confirmation to ' + $scope.currentUserEmail)
              .ok('Ok')
              .targetEvent()


            );

            emailjs.send("sendgrid", "services_added_thank_you_template", {
              "to_email": $scope.currentUserEmail,
              "reply_to": "alexfeds@gmail.com",
              "from_name": "CAR SERVICE LOGGER & REMNDER",
              "message_html": "We have logged your expenses: <br/>" + inputExpensesType + " on " + moment(inputExpensesDate).format('L') + " total of " + inputExpensesCost + " euro" + " have been recorded."
            })
            $state.go('expensesReport');
          }
        });
    };
  });
