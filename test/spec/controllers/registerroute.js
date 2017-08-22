'use strict';

describe('Controller: RegisterrouteCtrl', function () {

  // load the controller's module
  beforeEach(module('dashboard2017App'));

  var RegisterrouteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RegisterrouteCtrl = $controller('RegisterrouteCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(RegisterrouteCtrl.awesomeThings.length).toBe(3);
  });
});
