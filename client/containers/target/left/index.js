import { connect } from 'react-redux'
import { get } from '~/config/allString'

import Left from '~/components/profile/left'

const mapStateToProps = (state, ownProps) => {
    const g = (lang) => get(state.user.language, lang)
    return({
        CREATE_STORE: g('CREATE_STORE'),
        storeList: state.user.storeList,
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    onStoreClick: (index) => {
        dispatch({ type: 'STORE_OPEN', index: index })
    }
})

const LeftContainer = connect(
    mapStateToProps, mapDispatchToProps
)(Left)

export default LeftContainer
