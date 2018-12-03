import * as type from './mutations-type'

const mutations = {
    [type.SET_SINGER] (state, singer) {
        state.singer = singer
    },
    [type.SET_PLAYING_STATE] (state, flag) {
        state.playing = flag
    },
    [type.SET_FULL_SCREEN] (state, flag) {
        state.fullScreen = flag
    },
    [type.SET_PLAYLIST] (state, list) {
        state.playlist = list
    },
    [type.SET_SEQUENCE_LIST] (state, list) {
        state.sequenceList = list
    },
    [type.SET_PLAY_MODE] (state, mode) {
        state.mode = mode
    },
    [type.SET_CURRENT_INDEX] (state, index) {
        state.currentIndex = index
    }
}

export default mutations