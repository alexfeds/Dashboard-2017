'use strict';

describe('Controller: CarfuelreportctrlCtrl', function () {

  // load the controller's module
  beforeEach(module('dashboard2017App'));

  var CarfuelreportctrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CarfuelreportctrlCtrl = $controller('CarfuelreportctrlCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CarfuelreportctrlCtrl.awesomeThings.length).toBe(3);
  });
});
