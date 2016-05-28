angular.module('flapperNews', [])
.controller('PostsCtrl', [
	'$scope',
	'$stateParams',
	'posts',
	function($scope, $stateParams, posts){
//on met un objet appelé post qui attrapera le post approprié du service posts utilisant l'id de stateParams
		$scope.post = posts.posts[$stateParams.id];
//Pour que l'utilisateur poste un nouveau commentaire
		$scope.addComment = function(){
			if ($scope.body === '') {return;}
			$scope.post.comments.push({
				body: $scope.body,
				author: 'user',
				upvotes: 0
			});
			$scope.body = '';
		};
	}]);