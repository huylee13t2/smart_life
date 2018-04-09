/**
 * @author a.demeshko
 * created on 21.01.2016
 */
(function () {
	'use strict';

	angular.module('BlurAdmin.pages.products-manager')
		.controller('ProductsListCtrl', ProductsListCtrl)
		.controller('ProductsDeleteCtrl', ProductsDeleteCtrl);

	/** @ngInject */
	function ProductsListCtrl($scope, toastr, ProductsService, $rootScope, $location, $window, $uibModal) {
		$rootScope.listData = [];
		
		// ================= get list ===============
		function getList(){
			ProductsService.getList().success(function(res){
				$rootScope.listData = res.data;
			}).error(function(err, status, res){
				console.log(res)
				toastr.error('Error!');
			});
		}

        getList();
        
		// // =========== open modal confirm delete Glass ===========
		// $scope.confirmDelete = function(data){
		// 	var page = 'app/pages/users/list/confirm.html';
        //     $uibModal.open({
        //         animation: true,
        //         templateUrl: page,
		// 		size: 'sm',
		// 		resolve: {
        //             items: function () {
        //                 return data;
        //             }
        //         },
        //         controller: 'ProductsDeleteCtrl',
        //     });
		// }

		// // ============ change Switch ==============
		// $scope.countSwitch = 0;
		// $scope.changeSwitch = function (data) {
		// 	$scope.countSwitch ++;
		// 	if($scope.countSwitch == 2){
		// 		$scope.countSwitch = 0;
		// 		var _obj = {
		// 			id : data.id,
		// 			active : data.active
		// 		};

		// 		ProductsService.updated(_obj, $rootScope.userLogin.token).success(function(res){
		// 			toastr.success('Change status success!');
		// 			getList();
		// 		}).error(function(err, status, res){
		// 			console.log(err);
		// 			toastr.error('Error!');
		// 		})
		// 	}
		// }

	};

	// controler GarnishListDeleteCtrl
	function ProductsDeleteCtrl($scope, toastr, ProductsService, $rootScope, $location, $window, $uibModal, items, $uibModalInstance){
		$scope.item_del = items;

		// // ================= get list glass ===============
		// function getList(){
		// 	ProductsService.getList($rootScope.userLogin.token).success(function(res){
		// 		$rootScope.listData = res;
		// 	}).error(function(err, status, res){
		// 		console.log(res)
		// 		toastr.error('Error!');
		// 	});
		// }

		// // =========== function delete glass =============
		// $scope.remove = function(data){
		// 	ProductsService.removed(data.id, $rootScope.userLogin.token).success(function(res){
		// 		toastr.success('Deleted success!');
		// 		$uibModalInstance.close();
		// 		getList();
		// 	}).error(function(err, status, res){
		// 		console.log(err);
		// 		toastr.error('Error!');
		// 	})
		// }
	}

})();