import { connect } from 'react-redux'
import { get } from '~/config/allString'

import Middle from '~/components/target/middle/user'

const mapStateToProps = (state, ownProps) => {
    const g = (lang) => get(state.user.language, lang)
    const { id } = state.inst.target.index
    return({
        id: id,
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    onUpdateCover: () => {

    },
    onUpdateAvatar: () => {

    }
})

const MiddleContainer = connect(
    mapStateToProps, mapDispatchToProps
)(Middle)

export default MiddleContainer
