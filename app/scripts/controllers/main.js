'use strict';

/**
 * @ngdoc function
 * @name demoappApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the demoappApp
 */
angular.module('demoappApp')
  .controller('MainCtrl',['$scope', function ($scope) {
    $scope.formData = {};   // JavaScript needs an object to put our form's models into.

    $scope.formTemplate = [
        {
            "type": "text",
            "label": "First Name",
            "model": "name.first"
        },
        {
            "type": "text",
            "label": "Last Name",
            "model": "name.last"
        },
        {
            "type": "email",
            "label": "Email Address",
            "model": "email"
        },
        {
            "type": "submit",
            "model": "submit",
            "label" : "Save & Move"
        },
    ];

    $scope.processForm = function () {
        /* Handle the form submission... */
    };
  }]);
