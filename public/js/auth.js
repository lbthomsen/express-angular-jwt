/*
 * site.js
 */

(function () {

    var auth = angular.module('auth', []);

    auth.factory("AuthService",
        function ($log, $rootScope, $http) {

            $log.debug("AuthService Loading");

            var me = {
                isAuthenticated: false
            };

            return me;
        }
    );

})();

/*
 * vim: ts=4 et nowrap autoindent
 */