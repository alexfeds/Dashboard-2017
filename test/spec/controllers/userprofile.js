'use strict';

describe('Controller: UserprofilectrlCtrl', function () {

  // load the controller's module
  beforeEach(module('dashboard2017App'));

  var UserprofilectrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UserprofilectrlCtrl = $controller('UserprofilectrlCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(UserprofilectrlCtrl.awesomeThings.length).toBe(3);
  });
});
