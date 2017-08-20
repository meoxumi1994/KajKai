import { connect } from 'react-redux'
import { get } from '~/config/allString'

import { getBeFollow } from '~/containers/support'
import Left from '~/components/store/Left'

const mapStateToProps = (state, ownProps) => {
    const g = (lang) => get(state.user.language, lang)
    const user = state.user
    let isOwner = false
    for(let i=0; i< state.user.storeList.length ; i++){
        if(state.user.storeList[i].id == state.inst.store.index.id){
            isOwner = true
            break
        }
    }
    return({
        id: state.inst.store.index.id,
        beFollow: getBeFollow(state.inst.store.index.follows, state.user.id),
        isOwner: isOwner,
        storeList: user.storeList,
        username: user.username,
        STORE: g('STORE'),
        HOME: g('HOME'),
        CREATE_STORE: g('CREATE_STORE'),
        FOLLOW: g('FOLLOW'),
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    follow: (storeid) => {
        dispatch({ type: 'server/FOLLOW', data: { type: 'store', id: storeid }})
    }
})

const mergerProps = (stateProps, dispatchProps, ownProps) => {
    const { id, ...anotherState } = stateProps
    const { follow, ...anotherDispatch } = dispatchProps
    return({
        onFollow: () => {
            follow(id)
        },
        ...ownProps,
        ...stateProps,
        ...dispatchProps,
    })
}

const LeftContainer = connect(
    mapStateToProps, mapDispatchToProps, mergerProps
)(Left)

export default LeftContainer
