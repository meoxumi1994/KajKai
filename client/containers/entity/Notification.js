import { connect } from 'react-redux'
import { get } from '~/config/allString'
import { getTime } from '~/containers/support'

import { updateNotification } from '~/actions/asyn/entity/notification'
import Notification from '~/components/entity/Notification'

const mapStateToProps = (state, { id }) => {
    const g = (lang) => get(state.user.language, lang)
    const notification = state.inst.entity.notification[id]
    return({
        ...notification,
        time: getTime(notification.time, state.user.language)
    })
}

const mapDispatchToProps = (dispatch, { id }) => ({
    clickNotification: () => {
        dispatch(updateNotification(id))
    }
})

const NotificationContainer = connect(
    mapStateToProps, mapDispatchToProps
)(Notification)

export default NotificationContainer
