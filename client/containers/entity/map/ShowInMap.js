import { connect } from 'react-redux'
import { get } from '~/config/allString'

import ShowInMap from '~/components/entity/map/ShowInMap'

const mapStateToProps = (state, ownProps) => {
    const g = (lang) => get(state.user.language, lang)
    return({
        CLOSE: g('CLOSE'),
        GET_CURRENT_POSITION: g('GET_CURRENT_POSITION'),
        MAP: g('MAP'),
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({

})

const ShowInMapContainer = connect(
    mapStateToProps, mapDispatchToProps
)(ShowInMap)

export default ShowInMapContainer
