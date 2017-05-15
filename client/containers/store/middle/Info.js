import { connect } from 'react-redux'
import { get } from '~/config/allString'

import Info from '~/components/store/middle/Info'

const mapStateToProps = (state, ownProps) => {
    const g = (lang) => get(state.user.language, lang)
    return({
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({

})

const InfoContainer = connect(
    mapStateToProps, mapDispatchToProps
)(Info)

export default InfoContainer
