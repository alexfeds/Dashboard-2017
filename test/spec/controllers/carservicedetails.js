'use strict';

describe('Controller: CarservicedetailsctrlCtrl', function () {

  // load the controller's module
  beforeEach(module('dashboard2017App'));

  var CarservicedetailsctrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CarservicedetailsctrlCtrl = $controller('CarservicedetailsctrlCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CarservicedetailsctrlCtrl.awesomeThings.length).toBe(3);
  });
});
