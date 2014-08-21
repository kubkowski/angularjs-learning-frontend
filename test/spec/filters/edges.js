'use strict'


describe('EdgesFilter', function() {
	var filter;

	beforeEach(module('swFrontApp'));
	beforeEach(inject(function(edgesFilter){
		filter = edgesFilter;
	}));

	describe('Category Filter', function(){
		var edges = [
		{
			category: {name: 'first'}
		},
		{
			category: {name: 'second'}
		}
		];

		var filterBy = {category: {name: 'first'}};

		it('filters by category name' , function () {
			expect(filter(edges, filterBy).length).toEqual(1);
		});


	});
});