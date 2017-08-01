import { connect } from 'react-redux'
import { get } from '~/config/allString'

import { getIntroduceStore } from '~/actions/asyn/store'
import IntroduceStore from '~/components/entity/post/IntroduceStore'

const mapStateToProps = (state, { storeid }) => {
    const g = (lang) => get(state.user.language, lang)
    const introducestore = state.inst.entity.post.introducestore[storeid]
    return({
        ...introducestore,
        ADDRESS: g('ADDRESS'),
        ADDRESSMAP: g('ADDRESSMAP'),
        CATEGORY: g('CATEGORY'),
        PHONE: g('PHONE'),
        LIKE: g('LIKE'),
        ANOTHER_PEOPLE: g('ANOTHER_PEOPLE'),
        PEOPLE: g('PEOPLE'),
        AND: g('AND'),
        THIS: g('THIS'),
        BY: g('BY'),
        FOLLOW: g('FOLLOW'),
    })
}

const mapDispatchToProps = (dispatch, { storeid }) => ({
    onGetStore: () => {
        dispatch(getIntroduceStore(storeid))
    }
})

const IntroduceStoreContainer = connect(
    mapStateToProps, mapDispatchToProps
)(IntroduceStore)

export default IntroduceStoreContainer
