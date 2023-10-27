/** 环境配置 */

const serviceEnvConfig = {  
  // 服务端环境配置
  dev: {
    // 开发环境
    url: 'https://www.fastmock.site/mock/ec66f667110385756922f14195132da9',
    proxy: ''
  },
  test: {
    // 测试环境
    url: 'http://localhost:3000',
    proxy: ''
  },
  staging: {
    // 预生产
    url: 'http://localhost:3000',
    proxy: ''
  },
  prod: {
    // 生产环境
    url: 'http://localhost:3000',
    proxy: ''
  },
};

export function getEnvConfig (env){
  const { VITE_ENV_MODE} = env
  const config = serviceEnvConfig[VITE_ENV_MODE];
  if (!config) {
    throw new Error(
      `环境变量配置错误，请检查环境变量文件.env.${VITE_ENV_MODE}中是否有对应的配置`
    );
  }
  return config;
}