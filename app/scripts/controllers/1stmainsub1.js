'use strict';

/**
 * @ngdoc function
 * @name demoappApp.controller:1stmainsub1Ctrl
 * @description
 * # 1stmainsub1Ctrl
 * Controller of the demoappApp
 */
angular.module('demoappApp')
  .controller('1stmainsub1Ctrl',['$scope',function ($scope) {
    $scope.abc = "";
    $scope.ab2 = function (){
      return $scope.abc;
    };
    $scope.abc2 = function(){
    	console.log($scope.abc);
    }
  }]);
