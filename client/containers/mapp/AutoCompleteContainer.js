import { connect } from 'react-redux'
import AutoComplete from '~/components/mapp/AutoComplete'
import { search } from '~/actions/asyn/search'


const mapStateToProps = (state, ownProps) => {
    const autocomplete = state.inst.map.autocomplete
    return ({
        ...autocomplete,
        searchType: state.inst.search.searchType
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    onChange: (key, value) => {
        dispatch({ type: 'INST_MAP_AUTOCOMPLETE_CHANGE', key, value })
    }
})

const AutoCompleteContainer = connect(
    mapStateToProps, mapDispatchToProps
)(AutoComplete)

export default AutoCompleteContainer
