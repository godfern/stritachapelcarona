import { fetchJSON } from "../helpers/api";

const FEAST_API_URL = "https://demo7623541.mockable.io/api/feasts";

class Feast {
  async list() {
    return fetchJSON(FEAST_API_URL, {
      method: 'get'
    });
  }
}

const feast = new Feast();
export default feast;
