'use strict';

describe('EdgesController', function() {

  var scope;

  beforeEach(module('swFrontApp'));

  beforeEach(inject(function($controller, $rootScope){
    scope = $rootScope.$new();
    $controller('EdgesCtrl', {
      $scope: scope
    });
  }));

  describe('displayRequirements', function() {
  	var reqs;
  	it('concatenates name and value of the requirement', function() {
  		reqs = [{name: 'Agility', value: 'd6'}];
  		expect(scope.displayRequirements(reqs)).toEqual('Agility d6');
  	});

  });

});