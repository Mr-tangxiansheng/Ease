import { AxiosInstance, AxiosRequestConfig } from "axios";
import CustomAxiosInstance from "./instance";

type RequestMethod = "get" | "post" | "put" | "delete";
interface RequestParams {
  url: string;
  method: RequestMethod;
  data?: any;
  axiosConfig?: AxiosRequestConfig;
}

export function createRequest(
  axiosConfig: AxiosRequestConfig,
  backendConfig?: Service.BackendResultConfig
) {
  // 1. 创建axios实例
  const customInstance = new CustomAxiosInstance(axiosConfig, backendConfig);
  /**
   * 异步promise请求
   * @param param - 请求参数
   * - url: 请求地址
   * - method: 请求方法(默认get)
   * - data: 请求的body的data
   * - axiosConfig: axios配置
   */
  async function asyncRequest<T>(
    params: RequestParams
  ): Promise<Service.RequestResult<T>> {
    const { url, method } = params;
    const { instance } = customInstance;
    let res = (await getResponseRequest(
      instance,
      method,
      url,
      params.data,
      params.axiosConfig
    )) as Service.RequestResult<T>;
    return res;
  }
  function get<T>(url: string, config: AxiosRequestConfig) {
    return asyncRequest<T>({ method: "get", url, axiosConfig: config });
  }
  function post<T>(url: string, data: any, config?: AxiosRequestConfig) {
    return asyncRequest<T>({ method: "post", url, data, axiosConfig: config });
  }
  function put<T>(url: string, data: any, config?: AxiosRequestConfig) {
    return asyncRequest<T>({ method: "put", url, data, axiosConfig: config });
  }
  function del<T>(url: string, config?: AxiosRequestConfig) {
    return asyncRequest<T>({ method: "delete", url, axiosConfig: config });
  }
  return {
    get,
    post,
    put,
    delete: del,
  };
}

async function getResponseRequest(
  instance: AxiosInstance,
  method: RequestMethod,
  url: string,
  data?: any,
  config?: AxiosRequestConfig
) {
  let res:any;
  if (method === "get" || method == "delete") {
    res = instance[method](url, config);
  } else {
    res = instance[method](url, data, config);
  }
  return res;
}
