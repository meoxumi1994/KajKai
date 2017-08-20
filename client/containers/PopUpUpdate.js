import { connect } from 'react-redux'
import { get } from '~/config/allString'

import PopUpUpdate from '~/components/PopUpUpdate'

const mapStateToProps = (state, ownProps) => {
    const g = (lang) => get(state.user.language, lang)
    return({
        ...state.inst.entity.popup.popupupdate
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    onChange: (key,value) => {
        dispatch({ type: 'INST_POPUP_UPDATE_CHANGE', key, value })
    }
})

const PopUpUpdateContainer = connect(
    mapStateToProps, mapDispatchToProps
)(PopUpUpdate)

export default PopUpUpdateContainer
