//parce que nous ajoutons un module externe nous avons besoin d'inclure une dépendance
//ici ui-router est utilisé à la place du standar ngRoute
// le module template vient de du gem angular-rails-templates*
angular.module('flapperNews', ['ui.router', 'templates'])
//config va installer l'état 'state' de home
.config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider){
	$stateProvider
		.state('home', {
			url: '/home',
			templateUrl: 'home/_home.html',
			controller: 'MainCtrl'
		})
//le nouvel état posts affichera les commentaires associer à un post
		.state('posts', {
//id entre crochet signifie que c un paramètre d'itinéraire qui sera mis à la disposition de notre contrôleur
			url: '/posts/{id}',
			templateUrl: 'posts/_posts.html',
			controller: 'PostsCtrl'
		});
//oterwise sert à rediriger les routes non spécifiées
	$urlRouterProvider.otherwise('home');
	}])