'use strict';

/**
 * @ngdoc function
 * @name dashboard2017App.controller:RegisterCtrl
 * @description
 * # RegisterCtrl
 * Controller of the dashboard2017App
 */
angular.module('dashboard2017App')
  .controller('RegisterCtrl', ['$scope', '$firebaseAuth', '$http', '$state', '$log', '$rootScope', '$mdDialog', 'userInfoService', '$firebaseObject',
    function($scope, $firebaseAuth, $http, $state, $log, $rootScope, $mdDialog, userInfoService, $firebaseObject) {




      /*Calling ModelsDataServerice to get data for car models and assigning it to scope carData of the Registration Add on information for Car models*/

      //Diplaying a list of choices of cars models from the DB in the registration


      $scope.models = '';

      console.log($scope.models);



      /*Calling ModelsDataServerice to get data for car models and assigning it    -END -         to scope carData of the Registration Add on information for Car models*/


      $scope.data = {
        boldTextTitle: "Done",
        textAlert: "Some content"
      };




      $rootScope.carquery = new CarQuery();

      //Run the carquery init function to get things started:
      $rootScope.carquery.init();

      //Optionally, you can pre-select a vehicle by passing year / make / model / trim to the init function:
      //carquery.init('2000', 'dodge', 'Viper', 11636);

      //Optional: Pass sold_in_us:true to the setFilters method to show only US models. 
      $rootScope.carquery.setFilters({ sold_in_us: true });

      //Optional: initialize the year, make, model, and trim drop downs by providing their element IDs
      $rootScope.carquery.initYearMakeModelTrim('car-years', 'car-makes', 'car-models', 'car-model-trims');





      //Optional: set the onclick event for a button to show car data.
      $('#cq-show-data').click(function() { $rootScope.carquery.populateCarData('car-model-data'); });

      //Optional: initialize the make, model, trim lists by providing their element IDs.
      $rootScope.carquery.initMakeModelTrimList('make-list', 'model-list', 'trim-list', 'trim-data-list');

      //Optional: set minimum and/or maximum year options.
      $rootScope.carquery.year_select_min = 1990;
      $rootScope.carquery.year_select_max = 2017;




      ///////REGISTER////////////////////////

      $scope.Register = function(e) {
        e.preventDefault();




        $scope.car_years = document.getElementById('car-years').value;

        $scope.car_makes = document.getElementById('car-makes').value;

        $scope.car_models = document.getElementById('car-models').value;

        $scope.car_model_trims = document.getElementById('car-model-trims').value;

        var email = $scope.user.email;
        var password = $scope.user.password;


        $scope.authObj.$createUserWithEmailAndPassword(email, password)
          .then(function() {

            $scope.UserID = firebase.auth().currentUser.uid;
            $scope.UserEmail = firebase.auth().currentUser.email;
            console.log("the email is" + $scope.UserEmail);



            $mdDialog.show(
              $mdDialog.alert()
              .parent(angular.element(document.querySelector('#popupContainer')))
              .clickOutsideToClose(true)
              .title('Succesfully Registered')
              .ok('Ok')
              .targetEvent()

            );


            $state.go('carRecord');


            var ref2 = firebase.database().ref();


            ref2.child("users/" + $scope.UserID).push({
              "carYear": $scope.car_years,
              "carMake": $scope.car_makes,
              "carModel": $scope.car_models,
              "carTrim": $scope.car_model_trims,
              "email": $scope.UserEmail

            }, function(error) {

              var errorCode = error.code;
              var errorMessage = error.message;


              if (errorCode === 'auth/weak-password') {

                $mdDialog.show(
                  $mdDialog.alert()
                  .parent(angular.element(document.querySelector('#popupContainer')))
                  .clickOutsideToClose(true)
                  .title(errorMessage)
                  .ok('Ok')
                  .targetEvent(error)
                );

              }



            });

          });
      };


      $scope.name = '';
      $scope.message = false;


      var ref = firebase.database().ref();
      $scope.authObj = $firebaseAuth();


      $scope.$root.loggedinshow = false;
      $scope.$root.loggeinhide = true;




      $scope.getUserInfoME = function() {

        return $scope.person = userInfoService.getUserInfo().email;

        console.log("SO the result is s" + $scope.person);

      };


      //////////////////STATE CHANGE//////////

      $scope.authObj.$onAuthStateChanged(function(firebaseUser) {

        if (firebaseUser) {
          console.log("Signed in as:", firebaseUser.uid);

          console.log($scope.getUserInfoME());
          console.log("I AM SIGNED IN!!!!!");
          $scope.$root.loggedinshow = true;
          $scope.$root.loggeinhide = false;
        } else {
          console.log("Signed out");
          $scope.$root.loggedinshow = false;
          $scope.$root.loggeinhide = true;


        }
      });



      ///////SIGNOUT////////////////////

      $scope.SignOut = function() {
        $scope.authObj.$signOut();
      };



    }
  ]);
