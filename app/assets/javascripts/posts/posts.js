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