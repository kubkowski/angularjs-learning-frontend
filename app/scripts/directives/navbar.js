'use strict';

angular.module('swFrontApp')
	.directive('navbar', function(){
		return {
			restrict: 'E',
			templateUrl: 'views/nav.html',
			controller: 'NavCtrl'
		}
	});