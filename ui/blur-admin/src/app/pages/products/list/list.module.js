/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
	'use strict';

	angular.module('BlurAdmin.pages.products-manager', [])
		.config(routeConfig);

	/** @ngInject */
	function routeConfig($stateProvider, $urlRouterProvider) {
		
		$stateProvider.state('products-manager', {
			url: '/products-manager/list',
			title: 'Products',
			templateUrl: 'app/pages/products/list/list.html',
			controller: 'ProductsListCtrl',
		});
		
	}

})();
