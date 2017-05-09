import { connect } from 'react-redux'
import allString from '~/config/allString'
import PhoneInfo from '~/components/profile/middle/PhoneInfo'

const mapStateToProps = (state, ownProps) => ({
    g : (lang) => allString.get(state.user.language, lang),
    open: state.middle.modalphone,
    isused: (state.updateuser == 'UPDATE_PHONE_USED'),
    issuccess: (state.updateuser == 'UPDATE_PHONE_PENDING'),
    newvalue: state.middle.newvalue,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    close: () => {
        dispatch({ type: 'PROFILE_MIDDLE_CLOSE_PHONEMODAL' })
    }
})

const PhoneInfoContainer = connect(
    mapStateToProps, mapDispatchToProps
)(PhoneInfo)

export default PhoneInfoContainer
