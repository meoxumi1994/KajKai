import { connect } from 'react-redux'
import { get } from '~/config/allString'

import GroupInterest from '~/components/entity/GroupInterest'
import { getInterest } from '~/actions/asyn/interest'

const mapStateToProps = (state, ownProps) => {
    const g = (lang) => get(state.user.language, lang)
    const groupinterest = state.inst.entity.groupinterest
    return({
        ...groupinterest,
        HAVE_NO_INTEREST: g('HAVE_NO_INTEREST'),
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    weGetInterest: (offset) => {
        dispatch(getInterest(offset))
    }
})

const mergerProps = (stateProps, dispatchProps, ownProps) => {
    const { offset, ...anotherState } = stateProps
    const { weGetInterest, ...anotherDispatch } = dispatchProps
    return({
        onGetInterest: () => {
            weGetInterest(offset)
        },
        ...ownProps,
        ...stateProps,
        ...dispatchProps,
    })
}

const GroupInterestContainer = connect(
    mapStateToProps, mapDispatchToProps, mergerProps
)(GroupInterest)

export default GroupInterestContainer
