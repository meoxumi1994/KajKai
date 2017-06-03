import { connect } from 'react-redux'
import { get } from '~/config/allString'

import Post from '~/components/target/middle/Post'

const mapStateToProps = (state, ownProps) => {
    const g = (lang) => get(state.user.language, lang)
    const { list, onedit } = state.inst.target.middle.post
    const basicinput = state.inst.entity.input.basicinput
    const postrow = state.inst.entity.row.postrow
    const idstore = state.inst.target.index.id
    let canedit = false
    state.user.storeList.map((item) => canedit = canedit || item.id == idstore)
    const { mainPostId } = state.inst.target.index
    console.log('state.inst.target.index.mainPostId', mainPostId)
    return({
        id: mainPostId,
        idstore: idstore,
        basicinput: basicinput,
        postrow: postrow,
        list: list,
        onedit: onedit,
        canedit: canedit,
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    onChooseType : (rowid, rowtype) => {
        dispatch( { type: 'TARGET_MIDDLE_POST_ADD', rowid: rowid, rowtype: rowtype } )
    },
    onEdit: () => {
        dispatch( { type: 'TARGET_MIDDLE_POST_ON_EDIT'})
    },
    onSave: (idstore, mylist) => {
        dispatch( { type: 'TARGET_MIDDLE_POST_ON_SAVE'})
        dispatch( { type: 'server/CHANGE_STORE_POST', data: { id: idstore, list: mylist }} )
    }
})

const mergeProps = (stateProps, dispatchProps, ownProps) => {
    const { basicinput, list, onedit, canedit, idstore, postrow, ...anotherState} = stateProps
    const { onChooseType, onEdit, onSave } = dispatchProps
    let mylist = [...list]
    mylist = mylist.map((item, index) => {
        const { content } = basicinput[item.id] || basicinput.default
        const { type } = postrow[item.id] || postrow.default
        return { ...item, content: content, type: type }
    })
    return ({
        ...anotherState,
        list: list,
        onedit: onedit,
        canedit: canedit,
        onSave: () => onSave(idstore, mylist),
        onEdit: () => onEdit(),
        onChooseType: (rowtype) => onChooseType('mainstore_row_' + list.length, rowtype),
    })
}

const PostContainer = connect(
    mapStateToProps, mapDispatchToProps, mergeProps
)(Post)

export default PostContainer
