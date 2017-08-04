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
    getContact: (offset, useroffset, currentId, userState, storeState ) => {
        if(currentId){
            if(offset[currentId] != -2 && storeState != 'GET_CONTACT_STORE_ING')
                dispatch(getContactStore(offset[currentId], currentId, 1 ))
        }else{
            if(useroffset != -2 && userState != 'GET_CONTACT_USER_ING')
                dispatch(getContactUser(useroffset, 1 ))
        }
    }
})

const mergerProps = (stateProps, dispatchProps, ownProps) => {
    const { currentId, offset, useroffset, userState, storeState, ...anotherState } = stateProps
    const { getContact, ...anotherDispatch } = dispatchProps
    return({
        onGetContact: (offset, useroffset, currentId) => {
            getContact(offset, useroffset, currentId, userState, storeState )
        },
        ...ownProps,
        ...stateProps,
        ...dispatchProps,
    })
}

const ManagerCommentContainer = connect(
    mapStateToProps, mapDispatchToProps, mergerProps
)(ManagerComment)

export default ManagerCommentContainer
