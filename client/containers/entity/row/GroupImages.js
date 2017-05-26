import { connect } from 'react-redux'
import { get } from '~/config/allString'

import GroupImages from '~/components/entity/row/GroupImages'

const mapStateToProps = (state, ownProps) => {
    const g = (lang) => get(state.user.language, lang)
    return({
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    
})

const GroupImagesContainer = connect(
    mapStateToProps, mapDispatchToProps
)(GroupImages)

export default GroupImagesContainer
