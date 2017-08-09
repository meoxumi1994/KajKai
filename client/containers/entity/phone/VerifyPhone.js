import { connect } from 'react-redux'
import { get } from '~/config/allString'

import { verifyPhone, reUpdatePhone } from '~/actions/asyn/register-store'
import { FilteringPhoneDefaultVietName } from '~/containers/support'

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

const mapDispatchToProps = (dispatch, { phone, data }) => ({
    onVerifyPhone: (code) => {
        dispatch(verifyPhone(FilteringPhoneDefaultVietName(phone), code, data ))
    },
    onChangeCode: (e) => {
        dispatch({ type: 'INST_ENTITY_PHONE_ON_CHANGE_CODE', value: e.target.value })
    },
    downTimeWait: (timewait) => {
        dispatch({ type: 'ENTITY_PHONE_VERITY_PHONE', timewait: timewait - 1 })
    },
    onReUpdatePhone: () => {
        dispatch(updatePhone(FilteringPhoneDefaultVietName(phone)))
    }
})

const mergerProps = (stateProps, dispatchProps, ownProps) => {
    const { timewait, ...anotherState } = stateProps
    const { downTimeWait, ...anotherDispatch } = dispatchProps
    return({
        downTimeWait: () => {
            downTimeWait(timewait)
        },
        timewait: timewait,
        ...ownProps,
        ...anotherState,
        ...anotherDispatch,
    })
}

const VerifyPhoneContainer = connect(
    mapStateToProps, mapDispatchToProps, mergerProps
)(VerifyPhone)

export default VerifyPhoneContainer
