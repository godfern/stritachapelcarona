import { fetchJSON } from "../helpers/api";

const NOVENA_API_URL = "https://demo7623541.mockable.io/api/novenas";

class Novena {
  async list() {
    return fetchJSON(NOVENA_API_URL, {
      method: 'get'
    });
  }
}

const novena = new Novena();
export default novena;
