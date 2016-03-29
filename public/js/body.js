/*
 * body.js
 */

(function () {

    var body = angular.module('body', []);

    body.controller("BodyController", ['$log', '$scope', 
        function ($log, $scope) {

            $log.debug("BodyController Starting");
            
            $scope.hello = "Hello World";

        }
    ]);

})();

/*
 * vim: ts=4 et nowrap autoindent
 */