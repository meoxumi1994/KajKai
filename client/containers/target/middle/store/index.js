import { connect } from 'react-redux'
import { get } from '~/config/allString'

import Store from '~/components/target/middle/store'

const mapStateToProps = (state, ownProps) => {
    const g = (lang) => get(state.user.language, lang)
    const { id, avatarUrl, coverUrl, storename } = state.inst.target.index
    const { mainPostId } = state.inst.target.index
    const { scrollTop, scrollLeft, height } = state.inst.app
    return({
        id: id,
        mainPostId: mainPostId,
        avatarUrl: avatarUrl,
        coverUrl: coverUrl,
        storename: storename,
        scrollTop: scrollTop,
        scrollLeft: scrollLeft,
        height: height,
        sellposts: [1,1,1,1],
        minorposts: [1,1,1,1,1,1,1,1],
    })
}

const mapDispatchToProps = (dispatch, props) => ({
    onCreateStore: () => {

    },
    onNeedSellPost: () => {
        // console.log('onNeedSellPost')
    },
    onNeedMinorPost: () => {
        // console.log('onNeedMinorPost')
    }
})

const StoreContainer = connect(
    mapStateToProps, mapDispatchToProps
)(Store)

export default StoreContainer
