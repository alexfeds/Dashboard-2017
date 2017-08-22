'use strict';

describe('Controller: ExpensesreportctrlCtrl', function () {

  // load the controller's module
  beforeEach(module('dashboard2017App'));

  var ExpensesreportctrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ExpensesreportctrlCtrl = $controller('ExpensesreportctrlCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ExpensesreportctrlCtrl.awesomeThings.length).toBe(3);
  });
});
