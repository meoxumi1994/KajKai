import { connect } from 'react-redux'
import allString from '~/config/allString'
import { get } from '~/config/allString'
import PhoneInfo from '~/components/profile/middle/PhoneInfo'

const mapStateToProps = (state, ownProps) => {
    const g = (lang) => get(state.user.language, lang)
    const { code, modalphone, newvalue} = state.inst.profile.middle.phoneinfo
    return({
        open: modalphone,
        code: code,
        isused: (state.updateuser == 'UPDATE_PHONE_USED'),
        issuccess: (state.updateuser == 'UPDATE_PHONE_PENDING'),
        newvalue: newvalue,
        CHECK: g('CHECK'),
        PHONE_USED: g('PHONE_USED'),
        PHONE_VERIFY: g('PHONE_VERIFY'),
        CLOSE: g('CLOSE'),
        PHONE_FAILED: g('PHONE_FAILED'),
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    close: () => {
        dispatch({ type: 'PROFILE_MIDDLE_CLOSE_PHONEMODAL' })
    },
    handleChange: (value) => {
        dispatch({ type: 'PROFILE_MIDDLE_PHONEINFO_HANDLE_CHANGE', value: value })
    }
})

const PhoneInfoContainer = connect(
    mapStateToProps, mapDispatchToProps
)(PhoneInfo)

export default PhoneInfoContainer
