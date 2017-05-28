import { connect } from 'react-redux'
import { get } from '~/config/allString'

import ShowTextArea from '~/components/entity/show/ShowTextArea'

const mapStateToProps = (state, ownProps) => {
    const g = (lang) => get(state.user.language, lang)
    return({
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({

})

const ShowTextAreaContainer = connect(
    mapStateToProps, mapDispatchToProps
)(ShowTextArea)

export default ShowTextAreaContainer
