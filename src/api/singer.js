import jsonp from '../common/js/jsonp'
//import axios from 'axios'
import  {commonParmas, options} from './config'

//获取歌手列表
export function getSingerList() {
    const url = 'https://c.y.qq.com/v8/fcg-bin/v8.fcg' 
    
    // var data_assign = {
    //     "comm":{"ct":24,"cv":10000},
    //     "singerList":{
    //         "module":"Music.SingerListServer",
    //         "method":"get_singer_list",
    //         "param":{
    //             "area":-100,
    //             "sex":-100,
    //             "genre":-100,
    //             "index":-100,
    //             "sin":0,
    //             "cur_page":1
    //         }
    //     }
    // }

    // data_assign = JSON.stringify(data_assign)

    //Object.assign()用来合并多个javascript对象
    // const data = Object.assign({}, commonParmas, {
    //     platform: 'yqq',
    //     needNewCode: 0,
    //     loginUin: 0,
    //     hostUin: 0,
    //     data: data_assign
    // })
    const data = Object.assign({}, commonParmas, {
        channel: 'singer',
        page: 'list',
        key: 'all_all_all',
        pagesize: 100,
        pagenum: 1,
        hostUin: 0,
        needNewCode: 0,
        platform: 'yqq'
    })

    return jsonp(url, data, options)
}