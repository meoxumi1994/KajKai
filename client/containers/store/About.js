import { connect } from 'react-redux'
import { get } from '~/config/allString'

import About from '~/components/store/About'

const mapStateToProps = (state, { id }) => {
    const g = (lang) => get(state.user.language, lang)
    let isOwner = state.user.id == state.inst.user.index.id
    return({
        ...state.inst.store.index,
        isOwner: isOwner,
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({

})

const AboutContainer = connect(
    mapStateToProps, mapDispatchToProps
)(About)

export default AboutContainer
