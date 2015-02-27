var hackedNews = angular.module('hackedNews', ['ui.router']);

hackedNews.config(function($stateProvider) {
  $stateProvider.state('home', {
    url: "",
    templateUrl: "partials/home.html"
  });

  $stateProvider.state('articles', {
    url: "/articles",
    templateUrl: "partials/articles.html",
    controller: "ArticlesCtrl"
  });

  $stateProvider.state('new', {
    url: "/new",
    templateUrl: "partials/new.html",
    controller: "ArticlesCtrl"
  });

  $stateProvider.state('comments', {
    url: "/:id",
    templateUrl: "partials/comments.html",
    controller: "CommentsCtrl"
  });

});
