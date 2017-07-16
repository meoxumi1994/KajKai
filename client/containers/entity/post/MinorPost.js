import { connect } from 'react-redux'
import { get } from '~/config/allString'

import MinorPost from '~/components/entity/post/MinorPost'

const mapStateToProps = (state, {id}) => {
    const g = (lang) => get(state.user.language, lang)
    const minorpost = state.inst.entity.minorpost[id]
    return({
        ...minorpost,
    })
}

const mapDispatchToProps = (dispatch, {id}) => ({
    onChange : (key, value) => {
        dispatch({ type: 'INST_ENTITY_MINOR_POST', id: id, key: key, value: value })
    }
})

const MinorPostContainer = connect(
    mapStateToProps, mapDispatchToProps
)(MinorPost)

export default MinorPostContainer
