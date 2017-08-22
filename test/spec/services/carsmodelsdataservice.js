'use strict';

describe('Service: CarsModelsDataService', function () {

  // load the service's module
  beforeEach(module('dashboard2017App'));

  // instantiate service
  var CarsModelsDataService;
  beforeEach(inject(function (_CarsModelsDataService_) {
    CarsModelsDataService = _CarsModelsDataService_;
  }));

  it('should do something', function () {
    expect(!!CarsModelsDataService).toBe(true);
  });

});
