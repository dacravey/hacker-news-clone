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

});
