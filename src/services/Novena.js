import { fetchJSON } from "../helpers/api";

const NOVENA_API_PATH = "/api/novenas";

class Novena {
  async list() {
    return fetchJSON(NOVENA_API_PATH, {
      method: 'get'
    });
  }

  async get(novena_id) {
    return fetchJSON([NOVENA_API_PATH, novena_id].join('/'), {
      method: 'get'
    });
  }
}

const novena = new Novena();
export default novena;
