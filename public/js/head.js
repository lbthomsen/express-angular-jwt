/*
 * body.js
 */

(function () {

    var head = angular.module('head', []);

    head.controller("HeadController", ['$log', '$scope', 'SiteService', 
        function ($log, $scope, siteService) {

            $log.debug("HeadController Starting");
            
            $scope.siteService = siteService;
            
            $log.debug("Settings are: %o", $scope.siteService);

        }
    ]);

})();

/*
 * vim: ts=4 et nowrap autoindent
 */