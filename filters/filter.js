app.filter('searchFor', function(){


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