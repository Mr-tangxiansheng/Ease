/**
 * @description 用于存放列表页面检索条件
 * @description 解决问题：列表下钻后返回，列表状态需要保持
 */
import { router } from "@/router";
import { defineStore } from "pinia";
import { Ref, ref } from "vue";
import { useRoute } from "vue-router";

const cache = ref(new Map<string, Ref<any>>());
router.beforeEach(to => {
  cache.value.forEach((d, path) => {
    
  });
});
function cacheStatus<T>(params: T): Ref<T> {
  const { path } = useRoute();
  if (!cache.value.has(path)) {
    cache.value.set(path, ref(params));
  }
  let value = cache.value.get(path);
  return value;
}
export const useDataStatus = defineStore("useDataStatus", () => ({
  cacheStatus,
  cache,
}));
