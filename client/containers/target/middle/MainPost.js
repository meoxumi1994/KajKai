import { connect } from 'react-redux'
import { get } from '~/config/allString'

import MainPost from '~/components/target/middle/MainPost'

const mapStateToProps = (state, ownProps) => {
    const g = (lang) => get(state.user.language, lang)
    const { list, onedit } = state.inst.target.middle.mainpost
    return({
        list: list,
        onedit: onedit,
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    onItemChange: (data) => {
        dispatch( { type: 'TARGET_MIDDLE_MAINPOST_EDIT_ROW', data})
    },
    onChooseType : (rowtype) => {
        console.log('onChooseType', rowtype)
        dispatch( { type: 'TARGET_MIDDLE_MAINPOST_ADD', rowtype: rowtype } )
    },
    onEdit: () => {
        dispatch( { type: 'TARGET_MIDDLE_MAINPOST_ON_EDIT'})
    },
    onSave: (list) => {
        dispatch( { type: 'TARGET_MIDDLE_MAINPOST_ON_SAVE'})
    }
})

const MainPostContainer = connect(
    mapStateToProps, mapDispatchToProps
)(MainPost)

export default MainPostContainer
