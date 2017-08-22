'use strict';

/**
 * @ngdoc service
 * @name dashboard2017App.CarsModelsDataService
 * @description
 * # CarsModelsDataService
 * Service in the dashboard2017App.
 */
angular.module('dashboard2017App')
  .service('getDatafromDBservice', function() {


    var user = firebase.auth().currentUser;
    var currentUser;

    if (user != null) {

      currentUser = user.uid;
    }





    var refCarModels = firebase.database().ref("fuel/" + currentUser);
    console.log(refCarModels);

    this.getTotalFuelsSpend = function(callback) {

      var dataObj = [];
      var amounts = []
      console.log(amounts)

      refCarModels.once("value").then(function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
          dataObj.push(childSnapshot.val())

        });

        for (var i = 0; i < dataObj.length; i++) {
          amounts.push(dataObj[i].priceTotal);
          callback(amounts)
        }


      });

    };


    var dateCurrent = new Date();
    var currentMonth = dateCurrent.getMonth() + 1;


    this.getLastMonthFuelsSpend = function(callbackM) {


      var dataObjMonths = [];
      var amountsMonths = [];

      refCarModels.once("value").then(function(snapshot) {
        snapshot.forEach(function(childSnapshot) {

          var fuelData = childSnapshot.val();
          var dbFuelDataMonth = fuelData.date;
          var check1 = moment(dbFuelDataMonth, 'MM/DD/YYYY');
          var dbCurrentMonth = check1.format('M');

          if (dbCurrentMonth == currentMonth) {
            dataObjMonths.push(fuelData);
          }


        });

        for (var i = 0; i < dataObjMonths.length; i++) {
          amountsMonths.push(dataObjMonths[i].priceTotal);
          callbackM(amountsMonths);
        }


      });


    };







    var refServices = firebase.database().ref("services/" + currentUser);
    console.log(refServices);



    this.getTotalServiceSpend = function(callback) {

      var dataObjService = [];
      var amountsService = [];
      console.log(amountsService)

      refServices.once("value").then(function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
          dataObjService.push(childSnapshot.val())

        });

        for (var i = 0; i < dataObjService.length; i++) {
          amountsService.push(dataObjService[i].price);
          callback(amountsService)
        }


      });

    };



    this.getLastMonthServiceSpend = function(callbackSS) {


      var dataObjMonthsService = [];
      var amountsMonthsService = [];

      refServices.once("value").then(function(snapshot) {
        snapshot.forEach(function(childSnapshot) {

          var serviceData = childSnapshot.val();
          console.log(serviceData)
          var dbServcieDataMonth = serviceData.date;
          var check5 = moment(dbServcieDataMonth, 'MM/DD/YYYY');
          var dbCurrentMonth = check5.format('M');

          if (dbCurrentMonth == currentMonth) {
            dataObjMonthsService.push(serviceData);
          }


        });

        for (var i = 0; i < dataObjMonthsService.length; i++) {
          amountsMonthsService.push(dataObjMonthsService[i].price);
          callbackSS(amountsMonthsService);
        }


      });

      console.log(dataObjMonthsService)
    };









    var refExpenses = firebase.database().ref("expenses/" + currentUser);
    console.log(refServices);

    this.getTotalExpensesSpend = function(callback) {

      var dataObjExpenses = [];
      var amountsExpenses = [];
      console.log(amountsExpenses);

      refExpenses.once("value").then(function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
          dataObjExpenses.push(childSnapshot.val());

        });

        for (var i = 0; i < dataObjExpenses.length; i++) {
          amountsExpenses.push(dataObjExpenses[i].cost);
          callback(amountsExpenses);
        }


      });

    };


    this.getLastMonthExpensesSpend = function(callbackE) {


      var dataObjMonthsExp = [];
      var amountsMonthsExp = [];

      refExpenses.once("value").then(function(snapshot) {
        snapshot.forEach(function(childSnapshot) {

          var expensesData = childSnapshot.val();
          var dbExpenesDataMonth = expensesData.date;
          var check2 = moment(dbExpenesDataMonth, 'MM/DD/YYYY');
          var dbCurrentMonth = check2.format('M');

          if (dbCurrentMonth == currentMonth) {
            dataObjMonthsExp.push(expensesData);
          }


        });

        for (var i = 0; i < dataObjMonthsExp.length; i++) {
          amountsMonthsExp.push(dataObjMonthsExp[i].cost);
          callbackE(amountsMonthsExp);
        }


      });


    };





    // AngularJS will instantiate a singleton by calling "new" on this function
  });
