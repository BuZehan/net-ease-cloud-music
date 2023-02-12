// vue3.0插件写法要素：导出一个对象，有install函数，默认传入了app应用实例，app基础之上扩展
// 若果要挂载原型 app.config.globalProperties
import defaultImg from '@/assets/image/loding.svg'

export default {
    install(app) {
        remRefresh()
        //图片懒加载指令
        defineDirective(app)
        // 导入library文件夹下的所有组件
        // 批量导入需要使用一个函数 require.context(dir,deep,matching)
        // 参数：1. 目录  2. 是否加载子目录  3. 加载的正则匹配
        const importFn = require.context('./', false, /\.vue$/)
        // console.dir(importFn.keys()) 文件名称数组
        // 批量注册全局组件
        importFn.keys().forEach(key => {
            // 导入组件
            const component = importFn(key).default
            // 注册组件
            app.component(component.name, component)
        })
    }
}

//自定义 指令
const defineDirective = (app) => {
    app.directive('lazy', {
        mounted(el, binding) {
            const observe = new IntersectionObserver(([{ isIntersecting }]) => {
                if (isIntersecting) {
                    observe.unobserve(el)
                    if (binding.value) {
                        el.src = binding.value
                        console.log('图片加载成功')
                    }
                    if (!binding.value) {
                        el.src = defaultImg
                        console.log('图片加载失败')
                    }
                }
            }, { threshold: 0.01 })
            observe.observe(el)
        },
    })
}

//设置跟字体大小
function remRefresh() {
    let clientWidth = document.documentElement.clientWidth
    let rootFS = clientWidth * 100 / 375
    document.documentElement.style.fontSize = rootFS + 'px'
    document.body.style.fontSize = '16px'
    window.__clientWidth = clientWidth
}
window.addEventListener('pageshow', () => {
    remRefresh()
})
//函数防抖
let timeoutId = null;
window.addEventListener('resize', () => {
    timeoutId && clearTimeout(timeoutId)
    timeoutId = setTimeout(() => {
        remRefresh()
    }, 300)
})