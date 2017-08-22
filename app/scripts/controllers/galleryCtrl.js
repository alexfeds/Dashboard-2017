'use strict';

/**
 * @ngdoc function
 * @description
 * Controller of the dashboard2017App
 */



angular.module('dashboard2017App').
controller('GallerycontrollerCtrl', function($scope, $firebaseObject, getDatafromDBservice, $firebaseArray, $window, $mdDialog, $state) {

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





  var ref = firebase.database().ref("services/" + $scope.UserID);
  $scope.pictures = $firebaseArray(ref);



  var refSS = firebase.database().ref("gallery/" + $scope.UserID);
  $scope.pictures2 = $firebaseArray(refSS);



  var ref2 = firebase.database().ref();



  ////////////File Picker Handler////////////////////////////

  $scope.files = JSON.parse($window.localStorage.getItem('files') || '[]');

  console.log($scope.files)

  var pickFile = function() {
    filepickerService.pick({ mimetype: 'image/*', imageDim: [800, 600] },
      onSuccess
    );
  };
  $scope.picsa = null;

  var onSuccess = function(Blob) {

    $scope.picsa = Blob.url;
    $scope.files.push(Blob);
    $window.localStorage.setItem('files', JSON.stringify($scope.files));
    ref2.child("gallery/" + $scope.UserID).push({
        "picUrl": $scope.picsa

      }, function(error) {
        if (error) {
          alert("erro")

        } else {
          alert("succes")


        }


      }


    );

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





});
