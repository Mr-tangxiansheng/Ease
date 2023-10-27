import { BASE_URL_API } from "./baseUrl";
import { createRequest } from "./request";

const request = createRequest({ baseURL: BASE_URL_API });

export { request };
