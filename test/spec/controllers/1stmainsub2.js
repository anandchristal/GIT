'use strict';

describe('Controller: 1stmainsub2Ctrl', function () {

  // load the controller's module
  beforeEach(module('demoappApp'));

  var 1stmainsub2Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    1stmainsub2Ctrl = $controller('1stmainsub2Ctrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(1stmainsub2Ctrl.awesomeThings.length).toBe(3);
  });
});
