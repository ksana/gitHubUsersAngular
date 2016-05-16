app.controller('gitHubUsersController', ['$scope','$http', function($scope,$http) {

$http.get("https://api.github.com/users?per_page=100")
        .success(function(data) {
            $scope.usersList = data;
        });
}]);