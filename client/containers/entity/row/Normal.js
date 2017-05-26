import { connect } from 'react-redux'
import { get } from '~/config/allString'

import Normal from '~/components/entity/row/Normal'

const mapStateToProps = (state, ownProps) => {
    const g = (lang) => get(state.user.language, lang)
    return({
        id: ownProps.id
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    onChangeBasicInput: (value) => {
        console.log('onChangeBasicInput',value)
    }
})

const NormalContainer = connect(
    mapStateToProps, mapDispatchToProps
)(Normal)

export default NormalContainer
