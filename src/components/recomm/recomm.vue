<template>
    <div class="recommend">
        <scroll class="recommend-content" ref="scroll" :data="discList">
            <div>
                <div class="slider-wrapper" v-if="recommends.length" ref="">
                    <slider>
                        <div v-for="item in recommends">
                            <a :href="item.linkUrl">
                                <img @load="loadImage" class="needsclick" :src="item.picUrl">
                            </a>
                        </div>
                    </slider>
                </div>
                <div class="recommend-list">
                    <h1 class="list-title">热门歌词推荐</h1>
                    <ul>
                        <li @click="selectItem(item)" class="item" v-for="item in discList">
                            <div class="icon">
                                <img class="icon" v-lazy="item.imgurl" />
                            </div>
                            <div class="text">
                                <h2 class="name" v-html="item.creator.name"></h2>
                                <p class="desc" v-html="item.dissname"></p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="loading-container" v-show="!discList.length">
                <loading></loading>
            </div>
        </scroll>
    </div>
</template>

<script>
import Slider from '../../base/slider/slider'
import Scroll from '../../base/scroll/scroll'
import Loading from '../../base/loading/loading'
import {getRecomm, getSongList} from '../../api/recomm'
import {ERR_OK} from '../../api/config'

export default {
    data() {
        return {
            recommends: [],
            discList: []
        }
    },
    created() {
        this.Get_Recommend()
        this.Get_Songlist()
    },
    methods: {
        Get_Recommend() {
            getRecomm().then((res) => {
                if (res.code === ERR_OK) {
                    this.recommends = res.data.slider
                }
            })
        },
        Get_Songlist() {
            getSongList().then((res) => {
                if (res.code === ERR_OK) {
                    console.log(res.data.list)
                    this.discList = res.data.list
                }
            })
        },
        selectItem(item) {
            
        },
        loadImage() {
            if (!this.cherload) {
                this.$refs.scroll.refresh()
                this.cherload = true
            }
        }
    },
    components: {
        Slider,
        Scroll,
        Loading
    }
}
</script>


<style lang="stylus" scoped>
@import '../../common/stylus/variable';

.recommend
    position : fixed
    width :100%
    top :80px
    bottom :0px
    .recommend-content
        height : 100%
        overflow :hidden
        .slider-wrapper
            position :relative
            widows :100%
            overflow :hidden
        .recommend-list
            .list-title
                height: 65px
                line-height: 65px
                text-align: center
                font-size: $font-size-medium
                color: $color-theme
            .item
                display :flex
                box-sizing :border-box
                align-items :center
                padding 0 20px 20px 20px
                .icon
                    flex :0 0 60px
                    width :60px
                    padding-right :20px
                .text
                    display :flex
                    flex-direction :column
                    justify-content: center
                    flex: 1
                    line-height: 20px
                    overflow :hidden
                    font-size :$font-size-medium
                    .name
                        margin-bottom :10px
                        color :$color-text
                    .desc
                        color :$color-text-d
        .loading-container
            position :absolute
            width :100%
            top :50%
            transform :translateY(-50%)
</style>