(function() {
    'use strict';

    angular.module('studentportalApp').controller('SearchCtrl', ['$scope', '$stateParams', 'studentportalApi', SearchCtrl]);

    function SearchCtrl($scope, $stateParams, studentportalApi) {

        var vm = this;
        console.log("$stateParams", $stateParams);

        vm.searchid = "";

        vm.searchText = "";

        vm.results = [];

        vm.search = function() {
            vm.searchText = "searching for student number... " + vm.searchid;
            studentportalApi.searchForStudent(vm.searchid).then(function(data) {
                console.log('search', data);
                vm.searchText = "";
                vm.results = data;
            }).finally(function() {
                vm.searchText = "";
                $scope.$broadcast('scroll.refreshComplete');
            });
        }

    };
})();
