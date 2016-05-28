angular.module('flapperNews', [])
.controller('MainCtrl', [
'$scope',
'posts',//injection de posts service daans mainCtrl
function($scope, posts){
	$scope.test = 'Hello world';
	$scope.posts = posts.posts;//N'importe quel modification faite dans $scope.posts immédiatement par n'importe quel module qui aura injecté le service posts
		$scope.addPost = function(){
			if (!$scope.title || $scope.title === '') { return; } // test si l'utilisateur ne rentre pas de titre
			$scope.posts.push({
				title: $scope.title,
				link: $scope.link, 
				upvotes: 0,
				comments: [
					{author: 'Joe', body:'Ho yeah !', upvotes: 0},
					{author: 'Bob', body:'C\'est nul tout est faux', upvotes: 0}
				]
			});
			$scope.title = '';
			$scope.link = '';
		};
		$scope.incrementUpvotes = function(post){
			post.upvotes += 1;
		};
	}])