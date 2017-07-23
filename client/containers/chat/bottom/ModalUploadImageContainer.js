import { connect } from 'react-redux'
import { get } from '~/config/allString'

import ModalUploadImage from '~/components/chat/bottom/ModalUploadImage'

const mapStateToProps = (state, ownProps) => {
    return ({

    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    close: () => {

    },
    handleImageChange: (e) => {

    },
    sendImage: (mesId, user, imageList) => {

    }
})

const ModalUploadImageContainer = connect(
    mapStateToProps, mapDispatchToProps
)(ModalUploadImage)

export default ModalUploadImageContainer
