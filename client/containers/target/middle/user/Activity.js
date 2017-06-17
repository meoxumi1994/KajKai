import { connect } from 'react-redux'
import { get } from '~/config/allString'

import Activity from '~/components/target/middle/user/Activity'

const mapStateToProps = (state, ownProps) => {
    const g = (lang) => get(state.user.language, lang)
    return({
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({

})

const ActivityContainer = connect(
    mapStateToProps, mapDispatchToProps
)(Activity)

export default ActivityContainer
