/*global angular: true*/
/**
 * @fileOverview
 * Page-level controller for displaying and editing org information by a HOL admin.
 */

(function () {
    'use strict';
    var common = angular.module('dnb360.common');

    function HOLAuthController(
        $scope,
        $http,
        $location,
        holService,
        errorService,
        authService,
        jStorage,
        config
        ) {

        function getCookie(cname) {
            var name = cname + '=';
            var ca = document.cookie.split(';');
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i].trim();
                if (c.indexOf(name) === 0) {
                    return c.substring(name.length, c.length);
                }
            }
            return '';
        }

        function getQuery(param) {
            var url = location.href;
            var qs = url.substring(url.indexOf('?') + 1).split('&');
            for (var i = 0, result = {}; i < qs.length; i++) {
                qs[i] = qs[i].split('=');
                result[qs[i][0]] = decodeURIComponent(qs[i][1]);
            }
            return result[param];
        }

        var username = getCookie('username');
        var password = getCookie('password');
        var pathSet = getQuery('p');
        var dunsSet = getQuery('d');
        var origSet = getQuery('o');
        document.cookie = 'company=' + pathSet + ';path=/';
        document.cookie = 'duns=' + dunsSet + ';path=/';
        document.cookie = 'origin=' + origSet + ';path=/';

        if ($scope.authenticated) {
            if (pathSet) {
                $location.path('/' + pathSet + '/' + dunsSet);
            } else {
                $location.path('/company/search');
            }
        } else if (username && password) {
            $http({
                url: config.url.CREDENTIAL_HOL,
                method: 'POST',
                headers: {
                    username: username,
                    password: password
                }
            }).then(function (response) {
                var ENTITLEMENTS_KEY = 'entitlements';

                $scope.data = response.data;
                holService.data.brand = username;
                holService.data.pudding = password;
                holService.data.authenticated = true;
                holService.data.authtoken = $scope.data.authtoken;

                var authDetails = {
                    crmHost: 'msduat.hoovers.com',
                    port: 5555,
                    org: 'DNB360LocalDev',
                    authScheme: 'NTLM',
                    platform: 'HOL',
                    authHost: 'null',
                    protocol: 'http',
                    'x-dnb-auth': $scope.data.authtoken
                };
                authService.saveAuthDetails(authDetails);
                var entitlements = {
                    buildAList: true,
                    competitors: true,
                    enableRefresh: true,
                    familyTree: true,
                    financials: true,
                    findSimilar: true,
                    firstResearch: true,
                    linkage: true,
                    newBatch: true,
                    refreshBatch: true,
                    trial: true
                };
                jStorage.set(ENTITLEMENTS_KEY, entitlements);
                if (pathSet) {
                    $location.path('/' + pathSet + '/' + dunsSet);
                } else {
                    $location.path('/company/search');
                }
            });

        } else {

            $scope.authenticateUser = function () {
                $http({
                    url: config.url.CREDENTIAL_HOL,
                    method: 'POST',
                    headers: {
                        username: $scope.brand,
                        password: $scope.pudding
                    }
                }).then(function (response) {
                    var ENTITLEMENTS_KEY = 'entitlements';

                    $scope.data = response.data;
                    holService.data.brand = $scope.brand;
                    holService.data.pudding = $scope.pudding;
                    holService.data.authenticated = true;
                    holService.data.authtoken = $scope.data.authtoken;

                    var authDetails = {
                        crmHost: 'msduat.hoovers.com',
                        port: 5555,
                        org: 'DNB360LocalDev',
                        authScheme: 'NTLM',
                        platform: 'HOL',
                        authHost: 'null',
                        protocol: 'http',
                        'x-dnb-auth': $scope.data.authtoken
                    };
                    authService.saveAuthDetails(authDetails);
                    var entitlements = {
                        buildAList: true,
                        competitors: true,
                        enableRefresh: true,
                        familyTree: true,
                        financials: true,
                        findSimilar: true,
                        firstResearch: true,
                        linkage: true,
                        newBatch: true,
                        refreshBatch: true,
                        trial: true
                    };
                    jStorage.set(ENTITLEMENTS_KEY, entitlements);
                    $location.path('/company/search');
                }, function () {
                    $scope.authenticated = false;
                    $scope.authenticationError = 'Authentication failed';
                });
            };
        }
    }
    common.controller('HOLAuthController', [
        '$scope',
        '$http',
        '$location',
        'holService',
        'errorService',
        'authService',
        'jStorage',
        'config',
        HOLAuthController
    ]);
}());
