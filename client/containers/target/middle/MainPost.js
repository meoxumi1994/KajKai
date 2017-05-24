import { connect } from 'react-redux'
import { get } from '~/config/allString'

import MainPost from '~/components/target/middle/MainPost'

const mapStateToProps = (state, ownProps) => {
    const g = (lang) => get(state.user.language, lang)
    return({
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({

})

const MainPostContainer = connect(
    mapStateToProps, mapDispatchToProps
)(MainPost)

export default MainPostContainer
