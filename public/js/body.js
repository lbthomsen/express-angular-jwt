/*
 * body.js
 */

(function () {

    var body = angular.module('body', []);

    body.controller("BodyController", ['$log', '$scope', 'SiteService', 'AuthService', 
        function ($log, $scope, siteService, authService) {

            $log.debug("BodyController Starting");
            
            $scope.siteService = siteService;
            $scope.authService = authService;
            
        }
    ]);

})();

/*
 * vim: ts=4 et nowrap autoindent
 */