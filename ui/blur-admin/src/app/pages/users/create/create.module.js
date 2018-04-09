/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
	'use strict';

	angular.module('BlurAdmin.pages.user-manager-create', [])
		.config(routeConfig);

	/** @ngInject */
	function routeConfig($stateProvider, $urlRouterProvider) {
		
		$stateProvider.state('user-manager-create', {
			url: '/user-manager/create',
			title: 'Users Create',
			templateUrl: 'app/pages/users/create/create.html',
			controller: 'UsersCreateCtrl',
		});
		
	}

})();
