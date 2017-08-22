import { connect } from 'react-redux'

import User from '~/components/user'
import { getUser, getInterest } from '~/actions/asyn/user'

const mapStateToProps = (state, ownProps ) => {
    const { scrollTop, scrollLeft, height } = state.inst.app
    return({
        ...state.inst.user.index,
        iswhoing: ((state.auth == 'WHO_ING' || state.auth == 'WAIT') && state.inst.user.index.id ),
        isusername: state.user.username,
        scrollTop: scrollTop,
        scrollLeft: scrollLeft,
        height: height,
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    getUser: (stateUser, id) => {
        if(ownProps.location.pathname.split('/')[2] != id && (stateUser == 'WAIT' || stateUser == 'USER_GET_SUCCESS')){
            dispatch(getUser(ownProps.location.pathname.split('/')[2]))
        }
    }
})

const mergerProps = (stateProps, dispatchProps, ownProps) => {
    const { stateUser, id, ...anotherState } = stateProps
    const { getUser, ...anotherDispatch } = dispatchProps
    return({
        onGetUser: () => {
            getUser(stateUser, id)
        },
        ...ownProps,
        ...stateProps,
        ...dispatchProps,
    })
}

const UserContainer = connect(
    mapStateToProps, mapDispatchToProps, mergerProps
)(User)

export default UserContainer
