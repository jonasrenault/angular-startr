'use strict';

/**
 * @ngdoc function
 * @name startrApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the startrApp
 */
angular.module('startrApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
