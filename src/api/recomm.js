import jsonp from '../common/js/jsonp'
import  {commonParmas, options} from './config'

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
