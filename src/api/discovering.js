import request from "@/utils/request";

//首页数据
export const findHomePage = () => request('/homepage/block/page', 'get',{})

//调用此接口 , 可获取 APP 首页圆形图标入口列表
export const findBallList = () => {
    return request('/homepage/dragon/ball', 'get',{})
}

//获取每日推荐
export const findMusicDetail = () => request('/recommend/songs','get',{})

//获取歌单详情
export const findPlayListDetail = (id) => request(`/playlist/detail`,'get',{id})