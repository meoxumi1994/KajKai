import { connect } from 'react-redux'
import { get } from '~/config/allString'

import Post from '~/components/target/middle/store/Post'

const mapStateToProps = (state, { id }) => {
    const g = (lang) => get(state.user.language, lang)
    const post = state.inst.target.middle.post
    const { list, onedit } = post[id] || post.default
    const basicinput = state.inst.entity.input.basicinput
    const postrow = state.inst.entity.row.postrow
    const idstore = state.inst.target.index.id
    let canedit = false
    state.user.storeList.map((item) => canedit = canedit || item.id == idstore)
    return({
        id: id,
        idstore: idstore,
        basicinput: basicinput,
        postrow: postrow,
        list: list,
        onedit: onedit,
        canedit: canedit,
    })
}

const mapDispatchToProps = (dispatch, { id }) => ({
    onChooseType : (rowid, rowtype) => {
        dispatch( { type: 'TARGET_MIDDLE_POST_ADD', id: id, rowid: rowid, rowtype: rowtype } )
    },
    onEdit: () => {
        dispatch( { type: 'TARGET_MIDDLE_POST_ON_EDIT', id: id })
    },
    onSave: (mylist) => {
        dispatch( { type: 'server/CHANGE_STORE_POST', data: { id: id, list: mylist }} )
    }
})

const mergeProps = (stateProps, dispatchProps, { id }) => {
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
        onSave: () => onSave(mylist),
        onEdit: () => onEdit(),
        onChooseType: (rowtype) => onChooseType( id + '_postrow_' + list.length, rowtype),
    })
}

const PostContainer = connect(
    mapStateToProps, mapDispatchToProps, mergeProps
)(Post)

export default PostContainer
