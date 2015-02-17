var ciapp = angular.module('ciapp', ['ngRoute', 'ngAnimate']);
	ciapp.constant('ENDPOINT_URI', 'http://localhost:3000');

ciapp.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl : 'app/views/examsList.html',
			controller  : 'examsListController'
		})
		.when('/exams', {
			templateUrl : 'app/views/examsList.html',
			controller  : 'examsListController'
		})
		.when('/exam/details/:idPatient/:idExam', {
			templateUrl : 'app/views/examDetails.html',
			controller  : 'examDetailsController'
		});

});

ciapp.controller('mainController', function($scope, $rootScope, $location) {
	$scope.go = function(path, pageAnimation) {
    $rootScope.viewTransition = pageAnimation;
    $location.path(path);
	};
});
