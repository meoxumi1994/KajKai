import { connect } from 'react-redux'
import { get } from '~/config/allString'

import Store from '~/components/target/middle/Store'

const mapStateToProps = (state, props) => {
    const g = (lang) => get(state.user.language, lang)
    const { avatarUrl, coverUrl, storename } = state.inst.target.index
    return({
        avatarUrl: avatarUrl,
        coverUrl: coverUrl,
        storename: storename,
    })
}

const mapDispatchToProps = (dispatch, props) => ({

})

const StoreContainer = connect(
    mapStateToProps, mapDispatchToProps
)(Store)

export default StoreContainer
