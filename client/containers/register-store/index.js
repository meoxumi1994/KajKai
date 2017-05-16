import { connect } from 'react-redux'
import { get } from '~/config/allString'

import { authAction } from '~/actions/sync/auth'
import Registerstore from '~/components/register-store'

const mapStateToProps = (state, ownProps) => {
    const g = (lang) => get(state.user.language, lang)
    return({
        isloading: (state.auth == 'REGISTER_STORE_ING'),
        iswhoing: (state.auth == 'WHO_ING' || state.auth == 'WAIT'),
        isusername: state.user.username,
        registerStoreOK: (state.auth == 'REGISTER_STORE_SUCCESS'),
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({

})

const RegisterstoreContainer = connect(
    mapStateToProps, mapDispatchToProps
)(Registerstore)

export default RegisterstoreContainer
