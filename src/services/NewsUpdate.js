import { fetchJSON } from "../helpers/api";

const NEWS_UPDATE_API_URL = "https://demo7623541.mockable.io/api/news_and_updates";

class NewsUpdate {
  async get() {
    return fetchJSON(NEWS_UPDATE_API_URL, {
      method: 'get'
    });
  }
}

const newsUpdate = new NewsUpdate();
export default newsUpdate;
