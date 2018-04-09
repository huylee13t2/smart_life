/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
	'use strict';

	angular.module('BlurAdmin.pages.user-manager', [])
		.config(routeConfig);

	/** @ngInject */
	function routeConfig($stateProvider, $urlRouterProvider) {
		
		$stateProvider.state('user-manager', {
			url: '/user-manager/list',
			title: 'Users / List',
			templateUrl: 'app/pages/users/list/list.html',
			controller: 'UsersListCtrl',
		});
		
	}

})();
