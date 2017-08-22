'use strict';

describe('Controller: GallerycontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('dashboard2017App'));

  var GallerycontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GallerycontrollerCtrl = $controller('GallerycontrollerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(GallerycontrollerCtrl.awesomeThings.length).toBe(3);
  });
});
