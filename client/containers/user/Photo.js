import { connect } from 'react-redux'
import { get } from '~/config/allString'

import Photo from '~/components/user/Photo'
import { getListImage } from '~/actions/asyn/store'

const mapStateToProps = (state, ownProps) => {
    const g = (lang) => get(state.user.language, lang)
    return({
        id: state.inst.user.index.id,
        ...state.inst.user.photo
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

const PhotoContainer = connect(
    mapStateToProps, mapDispatchToProps, mergerProps
)(Photo)

export default PhotoContainer
