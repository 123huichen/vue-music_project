<template>
    <transition name="slide">
        <music-list :songs="songs" :bg-image="bgImage" :title="title"></music-list>
    </transition>  
</template>

<script>
import {mapGetters} from 'vuex'
import {getSingerDataList} from '../../api/singer'
import {ERR_OK} from '../../api/config'
import {createSong} from '../../common/js/song'
import  MusicList from '../music-list/music-list'

export default {
    data() {
        return {
            songs: []
        }
    },
    computed:{
        title() {
            return this.singer.name
        },
        bgImage() {
            return this.singer.avatar
        },
        ...mapGetters([
            'singer'
        ])
    },
    created(){
        console.log(this.singer)
        this._Getsingerdatalist()
    },
    methods: {
        _Getsingerdatalist() {
            if (!this.singer.id) {
                this.$router.push('/singer')
                return
            }
            getSingerDataList(this.singer.id).then((res) => {
                if (res.code == ERR_OK) {
                    this.songs = this._normlizesong(res.data.list)
                    console.log(this.songs);
                }
            })
        },
        _normlizesong(list) {
            let ret = []
            list.forEach((item) => {
                let {musicData} = item
                if (musicData.songid && musicData.albummid) {
                    ret.push(createSong(musicData))
                }
            })
            return ret
        }
    },
    components: {
        MusicList
    }
}
</script>

<style lang="stylus" scoped>
@import "../../common/stylus/variable"

.singer-datalist
    position :fixed
    z-index :100
    top :0px
    bottom :0px
    left :0px
    right :0px
    background :$color-background

.slide-enter-active, .slide-leave-active
    transition :all 0.3s

.slide-enter, .slide-leave-to 
    transform :translate3d(100%, 0, 0)

</style>
