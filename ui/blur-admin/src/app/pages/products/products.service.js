(function () {
    'use strict';
    angular.module('BlurAdmin')
        .factory('ProductsService', function ($http, AppSetting, $rootScope) {
            return {
                getList: function () {
                    return $http.get(AppSetting.BASE_URL + 'product/list/', {
                        headers: {
                            'Content-Type': undefined,
                            // 'Authorization': 'Token ' + token
                        }
                    });
                },
                created: function (data) {
                    data.token = $rootScope.userLogin.token;
                    var fd = new FormData();
                    for (var key in data) {
                        fd.append(key, data[key])
                    }
                    return $http.post(AppSetting.BASE_URL + 'product/create/', fd, {
                        headers: {
                            'Content-Type': undefined,
                            // 'Authorization': 'Token ' + token
                        }
                    });
                },
                removed: function (id, token) {
                    return $http.delete(AppSetting.BASE_URL + '/api/garnish/' + id + '/', {
                        headers: {
                            'Content-Type': undefined,
                            'Authorization': 'Token ' + token
                        }
                    })
                },
                updated: function (data, token) {
                    var fd = new FormData();

                    for (var key in data) {
                        if(key === 'image'){
							if(data[key])
								fd.append(key, data[key]);
						}
						 else{
							fd.append(key, data[key]);
						}
                    }
                    return $http.patch(AppSetting.BASE_URL + '/api/garnish/' + data.id + '/', fd , {
                        headers: {
                            'Content-Type': undefined,
                            'Authorization': 'Token ' + token
                        }
                    })
                },
                changed: function(data, token){
                    var fd = new FormData();
                    fd.append('status', data.status);

                    return $http.patch(AppSetting.BASE_URL + '/api/garnish/'+ data.id + '/', fd, {
                        headers: {
                            'Content-Type': undefined,
                            'Authorization': 'Token ' + token
                        }
                    })
                },
                getElement : function(id, token){
                    return $http.get(AppSetting.BASE_URL + '/api/garnish/'+ id + '/', {
                        headers: {
                            'Content-Type': undefined,
                            'Authorization': 'Token ' + token
                        }
                    })
                }
            }
        });
})();