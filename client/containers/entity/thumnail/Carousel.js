import { connect } from 'react-redux'
import { get } from '~/config/allString'

import Carousel from '~/components/entity/thumnail/Carousel'

const mapStateToProps = (state, ownProps) => {
    const g = (lang) => get(state.user.language, lang)
    return({
        EDIT: g('EDIT'),
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({

})

const CarouselContainer = connect(
    mapStateToProps, mapDispatchToProps
)(Carousel)

export default CarouselContainer
