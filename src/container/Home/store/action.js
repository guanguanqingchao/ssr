import axios from 'axios'


import {
    CHANGE_HOME_LIST
} from './constant';


const changeList = (data) => ({
    type: CHANGE_HOME_LIST,
    data
})


export const getHomeList = () => {
    //https://jsonplaceholder.typicode.com/posts
    //http://di-mock.xiaojukeji.com/mock/362/tianji-api/v1/driverIncome/diag/listen-mode'
    //浏览器  mock……     ==》   localhost:3000/mock……
    //服务器  mock……     ==》    服务器根目录[SSR]/mock    找不到
    return (dispatch) => {
        return axios.get('/mock/362/tianji-api/v1/driverIncome/diag/listen-mode').then((res) => {
            dispatch(changeList(res.data.data.online_timeline.detail))
        })
    }
}