import { connect } from 'react-redux'
import { get } from '~/config/allString'

import ChooseCroppie from '~/components/entity/thumnail/ChooseCroppie'

const mapStateToProps = (state, ownProps) => {
    const g = (lang) => get(state.user.language, lang)
    return({
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({

})

const ChooseCroppieContainer = connect(
    mapStateToProps, mapDispatchToProps
)(ChooseCroppie)

export default ChooseCroppieContainer
