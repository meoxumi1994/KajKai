import { connect } from 'react-redux'
import { get } from '~/config/allString'
import { getTime } from '~/containers/support'

import Notification from '~/components/entity/Notification'

const mapStateToProps = (state, { id }) => {
    const g = (lang) => get(state.user.language, lang)
    const notification = state.inst.entity.notification[id]
    return({
        ...notification,
        time: getTime(notification.time)
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({

})

const NotificationContainer = connect(
    mapStateToProps, mapDispatchToProps
)(Notification)

export default NotificationContainer
