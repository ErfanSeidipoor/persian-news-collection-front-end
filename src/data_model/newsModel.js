
class NewsModel  {
  constructor(model) {
    this.title = model.title
    this.description = model.description
    this.url = model.url
    this.agency = model.agency
    this.id = model.id
    this.newsId = model.newsId
    this.imageUrl = model.imageurl
    this.tags = model.tags
  }

  getTitle = () => this.title;
  getDescription = () => this.description;
  getUrl = () => this.url;
  getAgency = () => this.agency;
  getTags = () => this.tags;
  getImageUrl = () => this.imageUrl;
  getUrl = () => this.url;
  getNewsId = () => this.newsId;

  static from(model) {
    return new NewsModel(model)
  }
}

export default NewsModel;
