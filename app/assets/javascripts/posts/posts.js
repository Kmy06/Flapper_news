// Le rôle d'un service est de fournir un ensemble de tâches nécessaires au fonctionnement de l'application.
//Un service est considéré comme un simple module qui est chargé de retourner un objet. 
//Cet objet possédera un ensemble de fonctions qui seront chargées d'exécuter un certain nombre de services !
//Lorsqu'on crée une factory, on a la responsabilité de retourner un objet qui possède un certain nombre d'utilitaires qui assurent nos services.
angular.module('flapperNews')
// création d'un factory et injection du service http
.factory('posts', [
'$http',
function($http){
	var o = {
		posts: []//ici on crée un objet qui retourne o et qui contiens un tableau
	};
// getAll va obtenir tous les posts des services de posts.js
	o.getAll = function() {
// ici on utilise le service http pour demander la route de posts
// success nous autorise à lier la fonction qui sera exécuté quand la requête est retourné
		return $http.get('/posts.json').success(function(data){
// angular.copy(source, [destination]), copy crée une copy de 'source'
			angular.copy(data, o.posts);
    });
  };
	o.create = function(post) {
  return $http.post('/posts.json', post).success(function(data){
    o.posts.push(data);
  });
};
	o.upvote = function(post) {
  return $http.put('/posts/' + post.id + '/upvote.json')
    .success(function(data){
      post.upvotes += 1;
    });
};
o.get = function(id) {
  return $http.get('/posts/' + id + '.json').then(function(res){
    return res.data;
  });
};
o.addComment = function(id, comment) {
  return $http.post('/posts/' + id + '/comments.json', comment);
};
o.upvoteComment = function(post, comment) {
  return $http.put('/posts/' + post.id + '/comments/'+ comment.id + '/upvote.json')
    .success(function(data){
      comment.upvotes += 1;
    });
};

	return o;
}])

/*angular.module('flapperNews')
.factory('posts', [function(){
  var o = {
    posts: []
  };
  return o;
}])*/