import { connect } from 'react-redux'
import { get } from '~/config/allString'

import Middle from '~/components/target/middle'

const mapStateToProps = (state, ownProps) => {
    const g = (lang) => get(state.user.language, lang)
    const { type } = state.inst.target.index
    return({
        type: type,
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
