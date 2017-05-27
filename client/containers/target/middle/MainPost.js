import { connect } from 'react-redux'
import { get } from '~/config/allString'

import MainPost from '~/components/target/middle/MainPost'

const mapStateToProps = (state, ownProps) => {
    const g = (lang) => get(state.user.language, lang)
    const { list, onedit } = state.inst.target.middle.mainpost
    const { id } = state.inst.target.index
    const basicinput = state.inst.entity.input.basicinput
    list.map((item, index) => {
        const { textare } = basicinput[item.id] || basicinput.default
        list[index] = {...list[index], text: textare}
    })
    return({
        idstore: id,
        list: list,
        onedit: onedit,
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    onCreaterow : (list) => {
        list.map((item) => {
            dispatch( { type: 'ENTITY_ROW_MAINPOSTROW_CREATE', data: item })
        })
    },
    onChooseType : (rowtype) => {
        dispatch( { type: 'TARGET_MIDDLE_MAINPOST_ADD', rowtype: rowtype } )
    },
    onEdit: () => {
        dispatch( { type: 'TARGET_MIDDLE_MAINPOST_ON_EDIT'})
    },
    onSave: (idstore, list) => {
        console.log({ type: 'server/CHANGE_STOREMAINPOST', data: { id: idstore, list: list }})
        dispatch( { type: 'TARGET_MIDDLE_MAINPOST_ON_SAVE'})
        dispatch( { type: 'server/CHANGE_STOREMAINPOST', data: { id: idstore, list: list }} )
    }
})

const MainPostContainer = connect(
    mapStateToProps, mapDispatchToProps
)(MainPost)

export default MainPostContainer
