import { connect } from 'react-redux'
import { get } from '~/config/allString'

import { checkPassword } from '~/containers/support'
import { updatePassword } from '~/actions/asyn/profile/middle'
import RowSecurityProfile from '~/components/profile/middle/RowSecurity'

const mapStateToProps = (state, props) => {
    const g = (lang) => get(state.user.language, lang)
    const { open, modalpassword } = state.inst.profile.middle.index
    const { oldpassword, newpassword, repassword } = state.inst.profile.middle.rowsecurity
    return({
        open: open,
        openmodalpassword: modalpassword,
        isLoading: (state.updateuser == 'UPDATE_PASSWORD_ING'),
        isSuccess: (state.updateuser == 'UPDATE_PASSWORD_SUCCESS'),
        oldpassword: oldpassword,
        newpassword: newpassword,
        repassword: repassword,
        validatebot: checkPassword(newpassword) || (newpassword != repassword) || (newpassword == oldpassword),
        TITLE_WARNING: g(props.title+'_WARNING'),
        NOTE_TITLE: g('NOTE_'+props.title),
        SAVE_CHANGE: g('SAVE_CHANGE'),
        NOTE: g('NOTE'),
        TITLE: g(props.title),
        NO: g('NO'),
        CANCEL: g('CANCEL'),
        EDIT: g('EDIT'),
        CHANGE: g('CHANGE'),
        NOTE_VERIFY_TILLE : g('NOTE_VERIFY_'+props.title),
        OLD_PASSWORD: g('OLD_PASSWORD'),
        NEW_PASSWORD: g('NEW_PASSWORD'),
        RE_PASSWORD: g('RE_PASSWORD'),
        CHECK: g('CHECK'),
        PASSWORD_CHANGE_SUCCESS: g('PASSWORD_CHANGE_SUCCESS'),
        PASSWORD_CHANGE_FAILED: g('PASSWORD_CHANGE_FAILED'),
        CLOSE: g('CLOSE'),
    })
}

const mapDispatchToProps = (dispatch, props) => ({
    onEdit: () => {
        let tmp = []
        tmp[props.itemId] = true
        dispatch({ type: 'PROFILE_MIDDLE_EDIT', open: tmp })
    },
    onCancel: () => {
        dispatch({ type: 'PROFILE_MIDDLE_CANCEL' })
    },
    close: () => {
        dispatch({ type: 'PROFILE_MIDDLE_CLOSE_PASSWORDMODAL'})
    },
    handleChange: (type, value) => {
        dispatch({ type: 'PROFILE_MIDDLE_ROWSECIRITY_HANDLE_CHANGE', value: { [type] : value } })
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
