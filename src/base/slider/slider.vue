<template>
    <div class="slider" ref="slider">
        <div class="slider-group" ref="sliderGroup">
            <slot></slot>
        </div>
        <div class="dots">
            <span class="dot" :class="{active: currentPageIndex === index }" v-for="(item, index) in dots"></span>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
import {addClass} from '../../common/js/dom'

export default {
    props:{
        loop:{
            type:Boolean, //是否循环轮播
            default: true
        },
        autoPlay:{
            type: Boolean, //是否自动播放
            default: true
        },
        interval: {
            type: Number, //轮播时间间隔
            default: 4000
      }
    },
    data() {
        return {
            dots: [],
            currentPageIndex: 0
        }
    },
    mounted() {
        setTimeout(() => {
            this._setSliderWidth()
            this._initSlider()
            this._initDots()

            if (this.autoPlay) {
                this._play()
            }
        },20)
    },
    methods: {
        //
        _setSliderWidth(isResize){
            this.children = this.$refs.sliderGroup.children
            //console.log('_setSliderWidth' + this.children.length)
            let width = 0
            let sliderWidth = this.$refs.slider.clientWidth
            for (let i = 0; i < this.children.length; i++) {
                let child = this.children[i]
                addClass(child, 'slider-item')

                child.style.width = sliderWidth + 'px'
                width += sliderWidth
            }

            if (this.loop && !isResize) {
                width += 2 * sliderWidth
            }
            this.$refs.sliderGroup.style.width = width + 'px'
        },
        //
        _initSlider(){
           // console.log('_initSlider' + this.children.length)
            this.slider = new BScroll(this.$refs.slider, {
                scrollX: true,
                scrollY: false,
                momentum: false,
                snap: {
                    loop: this.loop,
                    threshold: 0.3,
                    speed: 400
                }
            })
            //console.log('_initSlider' + this.children.length)
            this.slider.on('scrollEnd', () => {
                
                let pageIndex = this.slider.getCurrentPage().pageX
                if (this.loop) {
                    pageIndex -= 1
                }
                this.currentPageIndex = pageIndex

                if (this.autoPlay) {
                    this._play()
                }
            })

            this.slider.on('beforeScrollStart', () => {
                if (this.autoPlay) {
                    clearTimeout(this.timer)
                }
            })
        },
        //
        _initDots() {
            this.dots = new Array(this.children.length - 2)
        },
        //
        _play() {
            let pageIndex = this.currentPageIndex + 1
            if (this.loop) {
                pageIndex += 1
            }
            this.timer = setTimeout(() => {
                this.slider.goToPage(pageIndex, 0, 400)
            }, this.interval)
        }
    }
}
</script>

<style lang="stylus" scoped>
@import "../../common/stylus/variable"
.slider
    min-height :1px
    .slider-group
        position :relative
        overflow :hidden
        white-space :nowrap
        .slider-item
            float :left
            box-sizing :border-box
            overflow :hidden
            text-align :center
            a
                display :block
                width :100%
                overflow :hidden
                text-decoration :none
            img
                display :block
                width :100%
    .dots
        position :absolute
        right :0px
        left :0
        bottom :12px
        text-align :center
        font-size :0  
        .dot
            display :inline-block
            margin :0 4px
            width 8px
            height 8px
            border-radius :50%
            background :$color-text-l
            &.active
                width :20px
                border-radius :5px
                background :$color-text-ll  
</style>
