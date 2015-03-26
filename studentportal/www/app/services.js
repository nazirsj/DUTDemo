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

        function getNotices() {

            var deferred = $q.defer();

                $ionicLoading.show({
                    template: 'Loading...'
                });

            $http.get("http://studentportalwebapi.azurewebsites.net/api/notices")
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

        function addNotice(notice) {

            var deferred = $q.defer();

                $ionicLoading.show({
                    template: 'Loading...'
                });

            $http.post("http://studentportalwebapi.azurewebsites.net/api/notices",notice)
            //$http.post("http://localhost/StudentPortal.WebApi/api/notices",notice)
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

        function removeNotice(id) {

            var deferred = $q.defer();

                $ionicLoading.show({
                    template: 'Loading...'
                });

            $http.delete("http://studentportalwebapi.azurewebsites.net/api/notices/"+id)
            //$http.post("http://localhost/StudentPortal.WebApi/api/notices",notice)
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
            getStudentResults: getStudentResults,
            getNotices: getNotices,
            addNotice: addNotice,
            removeNotice: removeNotice
        };
    };
})();