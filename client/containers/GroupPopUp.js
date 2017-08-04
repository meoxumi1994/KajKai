import { connect } from 'react-redux'
import { get } from '~/config/allString'

import GroupPopUp from '~/components/GroupPopUp'

const mapStateToProps = (state, ownProps) => {
    const g = (lang) => get(state.user.language, lang)
    const grouppopup = state.inst.grouppopup
    return({
        ...grouppopup
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({

})

const GroupPopUpContainer = connect(
    mapStateToProps, mapDispatchToProps
)(GroupPopUp)

export default GroupPopUpContainer
