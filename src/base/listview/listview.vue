<template>
    <scroll class="listview" :data="data" ref="listview">
        <ul>
            <li v-for="(group, index) in data" class="list-group" ref="listGroup" :data-index="index">
                <h2 class="list-group-title">{{group.title}}</h2>
                <ul>
                    <li v-for="item in group.items" class="list-group-item" @click="singerDataList(item)">
                        <img class="avatar" v-lazy="item.avatar"/>
                        <span class="name">{{item.name}}</span>
                    </li>
                </ul>
            </li>
        </ul>
        <div class="list-shortcut" @touchstart="onShortouchstart" @touchmove.stop.prevent="onShortcutTouchMove">
            <ul>
                <li v-for="(item, index) in shortcutList" :data-index="index" class="item" :class="[currentIndex == index ? 'current' : '']">
                    {{item}} 
                </li>
            </ul>
        </div>
    </scroll>
</template>

<script>
import Scroll from '../../base/scroll/scroll'
import {getData} from '../../common/js/dom'

const ANCHOR_HEIGHT = 18 

export default {
    props: {
        data: {
            type: Array,
            default: []
        }
    },
    computed: {
        shortcutList() {
            //map() 方法返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值。
            //语法array.map(function(currentValue,index,arr), thisValue)
            return this.data.map((currentValue) => {
                //substr() 方法可在字符串中抽取从 start 下标开始的指定数目的字符。
                //语法stringObject.substr(start,length)
                return currentValue.title.substr(0, 1)
            })
        }
    },
    data(){
        return {
            currentIndex: 0,
        }
    },
    created() {
        this.touch = {}
        this.listHeight = []
    },
    methods: {
        onShortouchstart(e){   
            //ie9及以下不兼容event.target.dataset对象，请使用event.target.getAttribute('data-xxx')
            const prefix = 'data-'
            let anchorIndex = e.target.getAttribute(prefix + 'index')//getData(e.target, 'index')
            let firstTouch = e.touches[0]
            this.touch.y1 = firstTouch.pageY
            console.log(firstTouch.pageY)
            this.touch.anchorIndex = anchorIndex
            this.currentIndex = anchorIndex
            
            this._scrollTo(anchorIndex)
        },
        onShortcutTouchMove(e) {
            let firstTouch = e.touches[0]
            this.touch.y2 = firstTouch.pageY
            let delta = (this.touch.y2 - this.touch.y1) / ANCHOR_HEIGHT | 0
            //parseInt() 解析一个字符串，并返回一个整数。
            let anchorIndex = parseInt(this.touch.anchorIndex) + delta
            this.currentIndex = anchorIndex
            
            this._scrollTo(anchorIndex)
        },
        _calculateHeight() {
            this.listHeight = []
            const list = this.$refs.listGroup
            let height = 0
            this.listHeight.push(height)
            for(var i=0; i<list.length; i++){
                let item = list[i]
                this.heigth += item.clientHeight
                this.listHeight.push(height)
            }
        },
        _scrollTo(index) {
            if (!index && index !== 0) {
                return
            }
            if (index < 0) {
                index = 0
            }else if (index > this.listHeight.length - 2) {
                index = this.listHeight.length - 2
            }
            this.scrollY = -this.listHeight[index]
            this.$refs.listview.scrollToElement(this.$refs.listGroup[index], 0)
        },
        singerDataList(item) {
            this.$emit('showCityName', item)
        }
    },
    components: {
        Scroll
    },
    watch: {
        data() {
            setTimeout(() => {
                this._calculateHeight()
            },20)
        }
    }
}
</script>

<style lang="stylus" scoped>
 @import "../../common/stylus/variable"

.listview
    position: relative
    width: 100%
    height: 100%
    overflow: hidden
    background: $color-background
    .list-group
      padding-bottom: 30px
      .list-group-title
        height: 30px
        line-height: 30px
        padding-left: 20px
        font-size: $font-size-small
        color: $color-text-l
        background: $color-highlight-background
      .list-group-item
        display: flex
        align-items: center
        padding: 20px 0 0 30px
        .avatar
          width: 50px
          height: 50px
          border-radius: 50%
        .name
          margin-left: 20px
          color: $color-text-l
          font-size: $font-size-medium
    .list-shortcut
      position: absolute
      z-index: 30
      right: 0
      top: 50%
      transform: translateY(-50%)
      width: 20px
      padding: 20px 0
      border-radius: 10px
      text-align: center
      background: $color-background-d
      font-family: Helvetica
      .item
        padding: 3px
        line-height: 1
        color: $color-text-l
        font-size: $font-size-small
        &.current
          color: $color-theme
    .list-fixed
      position: absolute
      top: 0
      left: 0
      width: 100%
      .fixed-title
        height: 30px
        line-height: 30px
        padding-left: 20px
        font-size: $font-size-small
        color: $color-text-l
        background: $color-highlight-background
    .loading-container
      position: absolute
      width: 100%
      top: 50%
      transform: translateY(-50%)
</style>
