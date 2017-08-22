/**
 * @ngdoc function
 * @name dashboard2017App.controller:CardetailscontrollerCtrl
 * @description
 * # CardetailscontrollerCtrl
 * Controller of the dashboard2017App
 */
angular.module('dashboard2017App')
  .controller('serviceInputcontroller', function($scope, $rootScope, $mdDialog, $log, $uibModal, $state, $window, filepickerService, $interval) {


    // connect to firebase 
    'use strict';

    $scope.inputServiceDate = new Date();

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



    ////////////File Picker Handler////////////////////////////

    $scope.files = JSON.parse($window.localStorage.getItem('files') || '[]');

    console.log($scope.files)

    var pickFile = function() {
      filepickerService.pick({ mimetype: 'image/*' },
        onSuccess
      );
    };
    $scope.picsa = null;

    var onSuccess = function(Blob) {
      $scope.picsa = Blob.url;
      $scope.files.push(Blob);
      $window.localStorage.setItem('files', JSON.stringify($scope.files));
    };


    $scope.pickFile = pickFile;
    console.log(pickFile)

    $scope.onSuccess = onSuccess;


    var thePic = $scope.files;

    for (var pic in thePic) {

      $scope.pictureUrl = thePic[pic].url;

      console.log($scope.pictureUrl);
    }




    ////////////File Picker Handler////////////////////////////   


    var ref = firebase.database().ref();

    $scope.saveServiceData = function(inputServiceType, inputServiceDate, inputServiceMillage, inputServicePrice) {



      ref.child("services/" + $scope.UserID).push({
          "serviceType": inputServiceType,
          "date": moment(inputServiceDate).format('L'),
          "millage": inputServiceMillage,
          "email": $scope.currentUserEmail,
          "price": inputServicePrice,
          "picUrl": $scope.picsa
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
              "message_html": "Your service: <br/>" + inputServiceType + " " + moment(inputServiceDate).format('L') + " at " + inputServiceMillage + " milles " + " have been recorded.<br/> You will get a reminder on this service in 12 months."
            })


            $state.go('serviceReport');

          }
        });

    };




    var UserID = firebase.auth().currentUser.uid;
    var refSerices = firebase.database().ref("services/");


    $scope.processInputedService = function() {

      refSerices.once('value').then(function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
          var usersValueService = childSnapshot.key;
          console.log(usersValueService);
          childSnapshot.forEach(function(grandSnapshot) {


            var allUsersDataService = grandSnapshot.val();

            console.log(allUsersDataService.date);


            var dateCheck = "07/08/2017";

            if (dateCheck === allUsersDataService.date) {

              console.log("Matched Yea");
              console.log(allUsersDataService.email, allUsersDataService.date, allUsersDataService.millage, allUsersDataService.serviceType)


              emailjs.send("sendgrid", "services_added_thank_you_template", {
                  "to_email": allUsersDataService.email,
                  "reply_to": "alexfeds@gmail.com",
                  "from_name": "Alex",

                  "message_html": "Hi your last service: " + allUsersDataService.serviceType + " was a Year ago at " + allUsersDataService.millage + " milles. Please check/service again, dont forget to use BMW logger again"
                })


                .then(function(response) {
                  console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
                }, function(err) {
                  console.log("FAILED. error=", err);
                });

            } else {


            }

          });

        });


      });



    };


    $interval(function() {
      //   alert("sending email")
      // $scope.processInputedService();
    }, 5000);


    // $scope.processInputedService();






  });
