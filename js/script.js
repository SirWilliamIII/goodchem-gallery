var app = angular.module("strains", ['ngRoute'])

	.config(['$routeProvider', function ($routeProvider) {
		$routeProvider.when('/main', {
			templateUrl: 'main.html',
			controller:  'MainCtrl'
		}).when('/about', {
			templateUrl: 'about.html',
			controller:  'MainCtrl'
		}).when('/strains', {
			templateUrl: 'strains.html',
			controller:  'StrainsCtrl'
		}).when('/contact', {
			templateUrl: 'contact.html'
		}).otherwise({ redirectTo: '/strains' })
	}])

	.controller('MainCtrl', ['$scope', '$http', function ($scope, $http) {
		$http.get('http://denver-pot.herokuapp.com')
			.then(res => {
				$scope.main = res.data
			})
	}])

	.controller('StrainsCtrl', ['$scope', '$http', function ($scope, $http) {
		$http.get('http://denver-pot.herokuapp.com')
				.then(res => {
					console.log('weeeeeeeeeeeee')
					$scope.strains = res.data;
				});
		}])

