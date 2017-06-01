import { connect } from 'react-redux'
import { get } from '~/config/allString'

import Top from '~/components/store/middle/Top'

const mapStateToProps = (state, ownProps) => {
    const g = (lang) => get(state.user.language, lang)
    const { index } = state.inst.store.index
    const { storename, coverUrl, avatarUrl } = state.user.storeList[index]
    return({
        storename: storename,
        coverUrl: './images/cover.png' || coverUrl,
        avatarUrl: './images/kajkai.png' || avatarUrl,
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    onChangeImage: (e) => {

    }
})

const TopContainer = connect(
    mapStateToProps, mapDispatchToProps
)(Top)

export default TopContainer
