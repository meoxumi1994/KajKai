import { connect } from 'react-redux'
import { get } from '~/config/allString'

import MainPost from '~/components/target/middle/MainPost'

const mapStateToProps = (state, ownProps) => {
    const g = (lang) => get(state.user.language, lang)
    const { list } = state.inst.target.middle.mainpost
    return({
        list: list
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    onChooseType : (rowtype) => {
        console.log('onChooseType', rowtype)
        dispatch( { type: 'TARGET_MIDDLE_MAINPOST_ADD', rowtype: rowtype } )
    }
})

const MainPostContainer = connect(
    mapStateToProps, mapDispatchToProps
)(MainPost)

export default MainPostContainer
