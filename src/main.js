import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Ui from '@/components/lib/index'
import '@/assets/style/common.less'
//注册Vant组件
import 'vant/lib/index.css';

createApp(App).use(store).use(router).use(Ui).mount('#app')
