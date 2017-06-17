import { connect } from 'react-redux'
import { get } from '~/config/allString'

import SellPost from '~/components/entity/SellPost'

const mapStateToProps = (state, ownProps) => {
    const g = (lang) => get(state.user.language, lang)
    return({
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({

})

const SellPostContainer = connect(
    mapStateToProps, mapDispatchToProps
)(SellPost)

export default SellPostContainer
