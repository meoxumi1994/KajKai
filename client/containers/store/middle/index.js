import { connect } from 'react-redux'
import { get } from '~/config/allString'

import Middle from '~/components/store/middle'

const mapStateToProps = (state, ownProps) => {
    const g = (lang) => get(state.user.language, lang)

    return({
        
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({
})

const MiddleContainer = connect(
    mapStateToProps, mapDispatchToProps
)(Middle)

export default MiddleContainer
