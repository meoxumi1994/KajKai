import { connect } from 'react-redux'
import { get } from '~/config/allString'

import { getIntroduceStore } from '~/actions/asyn/store'
import StoreOverview from '~/components/entity/row/StoreOverview'

const mapStateToProps = (state, { id }) => {
    const g = (lang) => get(state.user.language, lang)
    const introducestore = state.inst.entity.post.introducestore[id]
    return({
        ...introducestore,
        FOLLOW: g('FOLLOW'),
        BY: g('BY'),
        PEOPLE: g('PEOPLE'),
        LIKE: g('LIKE'),
        PHONE: g('PHONE'),
    })
}

const mapDispatchToProps = (dispatch, { id }) => ({
    onGetStore: () => {
        dispatch(getIntroduceStore(id))
    }
})

const StoreOverviewContainer = connect(
    mapStateToProps, mapDispatchToProps
)(StoreOverview)

export default StoreOverviewContainer
