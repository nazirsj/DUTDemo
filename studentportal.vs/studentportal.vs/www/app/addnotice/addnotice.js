(function () {
    'use strict';

    angular.module('studentportalApp').controller('AddNoticeCtrl', ['$scope','$stateParams','studentportalApi','$state', AddNoticeCtrl]);

    function AddNoticeCtrl($scope,$stateParams,studentportalApi,$state) {

        var vm = this;
        console.log($stateParams);

        vm.notice = {"id":0,"title":"","description":"","date":""};

        vm.post = function(){
            studentportalApi.addNotice(vm.notice).then(function(data) {
                console.log('added notice',data);
                vm.notice = data;                
                $state.go('app.notices');
            }).finally(function(){
                $scope.$broadcast('scroll.refreshComplete');
            });

        };
    };
})();