import { connect } from 'react-redux'
import { get } from '~/config/allString'

import GroupImage from '~/components/entity/thumnail/GroupImage'

const mapStateToProps = (state, ownProps) => {
    const g = (lang) => get(state.user.language, lang)
    return({
        EDIT: g('EDIT'),
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({

})

const GroupImageContainer = connect(
    mapStateToProps, mapDispatchToProps
)(GroupImage)

export default GroupImageContainer
