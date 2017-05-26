import { connect } from 'react-redux'
import { get } from '~/config/allString'

import MainPost from '~/components/store/middle/MainPost'

const mapStateToProps = (state, ownProps) => {
    const g = (lang) => get(state.user.language, lang)
    const { index } = state.inst.store.index
    const currentStore = state.user.storeList[index]
    const { textare, canedit } = state.inst.store.middle.mainpost
    return({
        // storename: storename,
        EDIT: g('EDIT'),
        SAVE: g('SAVE'),
        textare: textare,
        canedit: canedit,
        storename: currentStore.storename,
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    onEdit: () => {

        dispatch({ type: 'STORE_MIDDLE_MAINPOST_EDIT_CLICK'})
    },
    onSave: () => {
        dispatch({ type: 'STORE_MIDDLE_MAINPOST_SAVE_CLICK'})
    },
    handleChange: (type, e) => {
        const value = e.target.value
        dispatch({ type: 'STORE_MIDDLE_HANDLE_MAINPOST_CHANGE', value: { [type] : value }})
    }
})

const MainPostContainer = connect(
    mapStateToProps, mapDispatchToProps
)(MainPost)

export default MainPostContainer
