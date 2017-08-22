'use strict';

describe('Controller: MycarctrlCtrl', function () {

  // load the controller's module
  beforeEach(module('dashboard2017App'));

  var MycarctrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MycarctrlCtrl = $controller('MycarctrlCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MycarctrlCtrl.awesomeThings.length).toBe(3);
  });
});
