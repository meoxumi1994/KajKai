import { connect } from 'react-redux'
import { get } from '~/config/allString'

import MainPost from '~/components/target/middle/MainPost'

const mapStateToProps = (state, ownProps) => {
    const g = (lang) => get(state.user.language, lang)
    const { list, onedit } = state.inst.target.middle.mainpost
    const basicinput = state.inst.entity.input.basicinput
    const mainpostrow = state.inst.entity.row.mainpostrow
    const idstore = state.inst.target.index.id
    let canedit = false
    state.user.storeList.map((item) => canedit = canedit || item.id == idstore)
    return({
        idstore: idstore,
        basicinput: basicinput,
        mainpostrow: mainpostrow,
        list: list,
        onedit: onedit,
        canedit: canedit,
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    onChooseType : (rowid, rowtype) => {
        dispatch( { type: 'TARGET_MIDDLE_MAINPOST_ADD', rowid: rowid, rowtype: rowtype } )
    },
    onEdit: () => {
        dispatch( { type: 'TARGET_MIDDLE_MAINPOST_ON_EDIT'})
    },
    onSave: (idstore, mylist) => {
        dispatch( { type: 'TARGET_MIDDLE_MAINPOST_ON_SAVE'})
        dispatch( { type: 'server/CHANGE_STOREMAINPOST', data: { id: idstore, list: mylist }} )
    }
})

const mergeProps = (stateProps, dispatchProps, ownProps) => {
    const { basicinput, list, onedit, canedit, idstore, mainpostrow } = stateProps
    const { onChooseType, onEdit, onSave } = dispatchProps
    let mylist = [...list]
    mylist = mylist.map((item, index) => {
        const { content } = basicinput[item.id] || basicinput.default
        const { type } = mainpostrow[item.id] || mainpostrow.default
        return { ...item, content: content, type: type }
    })
    return ({
        list: list,
        onedit: onedit,
        canedit: canedit,
        onSave: () => onSave(idstore, mylist),
        onEdit: () => onEdit(),
        onChooseType: (rowtype) => onChooseType('mainstore_row_' + list.length, rowtype),
    })
}

const MainPostContainer = connect(
    mapStateToProps, mapDispatchToProps, mergeProps
)(MainPost)

export default MainPostContainer
