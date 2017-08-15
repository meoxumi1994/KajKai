import { connect } from 'react-redux'
import { get } from '~/config/allString'

import ShowDetail from '~/components/ShowDetail'

const mapStateToProps = (state, ownProps) => {
    const g = (lang) => get(state.user.language, lang)
    const showdetail = state.inst.showdetail
    return({
        iswhoing: (state.auth == 'WHO_ING' || state.auth == 'WAIT'),
        isusername: state.user.username,
        ...showdetail
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({

})

const ShowDetailContainer = connect(
    mapStateToProps, mapDispatchToProps
)(ShowDetail)

export default ShowDetailContainer
