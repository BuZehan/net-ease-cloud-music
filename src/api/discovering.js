import request from "@/utils/request";

export const findHomePage = () => request('/homepage/block/page','get')