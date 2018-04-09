(function() {
    'use strict';
    angular.module('BlurAdmin')
    .factory('LoginService', function($http, AppSetting){

        return {
            login: function(data) {
                var fd = new FormData();
                fd.append('username', data.username);
                fd.append('password', data.password);

                return $http.post(AppSetting.BASE_URL + 'user/login/', fd, {
                    headers: {
                        'Content-Type': undefined,
                        // 'Authorization': 'Token ' + token
                    }
                });
            }
        }
    });
})();