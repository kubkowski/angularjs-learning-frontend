'use strict';

angular.module('swFrontApp').controller('AdminCtrl', function($http){
	$http.get('/api/users');
});