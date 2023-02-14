import { createStore } from 'vuex'
import createPersistedstate from 'vuex-persistedstate'
import user from './modules/user'
import discover from './modules/discover'
export default createStore({
  modules: {
    user,
    discover
  },
  plugins: [
    createPersistedstate({
      key: 'net-ease-cloud-music', //本地存储的名字
      paths: ['user','discover'] //需要本地存储的模块
    })
  ]
})
