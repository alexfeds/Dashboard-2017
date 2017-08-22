'use strict';

describe('Controller: CarfuelinputctrlCtrl', function () {

  // load the controller's module
  beforeEach(module('dashboard2017App'));

  var CarfuelinputctrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CarfuelinputctrlCtrl = $controller('CarfuelinputctrlCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CarfuelinputctrlCtrl.awesomeThings.length).toBe(3);
  });
});
