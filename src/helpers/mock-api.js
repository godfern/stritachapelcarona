import axios from "axios";
import MockAdapter from "axios-mock-adapter";

import NovenaList from "../mock_data/novenas/list.json";

export function configure() {
  let mock = new MockAdapter(axios, { delayResponse: 100 });

  mock
    .onGet('/api/novenas')
    .reply(200, NovenaList);
}
