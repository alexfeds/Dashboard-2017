'use strict';

/**
 * @ngdoc overview
 * @name dashboard2017App
 * @description
 * # dashboard2017App
 *
 * Main module of the application.
 */
angular
  .module('dashboard2017App', [
    'ngAnimate',
    'ngResource',
    'ui.router',
    'ngSanitize',
    'ngTouch',
    'firebase',
    'xeditable',
    'uiRouterStyles',
    'ngStorage',
    'angular-toArrayFilter',
    'ui.bootstrap',
    'ngMaterial',
    'smart-table',
    'angular-filepicker',
    'angularChart',
    'sticky'

  ])


  .run(function() {

  })




  .factory('ergastAPIservice', function($http, $sce) {

    var url = 'http://api.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=1';
    $sce.trustAsResourceUrl(url);



    var ergastAPI = {};
    ergastAPI.getDrivers = function(id) {

      var nameOftag = id;

      var params = {
        tags: nameOftag
      };

      console.log(params);
      return $http.get(url, { params: params });
    }


    return ergastAPI;

  })





  .config(function($stateProvider, $urlRouterProvider, $sceDelegateProvider, filepickerProvider) {

    $sceDelegateProvider.resourceUrlWhitelist([
      // Allow same origin resource loads.
      'self',
      // Allow loading from our assets domain. **.
      'http://api.flickr.com/**'
    ])


    filepickerProvider.setKey('AV79HNQDHT2WPN4X2RbdQz');



    $urlRouterProvider.otherwise('/main');
    $stateProvider

      .state('main', {

        url: "/main",
        templateUrl: 'views/main.html',
      })

      .state("gallery", {
        url: "/gallery",
        templateUrl: 'views/gallery.html',
        controller: 'GallerycontrollerCtrl as ctrl'
      })

      .state("register", {
        url: "/register",
        templateUrl: 'views/register.html',
        controller: 'RegisterCtrl as ctrl',
      })

      .state("login", {
        url: "/login",
        templateUrl: 'views/login.html',
        controller: 'LogincontrollerCtrl as ctrl',
      })


      .state("carprofile", {
        url: "/carprofile",
        templateUrl: 'views/profiles/carProfile.html',
        controller: 'myCarCtrl as ctrl'
      })

      .state("carRecord", {
        url: "/recordchoices",
        templateUrl: 'views/recordChoices.html'
      })

      .state("fuelReport", {
        url: "/fuelreport",
        templateUrl: 'views/reports/fuelReport.html',
        controller: 'CarfuelreportctrlCtrl as ctrl'
      })

      .state("carReports", {
        url: "/carreports",
        templateUrl: 'views/reports/carReports.html'
      })



      .state("serviceInput", {
        url: "/serviceinput",
        templateUrl: 'views/inputs/serviceInput.html',
        controller: 'serviceInputcontroller as ctrl'
      })



      .state("expensesInput", {
        url: "/expensesinput",
        templateUrl: 'views/inputs/expensesInput.html',
        controller: 'ExpensesinputctrlCtrl as ctrl'
      })

      .state("carSpecs", {
        url: "/carspecs",
        templateUrl: 'views/carSpecs.html',
        controller: 'CarspecsctrlCtrl as ctrl'
      })



      .state("expensesReport", {
        url: "/expensesreport",
        templateUrl: 'views/reports/expensesReport.html',
        controller: 'ExpensesreportctrlCtrl as ctrl'
      })


      .state("fuelInput", {
        url: "/fuelinput",
        templateUrl: 'views/inputs/fuelInput.html',
        controller: 'CarfuelinputctrlCtrl as ctrl'
      })



      .state("serviceReport", {
        url: "/servicereport/",
        templateUrl: 'views/reports/serviceReport.html',
        controller: 'CarservicedetailsctrlCtrl as ctrl',
        params: {
          code: null
        }
      })



      .state("userProfile", {
        url: "/userprofile",
        templateUrl: 'views/profiles/userProfile.html',
        controller: 'UserprofilectrlCtrl as ctrl',
        params: { reload: true }
      });


  });
