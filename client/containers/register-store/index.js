import { connect } from 'react-redux'
import { get } from '~/config/allString'

import { authAction } from '~/actions/sync/auth'
import { getCategory } from '~/actions/asyn/register-store'
import Registerstore from '~/components/register-store'

const mapStateToProps = (state, ownProps) => {
    const g = (lang) => get(state.user.language, lang)
    return({
        isloading: (state.auth == 'REGISTER_STORE_ING'),
        iswhoing: (state.auth == 'WHO_ING' || state.auth == 'WAIT'),
        isusername: state.user.username,
        registerStoreOK: (state.auth == 'REGISTER_STORE_SUCCESS'),
        CREATE_STORE: g('CREATE_STORE'),
        CREATE_STORE_DESCRIPTION: g('CREATE_STORE_DESCRIPTION'),
        CREATE_STORE_DESCRIPTION_0: g('CREATE_STORE_DESCRIPTION_0'),
        CREATE_STORE_DESCRIPTION_1: g('CREATE_STORE_DESCRIPTION_1'),
        CREATE_STORE_DESCRIPTION_2: g('CREATE_STORE_DESCRIPTION_2'),
        CREATE_STORE_DESCRIPTION_3: g('CREATE_STORE_DESCRIPTION_3'),
        CREATE_STORE_DESCRIPTION_4: g('CREATE_STORE_DESCRIPTION_4'),
        CREATE_STORE_DESCRIPTION_5: g('CREATE_STORE_DESCRIPTION_5'),
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    onGetCategory: () => {
        dispatch(getCategory())
    }
})

const RegisterstoreContainer = connect(
    mapStateToProps, mapDispatchToProps
)(Registerstore)

export default RegisterstoreContainer
