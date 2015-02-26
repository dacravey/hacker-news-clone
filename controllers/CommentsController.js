hackedNews.controller('CommentsCtrl', function CommentsCtrl($scope, ArticlesFactory, UtilitiesFactory) {
  $scope.comments = ArticlesFactory.comments;
  $scope.UtilitiesFactory = UtilitiesFactory;
  $scope.ArticlesFactory = ArticlesFactory;
});
