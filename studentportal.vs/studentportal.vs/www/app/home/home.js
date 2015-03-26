(function() {
    'use strict';

    angular.module('studentportalApp').controller('NewsCtrl', ['$scope', '$stateParams', 'studentportalApi', NewsCtrl]);

    function NewsCtrl($scope, $stateParams, studentportalApi) {

        var vm = this;
        console.log("$stateParams", $stateParams);

        vm.news = [];

        function RefreshNews() {
            studentportalApi.getNews().then(function(data) {
                console.log('students', data);
                vm.news = data;
            }).finally(function() {
                $scope.$broadcast('scroll.refreshComplete');
            });
        };

        vm.loadList = function() {
            RefreshNews();
        };

        RefreshNews();
    };
})();
