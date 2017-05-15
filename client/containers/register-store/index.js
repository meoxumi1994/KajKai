import { connect } from 'react-redux'
import { get } from '~/config/allString'

import Registerstore from '~/components/register-store'

const mapStateToProps = (state, ownProps) => {
    const g = (lang) => get(state.user.language, lang)
    return({
        isloading: (state.auth == 'REGISTER_STORE_ING'),
        isusername: state.user.username,
        newindex: state.user.storeList.length - 1,
        registerStoreOK: (state.auth == 'REGISTER_STORE_SUCCESS'),
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    // open after success register
    onOpenStore: (newindex) => {
        dispatch({ type: 'STORE_OPEN' , index: newindex})
    }
})

const RegisterstoreContainer = connect(
    mapStateToProps, mapDispatchToProps
)(Registerstore)

export default RegisterstoreContainer
