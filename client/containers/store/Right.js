import { connect } from 'react-redux'
import { get } from '~/config/allString'

import Right from '~/components/store/Right'

const mapStateToProps = (state, ownProps) => {
    const g = (lang) => get(state.user.language, lang)
    return({
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({

})

const RightContainer = connect(
    mapStateToProps, mapDispatchToProps
)(Right)

export default RightContainer
