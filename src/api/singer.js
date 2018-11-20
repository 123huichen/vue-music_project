import jsonp from '../common/js/jsonp'
//import axios from 'axios'
import  {commonParmas, options} from './config'

//获取歌手列表
export function getSingerList() {
    const url = 'https://c.y.qq.com/v8/fcg-bin/v8.fcg' 

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


export function getSingerDataList(singermid) {
    const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg'

    const data = Object.assign({}, commonParmas, {
        singermid: singermid,
        hostUin: 0,
        needNewCode: 0,
        platform: 'yqq',
        order: 'listen',
        begin: 0,
        num: 80,
        songstatus: 1,
    })

    return jsonp(url, data, options)
}