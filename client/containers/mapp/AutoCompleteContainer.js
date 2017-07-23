import { connect } from 'react-redux'
import AutoComplete from '~/components/mapp/AutoComplete'
import { search } from '~/actions/asyn/search'

const mapStateToProps = (state, ownProps) => {
    return ({
        searchType: state.inst.search.searchType
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  
})

const AutoCompleteContainer = connect(
    mapStateToProps, mapDispatchToProps
)(AutoComplete)

export default AutoCompleteContainer
