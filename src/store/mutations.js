import * as type from './mutations-type'

const mutations = {
    [type.SET_SINGER] (state, singer) {
        state.singer = singer
    }
}

export default mutations