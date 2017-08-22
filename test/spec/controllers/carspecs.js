'use strict';

describe('Controller: CarspecsctrlCtrl', function () {

  // load the controller's module
  beforeEach(module('dashboard2017App'));

  var CarspecsctrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CarspecsctrlCtrl = $controller('CarspecsctrlCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CarspecsctrlCtrl.awesomeThings.length).toBe(3);
  });
});
