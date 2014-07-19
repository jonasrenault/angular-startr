'use strict';

/**
 * @ngdoc function
 * @name startrApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the startrApp
 */
angular.module('startrApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
