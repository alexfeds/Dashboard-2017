'use strict';

describe('Controller: DashcontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('dashboard2017App'));

  var DashcontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DashcontrollerCtrl = $controller('DashcontrollerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(DashcontrollerCtrl.awesomeThings.length).toBe(3);
  });
});
