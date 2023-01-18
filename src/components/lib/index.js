// vue3.0插件写法要素：导出一个对象，有install函数，默认传入了app应用实例，app基础之上扩展
// 若果要挂载原型 app.config.globalProperties
import defaultImg from '@/assets/image/loding.svg'

export default {
    install(app) {
        auto()
        //图片懒加载指令
        defineDirective(app)
    }
}

//自定义 指令
const defineDirective = (app) => {
    app.directive('lazy',{
        mounted(el,binding) {
            const observe = new IntersectionObserver(([{isIntersecting}]) => {
                if(isIntersecting) {
                    observe.unobserve(el)
                    if(binding.value) {
                        el.src = binding.value
                        console.log('图片加载成功')
                    }
                    if(!binding.value) {
                        el.src = defaultImg
                        console.log('图片加载失败')
                    }
                }
            },{threshold:0.01})
            observe.observe(el)
        },
    })
}

//设置跟字体大小
function auto() {
    let clientWidth = document.documentElement.clientWidth
    let rootFS = clientWidth * 100 / 375
    document.documentElement.style.fontSize = rootFS + 'px'
}
window.onresize = auto