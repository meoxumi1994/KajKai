import { connect } from 'react-redux'
import { get } from '~/config/allString'

import ShowDetail from '~/components/ShowDetail'

const mapStateToProps = (state, ownProps) => {
    const g = (lang) => get(state.user.language, lang)
    const showdetail = state.inst.showdetail
    return({
        ...showdetail
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({

})

const ShowDetailContainer = connect(
    mapStateToProps, mapDispatchToProps
)(ShowDetail)

export default ShowDetailContainer
