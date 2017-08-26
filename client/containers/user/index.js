import { connect } from 'react-redux'

import User from '~/components/user'
import { getUser, getInterest } from '~/actions/asyn/user'

const mapStateToProps = (state, ownProps ) => {
    const { scrollTop, scrollLeft, height } = state.inst.app
    return({
        ...state.inst.user.index,
        userid: ownProps.location.pathname.split('/')[2],
        iswhoing: (state.auth == 'WHO_ING' || state.auth == 'WAIT' || !state.inst.user.index.id ),
        isusername: state.user.username,
        scrollTop: scrollTop,
        scrollLeft: scrollLeft,
        height: height,
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    onGetUser: (id) => {
        dispatch(getUser(id))
    }
})


const UserContainer = connect(
    mapStateToProps, mapDispatchToProps
)(User)

export default UserContainer
