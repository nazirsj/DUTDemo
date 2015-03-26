(function () {
    'use strict';

    angular.module('studentportalApp').controller('NoticesCtrl', ['$scope','$stateParams','studentportalApi', NoticesCtrl]);

    function NoticesCtrl($scope,$stateParams,studentportalApi) {

        var vm = this;
        console.log($stateParams);

        //vm.notices = JSON.parse('[{"title" : "Advance Software Engineering 3","description" : "Practical test in lab dut04", "date" : "2015/05/04 09:00" },{"title" : "Networks 2","description" : "Theory test in hall dut03", "date" : "2015/06/04 13:00" }]');

        vm.notices = [];
        function RefreshNotices() {
            studentportalApi.getNotices().then(function(data) {
                console.log('notices',data);
				vm.notices = data;                
            }).finally(function(){
                $scope.$broadcast('scroll.refreshComplete');
            });
        };

        RefreshNotices();
    };
})();