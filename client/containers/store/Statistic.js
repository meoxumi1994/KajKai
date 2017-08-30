import { connect } from 'react-redux'
import { get } from '~/config/allString'

import { getStatistic } from '~/actions/asyn/store'
import Statistic from '~/components/store/Statistic'

const mapStateToProps = (state, ownProps) => {
    const g = (lang) => get(state.user.language, lang)
    // console.log('current', (new Date()).getDate(), (new Date()).getMonth())
    const statistic = state.inst.store.statistic
    return({
        STATISTIC: g('STATISTIC'),
        PREVIOUS: g('PREVIOUS'),
        NEXT: g('NEXT'),
        WEEK: g('WEEK'),
        WEEKS: g('WEEKS'),
        MONTH: g('MONTH'),
        ...statistic
    })
}

const mapDispatchToProps = (dispatch, { id }) => ({
    change : (key, value) => {
        dispatch({ type: 'INST_STORE_STATISTIC_CHANGE', key, value })
    },
    wegetStatistic: (current, numday) => {
        let to = new Date(current)
        let from = new Date(current)
        to.setDate(current.getDate())
        from.setDate(current.getDate() - numday)
        dispatch(getStatistic(id, from, to))
    }
})

const mergerProps = (stateProps, dispatchProps, ownProps) => {
    const { current, numday, ...anotherState } = stateProps
    const { change, wegetStatistic, ...anotherDispatch } = dispatchProps
    return({
        onGetStatistic : () => {
            wegetStatistic(current, numday)
        },
        onChange: (key, value) => {
            change(key, value)
            let state = {
                current: current,
                numday: numday,
                [key]: value,
            }
            wegetStatistic(state.current, state.numday)
        },
        ...ownProps,
        ...stateProps,
        ...dispatchProps,
    })
}

const StatisticContainer = connect(
    mapStateToProps, mapDispatchToProps, mergerProps
)(Statistic)

export default StatisticContainer
