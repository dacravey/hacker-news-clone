hackedNews.factory('ArticlesFactory', function ArticlesFactory() {
  var factory = {};
  factory.articles = [];
  factory.addArticle = function() {
    factory.articles.push({ name: factory.articleName, link: factory.articleLink, id: factory.articles.length + 1 });
    factory.articleName = null;
    factory.articleLink = null;
    console.log(factory.articles);
  };
  return factory;
});
