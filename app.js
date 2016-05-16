
var app = angular.module('app', [])


/*app.filter('searchFor', function(){


	return function(arr, searchString){

		if(!searchString){
			return arr;
		}

		var result = [];

		searchString = searchString.toLowerCase();

		// Using the forEach helper method to loop through the array
		angular.forEach(arr, function(user){

			if(user.login.toLowerCase().indexOf(searchString) !== -1){
				result.push(user);
			}

		});

		return result;
	};

});



app.controller('gitHubDataController', ['$scope','$http', function($scope,$http) {

$http.get("https://api.github.com/users?per_page=100")
        .success(function(data) {
            $scope.usersList = data;
        });
}]);*/