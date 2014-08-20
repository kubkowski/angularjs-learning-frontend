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
  	it('ignores name if it is null', function() {
  		reqs = [{name: null, value: 'Novice'}];
  		expect(scope.displayRequirements(reqs)).toEqual('Novice');
  	});
  	it('s requirements should be delimited by comma', function() {
  		reqs = [{name: null, value: 'Novice'}, {name: 'Agility', value: 'd6'}];
  		expect(scope.displayRequirements(reqs)).toEqual('Novice, Agility d6');
  	});

  });

});