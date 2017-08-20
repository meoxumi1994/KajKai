import { connect } from 'react-redux'
import { get } from '~/config/allString'

import { getUserOverView } from '~/actions/asyn/user'
import UserOverview from '~/components/entity/row/UserOverview'

const mapStateToProps = (state, { id }) => {
    const g = (lang) => get(state.user.language, lang)
    const introducestore = state.inst.entity.row.useroverview[id]
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
    onGetUser: () => {
        dispatch(getUserOverView(id))
    }
})

const UserOverviewContainer = connect(
    mapStateToProps, mapDispatchToProps
)(UserOverview)

export default UserOverviewContainer
