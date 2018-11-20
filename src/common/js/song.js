export default class Song {
    constructor({id, mid, singer, name, album, duration, image, url}) {
        this.id = id
        this.mid = mid
        this.singer = singer
        this.name = name
        this.album = album
        this.duration = duration
        this.image = image
        this.url = url
    }
}


export function createSong(Data) {
    return new Song({
        id: Data.songid,
        mid: Data.songmid,
        name: Data.songname,
        album: Data.albumname,
        duration: Data.interval,
        image: `https://y.gtimg.cn/music/photo_new/T002R300x300M000${Data.albummid}.jpg?max_age=2592000`,
        url: `http://ws.stream.qqmusic.cq.com/${Data.songid}.m4a?fromtag=46`,
        singer: filterSinger(Data.singer)
    })
}

function filterSinger(singer){
    let ret = []
    if (!singer) {
        return ''
    }
    singer.forEach((s) => {
        ret.push(s.name)
    })
    return ret.join('/')
}