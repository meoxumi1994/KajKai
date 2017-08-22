import { connect } from 'react-redux'
import { get } from '~/config/allString'

import Left from '~/components/user/Left'
import { getListImage } from '~/actions/asyn/store'

const mapStateToProps = (state, ownProps) => {
    const g = (lang) => get(state.user.language, lang)
    return({
        ...state.inst.user.index,
        ...state.inst.user.photo,
        id: state.inst.user.index.id,
        STORE: g('STORE'),
        HOME: g('HOME'),
        CREATE_STORE: g('CREATE_STORE'),
        FOLLOW: g('FOLLOW'),
        ABOUT: g('ABOUT'),
        PHOTOS: g('PHOTOS')
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    getPhoto: (id) => {
        dispatch(getListImage('user', id, -1))
        // dispatch(getListImage('postrow', id, -1))
        // dispatch(getListImage('product', id, -1))
    }
})

const mergerProps = (stateProps, dispatchProps, ownProps) => {
    const { id, ...anotherState } = stateProps
    const { getPhoto, ...anotherDispatch } = dispatchProps
    return({
        onGetPhoto: () => {
            getPhoto(id)
        },
        ...ownProps,
        ...anotherState,
        ...anotherDispatch,
    })
}

const LeftContainer = connect(
    mapStateToProps, mapDispatchToProps, mergerProps
)(Left)

export default LeftContainer
