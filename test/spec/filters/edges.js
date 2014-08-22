'use strict'


describe('EdgesFilter', function() {
	var filter, edges, filterBy;

	beforeEach(module('swFrontApp'));
	beforeEach(inject(function(edgesFilter){
		filter = edgesFilter;
		edges = [
		{
			requirements: [
			{ name: null, value: 'Novice', mode: 'rank'},
			{ name: 'Charisma', value: 'd6', mode: 'trait'}
			],
			category: {name: 'first'}
		},
		{
		requirements: [
			{ name: null, value: 'Veteran', mode: 'rank'},
			{ name: 'Agility', value: 'd6', mode: 'trait'}
			],
			category: {name: 'second'}
		}
		];

		filterBy = {category: {name: 'first'}, rank: {name: 'Novice'}};
	}));

	describe('Category Filter', function(){

		it('filters by category name' , function () {
			filterBy.rank.name = 'All';
			expect(filter(edges, filterBy).length).toEqual(1);
		});

		it('returns all elements when category filter is All', function(){
			filterBy.category.name = 'All';
			filterBy.rank.name = 'All';
			expect(filter(edges, filterBy).length).toEqual(2);
		});
	});

	describe('Rank Filter', function(){
		it('filters by rank', function(){
			filterBy.category.name = 'All';
			expect(filter(edges, filterBy).length).toEqual(1);
		})
	});
});