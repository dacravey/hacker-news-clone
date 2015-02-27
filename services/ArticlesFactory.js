hackedNews.factory('ArticlesFactory', function ArticlesFactory() {
  var factory = {};
  factory.articles = [];

  factory.addArticle = function() {
    factory.articles.push({ name: factory.articleName,
                            link: factory.articleLink,
                              id: factory.articles.length + 1,
                            vote: 0,
                        comments: [],
                        addComment: function(comment) { this.comments.push(comment) }
    });
    factory.articleName = null;
    factory.articleLink = null;
    console.log(factory.articles);
  };

  factory.articleAddVote = function(article) {
    article.vote += 1;
    console.log(article);
    console.log(factory.articles);
  };

  return factory;
});
