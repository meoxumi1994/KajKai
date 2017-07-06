import { connect } from 'react-redux'
import { get } from '~/config/allString'

import MinorPost from '~/components/entity/post/MinorPost'

const mapStateToProps = (state, ownProps) => {
    const g = (lang) => get(state.user.language, lang)
    return({
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({

})

const MinorPostContainer = connect(
    mapStateToProps, mapDispatchToProps
)(MinorPost)

export default MinorPostContainer
