import { connect } from 'react-redux'
import { get } from '~/config/allString'

import Interest from '~/components/user/Interest'

const mapStateToProps = (state, ownProps) => {
    const g = (lang) => get(state.user.language, lang)
    const { id, avatarUrl, coverUrl, username } = state.inst.user.index
    const { scrollTop, scrollLeft, height } = state.inst.app
    return({
        id: id,
        avatarUrl: avatarUrl,
        coverUrl: coverUrl,
        username: username,
        scrollTop: scrollTop,
        scrollLeft: scrollLeft,
        height: height,
        sellposts: [1,1,1,1],
        minorposts: [1,1,1,1,1,1,1,1],
    })
}

const mapDispatchToProps = (dispatch, props) => ({
    onCreateuser: () => {

    },
    onNeedSellPost: () => {
        // console.log('onNeedSellPost')
    },
    onNeedMinorPost: () => {
        // console.log('onNeedMinorPost')
    }
})

const InterestContainer = connect(
    mapStateToProps, mapDispatchToProps
)(Interest)

export default InterestContainer
