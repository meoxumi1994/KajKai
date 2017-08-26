import { connect } from 'react-redux'
import { get } from '~/config/allString'

import Interest from '~/components/user/Interest'

const mapStateToProps = (state, ownProps) => {
    const g = (lang) => get(state.user.language, lang)
    const { id, avatarUrl, coverUrl, username } = state.inst.user.index
    const { scrollTop, scrollLeft, height } = state.inst.app

    return({
        ...state.inst.user.interest,
        id: id,
        avatarUrl: avatarUrl,
        stateUser: state.inst.user.index.stateUser,
        auth: state.auth,
        coverUrl: coverUrl,
        username: username,
        scrollTop: scrollTop,
        scrollLeft: scrollLeft,
        height: height,
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    needPost: (id, offset) => {
        dispatch(getInterest(id, offset ))
    }
})

const mergerProps = (stateProps, dispatchProps, ownProps) => {
    const { id, offset, ...anotherState } = stateProps
    const { needPost, ...anotherDispatch } = dispatchProps
    return({
        onNeedPost: () => {
            needPost(id, offset)
        },
        ...ownProps,
        ...stateProps,
        ...dispatchProps,
    })
}

const InterestContainer = connect(
    mapStateToProps, mapDispatchToProps, mergerProps
)(Interest)

export default InterestContainer
