/**
 * @author a.demeshko
 * created on 21.01.2016
 */
(function () {
	'use strict';

	angular.module('BlurAdmin.pages.user-manager-create')
		.controller('UsersCreateCtrl', UsersCreateCtrl);

	/** @ngInject */
	function UsersCreateCtrl($stateParams, $scope, toastr, $rootScope, $location, $window) {
		$scope.user = {
			company : 0,
			product : 0,
			password : ''
		}

		// =========================== random password ====================
		$scope.randomPassword = function(){
			var _password = Math.floor((Math.random() * 899999) + 100000);
			$scope.user.password = _password;
		}

		// ========================= change input ===================
		$scope.handleChange = function(field, value){

		}
	}

})();