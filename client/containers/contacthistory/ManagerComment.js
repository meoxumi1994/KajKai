import { connect } from 'react-redux'
import { get } from '~/config/allString'

import { getContactUser, getContactStore } from '~/actions/asyn/contacthistory'
import { updateUser } from '~/actions/asyn/user'
import ManagerComment from '~/components/contacthistory/ManagerComment.js'

const mapStateToProps = (state, ownProps) => {
    const g = (lang) => get(state.user.language, lang)
    const managercomment = state.inst.contacthistory.managercomment
    const contact = managercomment.contact[managercomment.currentId]
    const { height } = state.inst.app
    return({
        ...managercomment,
        ...contact,
        height: height,
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    onChange: (key, value) => {
        if(key == 'currentId'){
            dispatch(updateUser({ currentId: value }))
        }
        dispatch({ type: 'INST_CONTACT_HISTORY_CHANGE', key: key, value: value })
    },
    getContact: (type, offset, id, state, length ) => {
        if(type == 'store'){
            if(offset != -2 && state != 'GET_CONTACT_STORE_ING')
                dispatch(getContactStore(offset, id, 20))
        }else{
            if(offset != -2 && state != 'GET_CONTACT_USER_ING')
                dispatch(getContactUser(offset, id, 20 ))
        }
    },
})

const mergerProps = (stateProps, dispatchProps, ownProps) => {
    const { ...anotherState } = stateProps
    const { getContact, ...anotherDispatch } = dispatchProps
    return({
        onGetContact: (type, offset, id, state) => {
            getContact(type, offset, id, state)
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
