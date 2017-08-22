'use strict';

describe('Controller: RegistercarmodelcontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('dashboard2017App'));

  var RegistercarmodelcontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RegistercarmodelcontrollerCtrl = $controller('RegistercarmodelcontrollerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(RegistercarmodelcontrollerCtrl.awesomeThings.length).toBe(3);
  });
});
