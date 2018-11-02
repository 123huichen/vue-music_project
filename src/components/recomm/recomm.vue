<template>
    <div class="recommend">
        <div class="recommend-content">
            <div class="slider-wrapper"></div>
            <div class="recommend-list">
                <h1 class="list-title">热门歌词推荐</h1>
                <ul></ul>
            </div>
        </div>
    </div>
</template>

<script>
import {getRecomm} from '../../api/recomm'
import {ERR_OK} from '../../api/config'

export default {
    data() {},
    created() {
        this.Get_Recommend()
    },
    methods: {
        Get_Recommend() {
            getRecomm().then((res) => {
                if (res.code === ERR_OK) {
                    console.log(res.data.slider)
                }
            })
        }
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
</style>