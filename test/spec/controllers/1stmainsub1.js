'use strict';

describe('Controller: 1stmainsub1Ctrl', function () {

  // load the controller's module
  beforeEach(module('demoappApp'));

  var 1stmainsub1Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    1stmainsub1Ctrl = $controller('1stmainsub1Ctrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(1stmainsub1Ctrl.awesomeThings.length).toBe(3);
  });
});
