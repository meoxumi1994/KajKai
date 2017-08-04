import { connect } from 'react-redux'
import { get } from '~/config/allString'

import DropDownNotification from '~/components/entity/DropDownNotification'
import { getNotification } from '~/actions/asyn/entity/notification'

const mapStateToProps = (state, ownProps) => {
    const g = (lang) => get(state.user.language, lang)
    return({
        ...state.user,
        ...state.inst.entity.groupnotification,
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    onGetMoreNotification: (offset, statenotification) => {
        if(statenotification != 'GET_NOTIFICATION_ING' && offset != -2 ){
            // console.log('getMoreNotification', offset, statenotification )
            dispatch(getNotification(offset, 4))
        }
    },
    clickNotification: () => {
        dispatch({ type: 'INST_ENTITY_GROUP_NOTIFICATION', key: 'numUnreaded', value: 0 })
    }
})

const mergerProps = (stateProps, dispatchProps, ownProps) => {
    const { offset, statenotification, ...anotherState } = stateProps
    const { onGetMoreNotification, ...anotherDispatch } = dispatchProps
    return({
        getMoreNotification: () => {
            onGetMoreNotification(offset, statenotification)
        },
        statenotification: statenotification,
        ...ownProps,
        ...anotherState,
        ...anotherDispatch,
    })
}


const DropDownNotificationContainer = connect(
    mapStateToProps, mapDispatchToProps, mergerProps
)(DropDownNotification)

export default DropDownNotificationContainer
