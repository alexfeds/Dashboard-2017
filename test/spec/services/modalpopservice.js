'use strict';

describe('Service: modalPopService', function () {

  // load the service's module
  beforeEach(module('dashboard2017App'));

  // instantiate service
  var modalPopService;
  beforeEach(inject(function (_modalPopService_) {
    modalPopService = _modalPopService_;
  }));

  it('should do something', function () {
    expect(!!modalPopService).toBe(true);
  });

});
