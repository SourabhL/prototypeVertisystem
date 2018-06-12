angular.module('appRoutes',['ngRoute'])
.config(function($routeProvider, $locationProvider){
	
	$routeProvider
	.when('/', {
			templateUrl : 'app/views/pages/main.html',
			controller  : 'frontController'
		})
		.when('/home', {
			templateUrl : 'app/views/pages/main.html',
			controller  : 'frontController'
		})
		// route for the home page
		.when('/login', {
			
			templateUrl : 'app/views/pages/login.html'
			//controller  : 'mainController'
		})
		// route for the home page
		.when('/signup', {
			
			templateUrl : 'app/views/pages/signUp.html'
			//controller  : 'mainController'
		})
		.when('/main', {
			
			templateUrl : 'app/views/pages/main.html'
			//controller  : 'mainController'
		})
		// route for the contact page
		.when('/dash', {
			templateUrl : 'app/views/pages/floorplanDashboard.html',
		})
		// route for the contact page
		.when('/comingSoon', {
			templateUrl : 'app/views/pages/comingSoon.html',
		})
		// route for the dashboard page
		.when('/profile', {
			templateUrl : 'app/views/pages/profile.html'
		});

});