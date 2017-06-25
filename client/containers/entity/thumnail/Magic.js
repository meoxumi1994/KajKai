import { connect } from 'react-redux'
import { get } from '~/config/allString'

import Magic from '~/components/entity/thumnail/Magic'

const mapStateToProps = (state, ownProps) => {
    const g = (lang) => get(state.user.language, lang)
    return({
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({

})

const MagicContainer = connect(
    mapStateToProps, mapDispatchToProps
)(Magic)

export default MagicContainer
