<template>
    <transition name="slide">
        <div class="singer-datalist"></div>
    </transition>  
</template>

<script>
import {mapGetters} from 'vuex'

export default {
    computed:{
        ...mapGetters([
            'singer'
        ])
    },
    created(){
        console.log(this.singer)
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
