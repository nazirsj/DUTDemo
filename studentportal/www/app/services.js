(function() {
    'use strict';

    angular.module('studentportalApp').factory('studentportalApi', ['$http', '$q', '$ionicLoading', studentportalApi]);

    function studentportalApi($http, $q, $ionicLoading) {

        function getStudents() {

            var deferred = $q.defer();

            $http.get("http://studentportalwebapi.azurewebsites.net/api/students")
                .success(function(data) {
                    console.log("success...");
                    deferred.resolve(data);
                })
                .error(function() {
                    console.log("Failed....");
                    deferred.reject();
                });
            return deferred.promise;
        }

        function getLeagueData() {

            var deferred = $q.defer();

                $ionicLoading.show({
                    template: 'Loading...'
                });

                $http.get("http://elite-schedule.net/api/leaguedata/" + getLeagueId())
                    .success(function(data, status) {
                        console.log("success...");
                        $ionicLoading.hide();
                        deferred.resolve(data);
                    })
                    .error(function() {
                        console.log("Failed....");
                        $ionicLoading.hide();
                        deferred.reject();
                    });
            return deferred.promise;
        };

        return {
            getStudents: getStudents
        };
    };
})();