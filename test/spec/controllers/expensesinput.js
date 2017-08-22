'use strict';

describe('Controller: ExpensesinputctrlCtrl', function () {

  // load the controller's module
  beforeEach(module('dashboard2017App'));

  var ExpensesinputctrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ExpensesinputctrlCtrl = $controller('ExpensesinputctrlCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ExpensesinputctrlCtrl.awesomeThings.length).toBe(3);
  });
});
