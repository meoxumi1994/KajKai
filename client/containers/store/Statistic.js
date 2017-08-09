import { connect } from 'react-redux'
import { get } from '~/config/allString'

import { getStatistic } from '~/actions/asyn/store'
import Statistic from '~/components/store/Statistic'

const mapStateToProps = (state, ownProps) => {
    const g = (lang) => get(state.user.language, lang)
    return({
        
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({

})

const StatisticContainer = connect(
    mapStateToProps, mapDispatchToProps
)(Statistic)

export default StatisticContainer
