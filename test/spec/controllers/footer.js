'use strict';

describe('Controller: FooterctrlCtrl', function () {

  // load the controller's module
  beforeEach(module('dashboard2017App'));

  var FooterctrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FooterctrlCtrl = $controller('FooterctrlCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(FooterctrlCtrl.awesomeThings.length).toBe(3);
  });
});
