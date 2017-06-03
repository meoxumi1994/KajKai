import { connect } from 'react-redux'
import { get } from '~/config/allString'

import Store from '~/components/target/middle/Store'

const mapStateToProps = (state, ownProps) => {
    const g = (lang) => get(state.user.language, lang)
    const { id, avatarUrl, coverUrl, storename } = state.inst.target.index
    const { mainPostId } = state.inst.target.index
    return({
        id: id,
        mainPostId: mainPostId,
        avatarUrl: avatarUrl,
        coverUrl: coverUrl,
        storename: storename,
    })
}

const mapDispatchToProps = (dispatch, props) => ({
    onCreateStore: () => {
        
    }
})

const StoreContainer = connect(
    mapStateToProps, mapDispatchToProps
)(Store)

export default StoreContainer
