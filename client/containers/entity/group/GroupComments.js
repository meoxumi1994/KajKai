import { connect } from 'react-redux'
import { get } from '~/config/allString'

import GroupComments from '~/components/entity/group/GroupComments'

const mapStateToProps = (state, { myavatar, id }) => {
    const g = (lang) => get(state.user.language, lang)
    const groupcomments = state.inst.entity.group.groupcomments
    const data = groupcomments[id] || groupcomments.default
    return({
        ...data,
        id: id,
        myavatar: myavatar,
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({

})

const mergerProps = (stateProps, dispatchProps, ownProps) => {
    const { ...anotherState } = stateProps
    const { ...anotherDispatch } = dispatchProps
    return({
        ...ownProps,
        ...anotherState,
        ...anotherDispatch,
    })
}

const GroupCommentsContainer = connect(
    mapStateToProps, mapDispatchToProps, mergerProps
)(GroupComments)

export default GroupCommentsContainer
