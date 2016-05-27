// Le rôle d'un service est de fournir un ensemble de tâches nécessaires au fonctionnement de votre application.
//Un service est considéré comme un simple module qui est chargé de retourner un objet. 
//Cet objet possédera un ensemble de fonctions qui seront chargées d'exécuter un certain nombre de services !
//Lorsque vous créez une factory, vous avez la responsabilité de retourner un objet qui possède un certain nombre d'utilitaires qui assurent vos services.
angular.module('flapperNews',[])
// création d'un factory
.factory('posts', [function(){
	var o = {
		posts: []//ici on crée un objet qui retourne o et qui contiens un tableau
	};
	return o;
}])

//parce que nous ajoutons un module externe nous avons besoin d'inclure une dépendance
//ici ui-router est utilisé à la place du standar ngRoute
angular.module('flapperNews', ['ui.router'])
//config va installer l'état 'state' de home
.config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider){
	$stateProvider
		.state('home', {
			url: '/home',
			templateUrl: '/home.html',
			controller: 'MainCtrl'
		})
//le nouvel état posts affichera les commentaires associer à un post
		.state('posts', {
//id entre crochet signifie que c un paramètre d'itinéraire qui sera mis à la disposition de notre contrôleur
			url: '/posts/{id}',
			templateUrl: '/posts.html',
			controller: 'PostsCtrl'
		});
//oterwise sert à rediriger les routes non spécifiées
	$urlRouterProvider.otherwise('home');
	}])

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