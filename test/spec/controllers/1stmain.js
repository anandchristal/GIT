'use strict';

describe('Controller: 1stmainCtrl', function () {

  // load the controller's module
  beforeEach(module('demoappApp'));

  var 1stmainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    1stmainCtrl = $controller('1stmainCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(1stmainCtrl.awesomeThings.length).toBe(3);
  });
});
