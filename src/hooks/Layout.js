import { nextTick,ref } from "vue"
export const UI = class UI {
    constructor() {
        nextTick(() => {
            this.container.value.addEventListener("scroll", (e) => {
                let scrollLeft = Math.floor(e.target.scrollLeft)
                // console.log('scrollLeft:', scrollLeft, 'documentClient:', clientWidth, 'currentPage:', Math.round(scrollLeft / clientWidth) + 1)
                this.currentPage.value = Math.round(scrollLeft / window.__clientWidth) + 1
            })
        })
        this.container = ref(null)
        this.currentPage = ref(1)
        this.clientWidth = window.__clientWidth
    }
}