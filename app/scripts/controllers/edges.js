'use strict';

/**
 * @ngdoc function
 * @name swFrontApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the swFrontApp
 */
angular.module('swFrontApp')
  .controller('EdgesCtrl', function ($scope) {
  	$scope.edges = [
  	{
  		name: 'Attractive',
  		category: {
  			name: 'Background'
  		}
  	}
  	];
    $scope.displayRequirements = function(reqs) {
      var result = '';
      for (var i=0; i < reqs.length; i++) {
        result += reqs[i].name + ' ' + reqs[i].value; 
      }

      return result;
    };
  });
