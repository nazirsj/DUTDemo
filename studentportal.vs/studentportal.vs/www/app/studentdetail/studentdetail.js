(function() {
    'use strict';

    angular.module('studentportalApp').controller('StudentdetailCtrl', ['$scope', '$stateParams', 'studentportalApi', StudentdetailCtrl]);

    function StudentdetailCtrl($scope, $stateParams, studentportalApi) {

        var vm = this;
        console.log("$stateParams", $stateParams);
        vm.studentId = Number($stateParams.id);

        vm.searchid = "";

        vm.searchText = "";

        vm.results = [];
        vm.studentResults = [];

        function getstudent(id) {
            vm.searchText = "searching for student number... " + vm.searchid;
            studentportalApi.searchForStudent(id).then(function(data) {
                console.log('student detail', data);
                vm.searchText = "";
                vm.student = data[0];
                getstudentResults(id);
            }).finally(function() {
                vm.searchText = "";
                $scope.$broadcast('scroll.refreshComplete');
            });
        }

        function getstudentResults(id) {
            vm.searchText = "searching for student number... " + vm.searchid;
            studentportalApi.getStudentResults(id).then(function(data) {
                console.log('student results', data);
                vm.searchText = "";
                vm.studentResults = data.results;
            }).finally(function() {
                vm.searchText = "";
                $scope.$broadcast('scroll.refreshComplete');
            });
        }



        getstudent(vm.studentId);


    };
})();
