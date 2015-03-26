angular.module("studentportalApp",["ionic"])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})
.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider
	.state('app', {
      abstract: true,
      url: "/app",
      templateUrl: "app/menu/sidemenu.html"
    })
	.state('app.home', {
      url: "/home",
      views: {
      		'mainContent': {
      			templateUrl: "app/home/home.html"
      		}
  		}
    })
    .state('app.students', {
      url: "/students",
      views: {
          'mainContent': {
            templateUrl: "app/students/students.html"
          }
      }
    })
    .state('app.studentdetail', {
      url: "/studentdetail/:id",
      views: {
          'mainContent': {
            templateUrl: "app/studentdetail/studentdetail.html"
          }
      }
    })
    .state('app.search', {
      url: "/search",
      views: {
          'mainContent': {
            templateUrl: "app/search/search.html"
          }
      }
    })
    .state('app.notices', {
      url: "/notices",
      views: {
          'mainContent': {
            templateUrl: "app/notices/notices.html"
          }
      }
    });


    // if none of the above states are matched, use this as the fallback
  	$urlRouterProvider.otherwise('/app/home');
});