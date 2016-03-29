/*
 * body.js
 */

(function () {

    var body = angular.module('body', []);

    body.controller("BodyController", ['$log', '$scope', 'SiteService', 
        function ($log, $scope, siteService) {

            $log.debug("BodyController Starting");
            
            $scope.siteService = siteService;
            
        }
    ]);

})();

/*
 * vim: ts=4 et nowrap autoindent
 */