(function() {
    'use strict';
    angular.module('BlurAdmin.pages.login')
        .controller('LoginCtrl', LoginCtrl);

    function LoginCtrl($scope, LoginService, $window, $location, toastr, toastrConfig) {
        $scope.user = {
            username : '',
            password : ''
        }

        $scope.login = function() {
            LoginService.login($scope.user).success(function(res) {
                console.log(res)
                if(res.result > 0){
                    toastr.success('Login Success!')
                    $window.localStorage['currentUser'] = JSON.stringify(res.data);
                    $location.path('/');
                }
            }).error(function(err, status){
                toastr.error('Username or password incorrect', 'Login Failed!');
            });
        }
    }
})();