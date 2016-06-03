angular.module('flapperNews')
.controller('MainCtrl', [
  '$scope',
  'posts',//injection de posts service daans mainCtrl
  function($scope, posts){
  $scope.posts = posts.posts;//N'importe quel modification faite dans $scope.posts immédiatement par n'importe quel module qui aura injecté le service posts
  
$scope.addPost = function(){
  if(!$scope.title || $scope.title === '') { return; }// test si l'utilisateur ne rentre pas de titre
  posts.create({
    title: $scope.title,
    link: $scope.link,
  });
  $scope.title = '';
  $scope.link = '';
};
$scope.incrementUpvotes = function(post) {
  posts.upvote(post);
};
}])
