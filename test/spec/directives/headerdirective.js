'use strict';

describe('Directive: headerdirective', function () {

  // load the directive's module
  beforeEach(module('dashboard2017App'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<headerdirective></headerdirective>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the headerdirective directive');
  }));
});
