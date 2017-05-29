import { connect } from 'react-redux'
import { get } from '~/config/allString'

import MainPost from '~/components/target/middle/MainPost'

let mylist = []
let oldlist = []
let idstore

const mapStateToProps = (state, ownProps) => {
    const g = (lang) => get(state.user.language, lang)
    const { list, onedit } = state.inst.target.middle.mainpost
    const basicinput = state.inst.entity.input.basicinput
    list.map((item, index) => {
        const { textare } = basicinput[item.id] || basicinput.default
        mylist[index] = { ...list[index], content: textare}
    })
    idstore = state.inst.target.index.id
    let canedit = false
    state.user.storeList.map((item) => canedit = canedit || item.id == idstore)
    return({
        list: list,
        onedit: onedit,
        canedit: canedit,
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    onCreaterow : (list) => {
        list.map((item,index) => {
            if(JSON.stringify(item) != JSON.stringify(oldlist[index])){
                oldlist = {...oldlist, [index]: mylist[index]}
                dispatch( { type: 'ENTITY_ROW_MAINPOSTROW_CREATE', data: item})
            }
        })
    },
    onChooseType : (rowtype) => {
        dispatch( { type: 'TARGET_MIDDLE_MAINPOST_ADD', rowtype: rowtype } )
    },
    onEdit: () => {
        dispatch( { type: 'TARGET_MIDDLE_MAINPOST_ON_EDIT'})
    },
    onSave: () => {
        dispatch( { type: 'TARGET_MIDDLE_MAINPOST_ON_SAVE'})
        dispatch( { type: 'server/CHANGE_STOREMAINPOST', data: { id: idstore, list: mylist }} )
    }
})

const MainPostContainer = connect(
    mapStateToProps, mapDispatchToProps
)(MainPost)

export default MainPostContainer
