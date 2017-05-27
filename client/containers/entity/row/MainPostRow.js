import { connect } from 'react-redux'
import { get } from '~/config/allString'

import MainPostRow from '~/components/entity/row/MainPostRow'

const mapStateToProps = (state, { id }) => {
    const g = (lang) => get(state.user.language, lang)
    const mainpostrow = state.inst.entity.row.mainpostrow
    const { type, text, images } = mainpostrow[id] || mainpostrow.default
    return({
        id: id,
        type: type,
        text: text,
        images: images,
    })
}

const mapDispatchToProps = (dispatch, { id }) => ({
    onCreate: (data) => {
        // console.log(data)
    }
})

const MainPostRowContainer = connect(
    mapStateToProps, mapDispatchToProps
)(MainPostRow)

export default MainPostRowContainer
