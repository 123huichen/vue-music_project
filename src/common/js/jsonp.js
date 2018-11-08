import Vuejsonp from 'jsonp'

export default function jsonp(url, data, option) {
    url += (url.indexOf('?') < 0 ? '?' : '&') + parmar(data)

    return new Promise((resolve, reject) => {
        Vuejsonp(url, option, (err, data) => {
            if (!err) {
                resolve(data) 
            } else {
                reject(err)
            }
        })
    })
}

function parmar(data) {
    let url = ''
    for (var k in data) {
        let value = data[k] !== undefined ? data[k] : ''
        url += '&' + k + '=' + value
    }
    //substring() 方法用于提取字符串中介于两个指定下标之间的字符。
    //去除url头部的&
    return url ? url.substring(1) : ''
}