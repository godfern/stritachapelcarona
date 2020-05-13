import { fetchJSON } from "../helpers/api";

const ANNOUNCEMENT_API_URL = "https://demo7623541.mockable.io/api/announcements";

class Announcement {
  async list() {
    return fetchJSON(ANNOUNCEMENT_API_URL, {
      method: 'get'
    });
  }
}

const announcement = new Announcement();
export default announcement;
