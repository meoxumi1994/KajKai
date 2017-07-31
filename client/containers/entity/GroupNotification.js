import { connect } from 'react-redux'
import { get } from '~/config/allString'

import GroupNotification from '~/components/entity/GroupNotification'
import { getNotification } from '~/actions/asyn/entity/notification'

const mapStateToProps = (state, ownProps) => {
    const g = (lang) => get(state.user.language, lang)
    const groupnotification = state.inst.entity.groupnotification
    return({
        ...groupnotification
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    weGetNotification: (offset, statenotification, length) => {
        if(statenotification!= 'GET_NOTIFICATION_ING' && length > 0 )
            dispatch(getNotification(offset, length))
    }
})

const mergerProps = (stateProps, dispatchProps, ownProps) => {
    const { statenotification, notifications, offset, ...anotherState } = stateProps
    const { weGetNotification, ...anotherDispatch } = dispatchProps
    return({
        onGetNotification: () => {
            weGetNotification(offset, statenotification, 10 - notifications.length)
        },
        ...ownProps,
        ...stateProps,
        ...dispatchProps,
    })
}

const GroupNotificationContainer = connect(
    mapStateToProps, mapDispatchToProps, mergerProps,
)(GroupNotification)

export default GroupNotificationContainer
