/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
	'use strict';

	angular.module('BlurAdmin.pages.products-manager-create', [])
		.config(routeConfig);

	/** @ngInject */
	function routeConfig($stateProvider, $urlRouterProvider) {
		
		$stateProvider.state('products-manager-create', {
			url: '/products-manager/create',
			title: 'Product Create',
			templateUrl: 'app/pages/products/create/create.html',
			controller: 'ProductsCreateCtrl',
		});
		
	}

})();
