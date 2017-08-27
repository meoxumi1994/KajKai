import { connect } from 'react-redux'
import { get } from '~/config/allString'

import Addphoto from '~/components/entity/thumnail/AddPhoto'
import { getListImage } from '~/actions/asyn/store'

const mapStateToProps = (state, ownProps) => {
    const g = (lang) => get(state.user.language, lang)
    return({
        ...state.user,
        userid: state.user.id,
        ...state.inst.entity.thumnail.addphoto,
        SUGGEST_PHOTO: g('SUGGEST_PHOTO'),
        UPDATE_PHOTO: g('UPDATE_PHOTO'),
        CLOSE: g('CLOSE'),
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    onChange: (key, value) => {
        dispatch({ type: 'INST_ENTITY_THUMNAIL_ADDPHOTO_CHANGE', key: key, value: value })
    },
    getPhoto: (id) => {
        dispatch(getListImage('store', id, -1))
        dispatch(getListImage('postrow', id, -1))
        dispatch(getListImage('product', id, -1))
        dispatch(getListImage('user', id, -1))
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

const AddphotoContainer = connect(
    mapStateToProps, mapDispatchToProps, mergerProps
)(Addphoto)

export default AddphotoContainer
