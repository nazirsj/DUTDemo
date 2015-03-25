(function () {
    'use strict';

    angular.module('studentportalApp').controller('SearchCtrl', ['$stateParams', SearchCtrl]);

    function SearchCtrl($stateParams) {

        var vm = this;
        console.log("$stateParams", $stateParams);

        vm.searchid = "";

        vm.searchText = "";

        vm.search = function(){
        	vm.searchText = "searching for student number... " + vm.searchid;
        }    
    };
})();