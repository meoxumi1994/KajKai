import { connect } from 'react-redux'
import { get } from '~/config/allString'

import GroupComments from '~/components/GroupComments'

const mapStateToProps = (state, { id }) => {
    const g = (lang) => get(state.user.language, lang)
    return({

    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({

})

const mergerProps = (stateProps, dispatchProps, ownProps) => (
    const { } = stateProps
    const { } = dispatchProps
    return({

    })
)

const GroupCommentsContainer = connect(
    mapStateToProps, mapDispatchToProps, mergerProps
)(GroupComments)

export default GroupCommentsContainer
