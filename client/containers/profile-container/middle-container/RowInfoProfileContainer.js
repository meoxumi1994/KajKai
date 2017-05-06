import { connect } from 'react-redux'
import allString from '~/config/allString'

import { updateUser } from '~/actions/asyn/profile/middle'
import { checkUserName } from '~/containers/support'
import RowInfoProfile from '~/components/profile/middle/RowInfoProfile'

const mapStateToProps = (state, ownProps) => ({
    g : (lang) => allString.get(state.user.language, lang),
    // validate: (username) => checkUserName(username),
    updateuser: state.updateuser,
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
        dispatch(updateUser({
            [ownProps.itemType] : newvalue
        }))
    }
})

const RowInfoProfileContainer = connect(
    mapStateToProps, mapDispatchToProps
)(RowInfoProfile)

export default RowInfoProfileContainer
