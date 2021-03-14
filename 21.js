class Article {
  constructor(title, date) {
    this.title = title;
    this.date = date;
  }
  static compare(articleA, articleB) {
    return articleA.date - articleB.date;
  }
}

let articles = [
  new Article("HTML", new Date(2019, 1, 1)),
  new Article("css", new Date(2019, 0, 1)),
  new Article("javascript", new Date(2019, 11, 1)),
];
articles.sort(Article.compare);
console.log(articles[0].title);
