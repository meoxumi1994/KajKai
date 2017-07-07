import { connect } from 'react-redux'
import { get } from '~/config/allString'

import VerifyPhone from '~/components/entity/phone/VerifyPhone'

const mapStateToProps = (state, ownProps) => {
    const g = (lang) => get(state.user.language, lang)
    const statePhone = state.inst.entity.phone
    console.log(state.inst.entity.phone)
    return({
        VERIFY_PHONE: g('VERIFY_PHONE'),
        PHONE_VERIFY: g('PHONE_VERIFY'),
        CLOSE: g('CLOSE'),
        statePhone: statePhone,
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({

})

const VerifyPhoneContainer = connect(
    mapStateToProps, mapDispatchToProps
)(VerifyPhone)

export default VerifyPhoneContainer
