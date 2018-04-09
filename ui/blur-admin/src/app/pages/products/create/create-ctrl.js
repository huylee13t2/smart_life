/**
 * @author a.demeshko
 * created on 21.01.2016
 */
(function () {
	'use strict';

	angular.module('BlurAdmin.pages.products-manager-create')
		.controller('ProductsCreateCtrl', ProductsCreateCtrl);

	/** @ngInject */
	function ProductsCreateCtrl($stateParams, $scope, toastr, ProductsService, $rootScope, $location, $window) {
		$scope.product = {
			name : '',
			code : ''
		}

		// =========================== random password ====================
		$scope.randomPassword = function(){
			var _password = Math.floor((Math.random() * 899999) + 100000);
			$scope.user.password = _password;
		}

		// ========================= change input ===================
		$scope.handleChange = function(field, value){
			$scope.product[field] = value;
		}

		// ===================== create product ==================
		$scope.save = function(){
			ProductsService.created($scope.product).success(function(res){
				if(res.result > 0){
					toastr.success('Create Product success!');
					$window.location.href = '#/products-manager/list';
				}
			}).error(function(err, stt, res){
				toastr.error('Error!')
			});
		}
	}

})();