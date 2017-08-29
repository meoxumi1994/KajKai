import { connect } from 'react-redux'
import { get } from '~/config/allString'

import CreateInterest from '~/components/entity/modal/CreateInterest'
import { createNewInterest } from '~/actions/asyn/interest'

const mapStateToProps = (state, ownProps) => {
    const g = (lang) => get(state.user.language, lang)
    const createinterest = state.inst.entity.modal.createinterest
    return({
        ...createinterest,
        CREATE_INTEREST: g('CREATE_INTEREST'),
        CLOSE: g('CLOSE'),
        DONE: g('DONE'),
        CHOOSE_YOUR_INTEREST: g('CHOOSE_YOUR_INTEREST'),
        CHOOSE_YOUR_LOCATION: g('CHOOSE_YOUR_LOCATION'),
        GET_CURRENT_POSITION: g('GET_CURRENT_POSITION'),
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    onChange: (key, value ) => {
        dispatch({ type: 'INST_ENTITY_MODAL_CREATE_INTEREST', key, value })
    },
    createInterest: (id, position) => {
        dispatch(createNewInterest(id, position))
    }
})

const mergerProps = (stateProps, dispatchProps, ownProps) => {
    const { secondCategory, position, ...anotherState } = stateProps
    const { createInterest, ...anotherDispatch } = dispatchProps
    return({
        onCreateInterest: () => {
            createInterest(secondCategory.id, position)
        },
        ...ownProps,
        ...stateProps,
        ...dispatchProps,
    })
}

const CreateInterestContainer = connect(
    mapStateToProps, mapDispatchToProps, mergerProps
)(CreateInterest)

export default CreateInterestContainer
