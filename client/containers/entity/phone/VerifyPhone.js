import { connect } from 'react-redux'
import { get } from '~/config/allString'

import { verifyPhone } from '~/actions/asyn/register-store'

import VerifyPhone from '~/components/entity/phone/VerifyPhone'

const mapStateToProps = (state, ownProps) => {
    const g = (lang) => get(state.user.language, lang)
    const phone = state.inst.entity.phone
    return({
        VERIFY_PHONE: g('VERIFY_PHONE'),
        PHONE_VERIFY: g('PHONE_VERIFY'),
        PHONE: g('PHONE'),
        PHONE_USED: g('PHONE_USED'),
        PHONE_FAILED: g('PHONE_FAILED'),
        CLOSE: g('CLOSE'),
        CONFIRM: g('CONFIRM'),
        CODE_FAILED: g('CODE_FAILED'),
        ...phone,
    })
}

const mapDispatchToProps = (dispatch, { phone }) => ({
    onVerifyPhone: (code) => {
        dispatch(verifyPhone(phone, code))
    },
    onChangeCode: (e) => {
        dispatch({ type: 'INST_ENTITY_PHONE_ON_CHANGE_CODE', value: e.target.value })
    }
})

const VerifyPhoneContainer = connect(
    mapStateToProps, mapDispatchToProps
)(VerifyPhone)

export default VerifyPhoneContainer
