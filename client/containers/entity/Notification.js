import { connect } from 'react-redux'
import { get } from '~/config/allString'

import Notification from '~/components/entity/Notification'

const mapStateToProps = (state, ownProps) => {
    const g = (lang) => get(state.user.language, lang)
    const notification = state.inst.entity.notification
    return({

    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({

})

const NotificationContainer = connect(
    mapStateToProps, mapDispatchToProps
)(Notification)

export default NotificationContainer
