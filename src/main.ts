import { createApp } from 'vue'
import App from './App.vue';

// 全局样式
import './style.css';
import "./styles/css/common.css";
import "./styles/scss/common.scss";
import 'element-plus/dist/index.css';

import { setupRouter } from './router';
import { setupStore } from './store';
const app = createApp(App)

await setupRouter(app)
await setupStore(app)
app.mount('#app')
