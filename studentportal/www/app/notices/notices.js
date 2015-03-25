(function () {
    'use strict';

    angular.module('studentportalApp').controller('NoticesCtrl', ['$stateParams', NoticesCtrl]);

    function NoticesCtrl($stateParams) {

        var vm = this;
        console.log($stateParams);

        vm.notices = JSON.parse('[{"title" : "Advance Software Engineering 3","description" : "Practical test in lab dut04", "date" : "2015/05/04 09:00" },{"title" : "Networks 2","description" : "Theory test in hall dut03", "date" : "2015/06/04 13:00" }]');

    };
})();