import { connect } from 'react-redux'
import { get } from '~/config/allString'

import Left from '~/components/user/Left'
import { getListImage } from '~/actions/asyn/store'
import { updateUser } from '~/actions/asyn/user'

const mapStateToProps = (state, ownProps) => {
    const g = (lang) => get(state.user.language, lang)
    let isOwner = state.inst.user.index.id == state.user.id
    return({
        ...state.inst.user.index,
        ...state.inst.user.photo,
        isOwner: isOwner,
        language: state.user.language,
        id: state.inst.user.index.id,
        STORE: g('STORE'),
        HOME: g('HOME'),
        STORE_BOLD: g('STORE_BOLD'),
        CREATE_STORE: g('CREATE_STORE'),
        FOLLOW: g('FOLLOW'),
        ABOUT: g('ABOUT'),
        PHOTOS: g('PHOTOS'),
        STORE: g('STORE'),
        INTEREST: g('INTEREST'),
        HAVE_NO_FOLLOW_STORE: g('HAVE_NO_FOLLOW_STORE'),
        HAVE_NO_PHOTO: g('HAVE_NO_PHOTO'),
        FOLLOW_STORE: g('FOLLOW_STORE'),
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    getPhoto: (id) => {
        // dispatch(getListImage('user', id, -1))
        // dispatch(getListImage('postrow', id, -1))
        // dispatch(getListImage('product', id, -1))
    },
    changeLanguage: (language) => {
        dispatch(updateUser({ language : language }))
    },
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
