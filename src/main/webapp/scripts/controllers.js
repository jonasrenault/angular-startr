'use strict';

/* Controllers */

startrApp.controller('MainController', ['$scope',
    function ($scope) {
    }]);

startrApp.controller('AdminController', ['$scope',
    function ($scope) {
    }]);

startrApp.controller('LanguageController', ['$scope', '$translate',
    function ($scope, $translate) {
        $scope.changeLanguage = function (languageKey) {
            $translate.use(languageKey);
        };
    }]);

startrApp.controller('MenuController', ['$scope',
    function ($scope) {
    }]);

