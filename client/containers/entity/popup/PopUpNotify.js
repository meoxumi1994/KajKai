import { connect } from 'react-redux'
import { get } from '~/config/allString'

import { getTime } from '~/containers/support'
import PopUpNotify from '~/components/entity/popup/PopUpNotify'

const mapStateToProps = (state, { id }) => {
    const g = (lang) => get(state.user.language, lang)
    const popupnotification = state.inst.entity.popup.popupnotification[id]
    return({
        ...popupnotification,
        time: getTime(popupnotification.time)
    })
}

const mapDispatchToProps = (dispatch, { id }) => ({
    onClose: () => {
        dispatch({ type: 'INST_ENTITY_POPUP_NOTIFY', id: id, key: 'isclose', value: true })
    }
})

const PopUpNotifyContainer = connect(
    mapStateToProps, mapDispatchToProps
)(PopUpNotify)

export default PopUpNotifyContainer
