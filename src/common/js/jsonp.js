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
    return url ? url.substring(1) : ''
}