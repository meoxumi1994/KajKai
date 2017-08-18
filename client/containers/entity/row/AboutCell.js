import { connect } from 'react-redux'
import { get } from '~/config/allString'

import AboutCell from '~/components/entity/row/AboutCell'

const mapStateToProps = (state, ownProps) => {
    const g = (lang) => get(state.user.language, lang)
    return({
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({

})

const AboutCellContainer = connect(
    mapStateToProps, mapDispatchToProps
)(AboutCell)

export default AboutCellContainer
