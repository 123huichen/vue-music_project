import jsonp from '../common/js/jsonp'
import  {commonParmas, options} from './config'
import axios from 'axios'

//轮播图接口
export function getRecomm() {
    const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
    
    //Object.assign()用来合并多个javascript对象
    const data = Object.assign({}, commonParmas, { 
        platform: 'h5',
        uin: 0,
        needNewCode: 1
    })

    return jsonp(url, data, options)
}

//歌单接口
export function getSongList() {
    const url = '/api/getSongList'

    const data = Object.assign({}, commonParmas, {
        platform: 'yqq', // 加引号
        hostUin: 0,
        sin: 0,
        ein: 29,
        sortId: 5,
        needNewCode: 0,
        categoryId: 10000000,
        rnd: Math.random(),
        format: 'json'
    })

    return axios.get(url, {
        params: data
    }).then((res) => {
        return Promise.resolve(res.data)
    })
}