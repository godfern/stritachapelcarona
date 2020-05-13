import { fetchJSON } from "../helpers/api";

const CHAPEL_SERVICE_API_URL = "https://demo7623541.mockable.io/chapel_services";

class ChapelServices {
  async list() {
    return fetchJSON(CHAPEL_SERVICE_API_URL, {
      method: 'get'
    });
  }
}

const chapelServices = new ChapelServices();
export default chapelServices;
