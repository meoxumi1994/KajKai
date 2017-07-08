import { connect } from 'react-redux'
import { get } from '~/config/allString'

import { verifyPhone } from '~/actions/asyn/register-store'

import VerifyPhone from '~/components/entity/phone/VerifyPhone'

const mapStateToProps = (state, ownProps) => {
    const g = (lang) => get(state.user.language, lang)
    const statePhone = state.inst.entity.phone
    return({
        VERIFY_PHONE: g('VERIFY_PHONE'),
        PHONE_VERIFY: g('PHONE_VERIFY'),
        PHONE: g('PHONE'),
        PHONE_USED: g('PHONE_USED'),
        PHONE_FAILED: g('PHONE_FAILED'),
        CLOSE: g('CLOSE'),
        statePhone: statePhone,
        CONFIRM: g('CONFIRM'),
        CODE_FAILED: g('CODE_FAILED'),
    })
}

const mapDispatchToProps = (dispatch, { phone }) => ({
    onVerifyPhone: (code) => {
        dispatch(verifyPhone(phone, code))
    }
})

const VerifyPhoneContainer = connect(
    mapStateToProps, mapDispatchToProps
)(VerifyPhone)

export default VerifyPhoneContainer
