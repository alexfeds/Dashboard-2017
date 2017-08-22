'use strict';

describe('Controller: CardetailscontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('dashboard2017App'));

  var CardetailscontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CardetailscontrollerCtrl = $controller('CardetailscontrollerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CardetailscontrollerCtrl.awesomeThings.length).toBe(3);
  });
});
