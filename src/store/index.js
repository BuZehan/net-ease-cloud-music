import { createStore } from 'vuex'
import createPersistedstate from 'vuex-persistedstate'

export default createStore({
  modules: {

  },
  plugins: [
    createPersistedstate({
        key: 'net-ease-cloud-music', //本地存储的名字
        paths: [] //需要本地存储的模块
    })
]
})
