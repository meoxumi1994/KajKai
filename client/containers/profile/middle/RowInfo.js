import { connect } from 'react-redux'
import { get } from '~/config/allString'

import { updateUser, updatePhone } from '~/actions/asyn/profile/middle'
import { checkUserName, checkPhone, FilteringPhoneDefaultVietName, checkAge } from '~/containers/support'
import RowInfoProfile from '~/components/profile/middle/RowInfo'

const mapStateToProps = (state, props) => {
    const g = (lang) => get(state.user.language, lang)
    const { open } = state.inst.profile.middle.index
    const { newvalue } = state.inst.profile.middle.rowinfo
    const validatetop = () => {
        if(props.itemType == 'username')
            return checkUserName(newvalue)
        return null
    }
    const validatebot = () => {
        if(props.itemType == 'username')
            return checkUserName(newvalue)
        if(props.itemType == 'phone')
            return checkPhone(newvalue)
        if(props.itemType == 'yearOfBirth')
            return checkAge(newvalue)
        return null
    }
    const value = () => {
        if(props.itemType == 'yearOfBirth')
            return new Date().getFullYear() - state.user[props.itemType]
        return state.user[props.itemType]
    }
    return ({
        validatetop: validatetop(),
        validatebot: validatebot(),
        isLoading: (state.updateuser == 'UPDATE_PHONE_ING' || state.updateuser == 'UPDATE_USER_ING'),
        open: open[props.itemId] == true,
        value: value(),
        newvalue: open[props.itemId] && newvalue,
        TITLE_WARNING: g(props.title+'_WARNING'),
        NOTE_TITLE: g('NOTE_'+props.title),
        SAVE_CHANGE: g('SAVE_CHANGE'),
        NOTE: g('NOTE'),
        TITLE: g(props.title),
        NO: g('NO'),
        CANCEL: g('CANCEL'),
        EDIT: g('EDIT'),
    })
}

const mapDispatchToProps = (dispatch, props) => ({
    onEdit: (value) => {
        let tmp = []
        tmp[props.itemId] = true
        if(!value) value = ''
        dispatch({ type: 'PROFILE_MIDDLE_EDIT', open: tmp, newvalue: value})
    },
    onCancel: () => {
        dispatch({ type: 'PROFILE_MIDDLE_CANCEL' })
    },
    onSaveChange: (newvalue) => {
        if(props.itemType == 'phone')
            dispatch(updatePhone(FilteringPhoneDefaultVietName(newvalue)))
        else
        if(props.itemType == 'yearOfBirth'){
            dispatch(updateUser({ 'yearOfBirth' : new Date().getFullYear() - newvalue }))
        }else {
            dispatch(updateUser({ [props.itemType] : newvalue }))
        }
    },
    handleChange: (value) => {
        dispatch({ type: 'PROFILE_MIDDLE_ROWINFO_HANDLE_CHANGE', newvalue: value })
    }
})

const RowInfoProfileContainer = connect(
    mapStateToProps, mapDispatchToProps
)(RowInfoProfile)

export default RowInfoProfileContainer
