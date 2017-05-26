import { connect } from 'react-redux'
import { get } from '~/config/allString'

import Title from '~/components/entity/row/Title'

const mapStateToProps = (state, { id }) => {
    const g = (lang) => get(state.user.language, lang)
    return({
        id: id
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    onChangeBasicInput: (value) => {
        console.log('onChangeBasicInput',value)
    }
})

const TitleContainer = connect(
    mapStateToProps, mapDispatchToProps
)(Title)

export default TitleContainer
