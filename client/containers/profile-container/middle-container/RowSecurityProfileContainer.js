import { connect } from 'react-redux'
import allString from '~/config/allString'

import { checkPassword } from '~/containers/support'
import { updatePassword } from '~/actions/asyn/profile/middle'
import RowSecurityProfile from '~/components/profile/middle/RowSecurityProfile'

const mapStateToProps = (state, ownProps) => ({
    g : (lang) => allString.get(state.user.language, lang),
    open: state.middle.open,
    openmodalpassword: state.middle.modalpassword,
    isLoading: (state.updateuser == 'UPDATE_PASSWORD_ING'),
    isSuccess: (state.updateuser == 'UPDATE_PASSWORD_SUCCESS'),
    validatebot: (value) => {
        if(ownProps.itemType == 'password')
            return checkPassword(value)
        return null;
    },
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    onEdit: () => {
        let tmp = []
        tmp[ownProps.itemId] = true
        dispatch({ type: 'PROFILE_MIDDLE_EDIT', open: tmp })
    },
    onCancel: () => {
        dispatch({ type: 'PROFILE_MIDDLE_CANCEL' })
    },
    close: () => {
        dispatch({ type: 'PROFILE_MIDDLE_CLOSE_PASSWORDMODAL' })
    },
    onSaveChange : (oldpassword,newpassword,repassword) => {
        if(oldpassword != newpassword && newpassword == repassword){
            dispatch(updatePassword(oldpassword,newpassword))
        }else{
            dispatch({ type: 'PROFILE_MIDDLE_OPEN_PASSWORDMODAL' })
        }
    }
})

const RowSecurityProfileContainer = connect(
    mapStateToProps, mapDispatchToProps
)(RowSecurityProfile)

export default RowSecurityProfileContainer
