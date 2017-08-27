import { connect } from 'react-redux'
import { get } from '~/config/allString'

import { getListImage } from '~/actions/asyn/entity/suggestphoto'
import SuggestPhoto from '~/components/entity/show/SuggestPhoto'

const mapStateToProps = (state, { type, id } ) => {
    const g = (lang) => get(state.user.language, lang)
    const suggestphoto = state.inst.entity.suggestphoto[id + type] || { offset: -1 }
    return({
        ...suggestphoto,
        PHOTO_USER: g('PHOTO_USER'),
        PHOTO_STORE: g('PHOTO_STORE'),
        PHOTO_POST: g('PHOTO_POST'),
        PHOTO_PRODUCT: g('PHOTO_PRODUCT'),
        NO_IMAGE_OF_THIS_TYPE: g('NO_IMAGE_OF_THIS_TYPE'),
    })
}

const mapDispatchToProps = (dispatch, { type, id, name }) => ({
    weGetImageList: (type, id, offset) => {
        dispatch(getListImage(type, id, offset))
    }
})

const mergerProps = (stateProps, dispatchProps, ownProps) => {
    const { offset, ...anotherState } = stateProps
    const { weGetImageList, ...anotherDispatch } = dispatchProps
    return({
        onGetImageList: () => {
            weGetImageList(ownProps.type, ownProps.id, offset)
        },
        ...ownProps,
        ...stateProps,
        ...dispatchProps,
    })
}

const SuggestPhotoContainer = connect(
    mapStateToProps, mapDispatchToProps, mergerProps
)(SuggestPhoto)

export default SuggestPhotoContainer
