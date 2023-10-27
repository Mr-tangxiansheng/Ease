import { showFullScreenLoading, tryHideFullScreenLoading } from "../utils/fullScreen";
import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

export default class CustomAxiosInstance {
  instance:AxiosInstance;
  backendConfig: Service.BackendResultConfig;
  constructor(
    axiosConfig: AxiosRequestConfig,
    backendConfig: Service.BackendResultConfig = {
      codeKey: "code",
      dataKey: "data",
      msgKey: "message",
      successCode: 200,
    }
  ) {
    this.backendConfig = backendConfig;
    this.instance = axios.create(axiosConfig);
    this.setInterceptor();
  }
  setInterceptor() {
    // 请求拦截器
    this.instance.interceptors.request.use(
      async (config) => {
        // 在请求头中添加token
        config.headers.Authorization = `Bearer ${this.backendConfig.token}`;
        showFullScreenLoading()
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
    // 响应拦截器
    this.instance.interceptors.response.use(
      async (response) => {
        // 在这里对返回的数据进行处理
        const { status } = response;
        tryHideFullScreenLoading()
        if (status === 200) {
          const backend = response.data;
          if (backend.code === 200) {
            return backend;
          }
        }
       
        return response;
      },
      (error) => {
        tryHideFullScreenLoading()
        return Promise.reject(error);
      }
    );
  }
}
