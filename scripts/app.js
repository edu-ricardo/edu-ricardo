var app = angular.module('portifolio',[]);

app.controller('CtrlMain', function($scope, $http){
	$scope.teste = 10;
	$http.get('/posts.json')
		.then(function(response) {
			console.log(response.data.posts);
			$scope.posts = response.data.posts;
		});
});
	