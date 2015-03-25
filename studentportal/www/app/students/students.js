(function () {
    'use strict';

    angular.module('studentportalApp').controller('StudentsCtrl', ['$stateParams', StudentsCtrl]);

    function StudentsCtrl($stateParams) {

        var vm = this;
        console.log("$stateParams", $stateParams);

        vm.students = JSON.parse('[{"name" : "Tim Cook", "StudentNumber":"10001","Year":"First","Course":"BSc: Information Systems"},{"name" : "Bill Gates", "StudentNumber":"10002","Year":"Third","Course":"BSc: Computer Science"}]')
    };
})();