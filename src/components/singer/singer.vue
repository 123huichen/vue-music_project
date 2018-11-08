<template>
    <div class="singer" ref="">
        <list-view ></list-view>
    </div>
</template>

<script>
import {getSingerList} from '../../api/singer'
import {ERR_OK} from '../../api/config'

export default {
    data() {
        return {
            singers: []
        }
    },
    created() {
        this.Get_SingerList()
    },
    methods: {
        Get_SingerList() {
            getSingerList().then((res) => {
                if (res.code === ERR_OK) {
                    console.log(res.data.list)
                    this.singers = res.data.list
                }
            })
        }
    }
}
</script>


<style lang="stylus" scoped>
.singer
    position: fixed
    top: 88px
    bottom: 0
    width: 100%
</style>