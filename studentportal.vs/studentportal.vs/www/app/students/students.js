(function () {
    'use strict';

    angular.module('studentportalApp').controller('StudentsCtrl', ['$scope','$stateParams','studentportalApi', StudentsCtrl]);

    function StudentsCtrl($scope,$stateParams,studentportalApi) {

        var vm = this;
        console.log("$stateParams", $stateParams);

        //vm.students = JSON.parse('[{"name" : "Tim Cook", "StudentNumber":"10001","Year":"First","Course":"BSc: Information Systems"},{"name" : "Bill Gates", "StudentNumber":"10002","Year":"Third","Course":"BSc: Computer Science"}]')

        function RefreshStudents() {
            studentportalApi.getStudents().then(function(data) {
                console.log('students',data);
				vm.students = data;                
            }).finally(function(){
                $scope.$broadcast('scroll.refreshComplete');
            });
        };

        RefreshStudents();
    };
})();