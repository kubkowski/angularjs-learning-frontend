'use strict';

/**
 * @ngdoc function
 * @name swFrontApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the swFrontApp
 */
angular.module('swFrontApp')
  .controller('EdgesCtrl', function ($scope, edges, categories) {
  	
    $scope.edges = edges.query();
    $scope.categories = categories.query();

    $scope.filterBy = {
      search: '',
      category: $scope.categories[0]
    };

    $scope.edges = [
  	{
  		name: 'Attractive',
      description: 'Blah...',
  		category: {
  			name: 'Background'
  		},
      requirements: [
      { name: null, value: 'Novice'},
      { name: 'Vigor', value: 'd6'}
      ]
  	},
    {
      name: 'Very attractive',
      description: 'Blah...',
      category: {
        name: 'Active'
      },
      requirements: [
      { name: null, value: 'Novice'},
      { name: 'Charisma', value: 'd8'}
      ]
    }
  	];
    
    var selectedEdge = null;

    $scope.selectEdge = function(edge) {
      selectedEdge = (selectedEdge === edge) ? null : edge;
    };

    $scope.isSelected = function(edge) {
      return edge === selectedEdge;
    };

    $scope.displayRequirements = function(reqs) {
      var result = '';
      for (var i=0; i < reqs.length; i++) {
        if (result !== '') { result += ', '}
        if (reqs[i].name) {
          result += reqs[i].name + ' ';
        }
        result += reqs[i].value; 
      }
      return result;
    };
  });
