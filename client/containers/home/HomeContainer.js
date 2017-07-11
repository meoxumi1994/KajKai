import { connect } from 'react-redux'
import Home from '~/components/home/Home'
import { search } from '~/actions/asyn/search'

const mapStateToProps = (state, ownProps) => {
    return ({
        search: state.inst.search
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  onSearchQueryUpdated: (searchQuery) => {
    dispatch(search(searchQuery))
  }
})

const HomeContainer = connect(
    mapStateToProps, mapDispatchToProps
)(Home)

export default HomeContainer
