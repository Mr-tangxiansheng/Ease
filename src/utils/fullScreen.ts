import { ElLoading } from "element-plus";

/** 全局loading */
let loadingInstance: ReturnType<typeof ElLoading.service>;

/**
 * @description 开始loading
 **/
function startLoading() {
  loadingInstance = ElLoading.service({
    fullscreen: true,
    lock: true,
    text: "Loading",
    background: "rgba(0, 0, 0, 0.7)",
  });
}
/**
 * @description 结束loading
 **/
function endLoading() {
  loadingInstance.close();
}

/**
 * @description 显示全局加载
 */
let needLoadingRequestCount = 0;
export function showFullScreenLoading() {
  if (needLoadingRequestCount == 0) {
    startLoading();
  }
  needLoadingRequestCount++;
}

/**
 * @description 隐藏全局加载
 */
export function tryHideFullScreenLoading() {
  if (needLoadingRequestCount <= 0) return;
  needLoadingRequestCount--;
  if (needLoadingRequestCount == 0) {
    endLoading();
  }
}
