/** 请求的相关类型 */
declare namespace Service {
  /** 后端接口返回的数据结构配置 */
  interface BackendResultConfig {
    codeKey: string;
    dataKey: string;
    msgKey: string;
    successCode: string | number;
  }
  /** 自定义请求成功结果 */
  interface SuccessResult<T> {
    code: string | number;
    data: T;
    message: string;
    success: boolean;
  }
  /** 自定义请求失败结果 */
  interface FailedResult {
    code: string | number;
    data?: null | undefined | any;
    message: string;
    success: false;
  }
  /** 自定义请求结果 */
  type RequestResult<T = any> = SuccessResult<T> | FailedResult;
}
