(function() {
    'use strict';

    angular.module('studentportalApp').factory('studentportalApi', ['$http', '$q', '$ionicLoading', studentportalApi]);

    function studentportalApi($http, $q, $ionicLoading) {

        function getStudents() {

            var deferred = $q.defer();

                $ionicLoading.show({
                    template: 'Loading...'
                });

            $http.get("http://studentportalwebapi.azurewebsites.net/api/students")
                .success(function(data) {
                    console.log("success...");
                    deferred.resolve(data);
                    $ionicLoading.hide();
                })
                .error(function() {
                    console.log("Failed....");
                    $ionicLoading.hide();
                    deferred.reject();
                });
            return deferred.promise;
        }

        function searchForStudent(id) {

            var deferred = $q.defer();

                $ionicLoading.show({
                    template: 'Loading...'
                });

                $http.get("http://studentportalwebapi.azurewebsites.net/api/students/" + id)
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


        function getStudentResults(id) {

            var deferred = $q.defer();

                $ionicLoading.show({
                    template: 'Loading...'
                });

                $http.get("http://studentportalwebapi.azurewebsites.net/api/results/" + id)
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
            getStudents: getStudents,
            searchForStudent: searchForStudent,
            getStudentResults: getStudentResults
        };
    };
})();