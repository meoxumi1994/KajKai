import { connect } from 'react-redux'
import { get } from '~/config/allString'

import GroupImages from '~/components/entity/row/GroupImages'

const mapStateToProps = (state, { id }) => {
    const g = (lang) => get(state.user.language, lang)
    return({
        id: id,
    })
}

const mapDispatchToProps = (dispatch, { id, onChange }) => ({
    onChangeBasicInput: (value) => {
        onChange({text: value, id})
    }
})

const GroupImagesContainer = connect(
    mapStateToProps, mapDispatchToProps
)(GroupImages)

export default GroupImagesContainer
