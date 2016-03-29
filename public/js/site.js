/*
 * site.js
 */

(function () {

    var site = angular.module('site', []);

    site.factory("SiteService",
        function ($log, $rootScope, $http) {

            $log.debug("SiteService Loading");

            var me = {
                settings: {},
                load: $http({
                    method: 'GET',
                    url: 'site.json'
                }).then(function successCallback(response) {
                    me.settings = response.data;
                }, function errorCallback(response) {
                    $log.error("Got error: %o" + response);
                })
            };

            return me;
        }
    );

})();

/*
 * vim: ts=4 et nowrap autoindent
 */