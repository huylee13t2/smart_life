/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
	'use strict';

	angular.module('BlurAdmin.theme.components')
		.controller('BaSidebarCtrl', BaSidebarCtrl);

	/** @ngInject */
	function BaSidebarCtrl($scope, baSidebarService) {

		// $scope.menuItems = baSidebarService.getMenuItems();

		$scope.menuItems = [
			{
				icon: "ion-android-home",
				level: 0,
				name: "dashboard",
				order: 0,
				stateRef: "dashboard",
				subMenu: null,
				title: "Dashboard"
			},
			{
				icon: "ion-person-stalker",
				name: "user-manager",
				stateRef: "user-manager",
				title: "User Manager",
				level: 0,
			},
			{
				icon: "ion-ios-folder",
				name: "products-manager",
				stateRef: "products-manager",
				title: "Product Manager",
				level: 0,
			},
		];

		$scope.defaultSidebarState = $scope.menuItems[0].stateRef;

		$scope.hoverItem = function ($event) {
			$scope.showHoverElem = true;
			$scope.hoverElemHeight = $event.currentTarget.clientHeight;
			var menuTopValue = 66;
			$scope.hoverElemTop = $event.currentTarget.getBoundingClientRect().top - menuTopValue;
		};

		$scope.$on('$stateChangeSuccess', function () {
			if (baSidebarService.canSidebarBeHidden()) {
				baSidebarService.setMenuCollapsed(true);
			}
		});
	}
})();