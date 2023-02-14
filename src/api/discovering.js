import request from "@/utils/request";

//首页数据
export const findHomePage = () => request('/homepage/block/page', 'get',{})

//调用此接口 , 可获取 APP 首页圆形图标入口列表
export const findBallList = () => {
    return request('/homepage/dragon/ball', 'get',{})
}

//获取每日推荐
export const findMusicDetail = () => request('/recommend/songs','get',{})