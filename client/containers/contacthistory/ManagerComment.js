import { connect } from 'react-redux'
import { get } from '~/config/allString'

import { getContactUser, getContactStore } from '~/actions/asyn/contacthistory'
import ManagerComment from '~/components/contacthistory/ManagerComment.js'

const mapStateToProps = (state, ownProps) => {
    const g = (lang) => get(state.user.language, lang)
    return({
        ...state.user,
        ...state.inst.contacthistory,
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    onChange: (key, value) => {
        dispatch({ type: 'INST_CONTACT_HISTORY_CHANGE', key: key, value: value })
    },
    onGetContact: (offset, useroffset, currentId) => {
        // if(currentId){
        //     dispatch(getContactStore(offset[currentId], currentId))
        // }else{
        //     dispatch(getContactUser(useroffset))
        // }
    }
})

const mergerProps = (stateProps, dispatchProps, ownProps) => {
    const { currentId, offset, useroffset, ...anotherState } = stateProps
    const { getContact, ...anotherDispatch } = dispatchProps
    return({
        ...ownProps,
        ...stateProps,
        ...dispatchProps,
    })
}

const ManagerCommentContainer = connect(
    mapStateToProps, mapDispatchToProps, mergerProps
)(ManagerComment)

export default ManagerCommentContainer
