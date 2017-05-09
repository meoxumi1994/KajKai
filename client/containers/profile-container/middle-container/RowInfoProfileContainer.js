import { connect } from 'react-redux'
import allString from '~/config/allString'

import { updateUser, updatePhone } from '~/actions/asyn/profile/middle'
import { checkUserName, checkPhone, FilteringPhoneDefaultVietName } from '~/containers/support'
import RowInfoProfile from '~/components/profile/middle/RowInfoProfile'

const mapStateToProps = (state, ownProps) => ({
    g : (lang) => allString.get(state.user.language, lang),
    validatetop: (value) => {
        if(ownProps.itemType == 'username')
            return checkUserName(value)
        if(ownProps.itemType == 'phone')
            return null
        return null
    },
    validatebot: (value) => {
        if(ownProps.itemType == 'username')
            return checkUserName(value)
        if(ownProps.itemType == 'phone')
            return checkPhone(value)
        return null
    },
    isLoading: (state.updateuser == 'UPDATE_PHONE_ING' || state.updateuser == 'UPDATE_USER_ING'),
    open: state.middle.open,
    value: state.user[ownProps.itemType],
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
    onSaveChange: (newvalue) => {
        if(ownProps.itemType == 'phone')
            dispatch(updatePhone(FilteringPhoneDefaultVietName(newvalue)))
        else
            dispatch(updateUser({ [ownProps.itemType] : newvalue }))
    }
})

const RowInfoProfileContainer = connect(
    mapStateToProps, mapDispatchToProps
)(RowInfoProfile)

export default RowInfoProfileContainer
