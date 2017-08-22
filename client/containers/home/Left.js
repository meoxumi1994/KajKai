import { connect } from 'react-redux'
import { get } from '~/config/allString'

import Left from '~/components/home/Left'
import { updateUser } from '~/actions/asyn/user'

const mapStateToProps = (state, ownProps) => {
    const g = (lang) => get(state.user.language, lang)
    const user = state.user
    return({
        ...user,
        STORE: g('STORE'),
        STORE_BOLD: g('STORE_BOLD'),
        HOME: g('HOME'),
        BASIC: g('BASIC'),
        CREATE_STORE: g('CREATE_STORE'),
        SETTING_BOLD: g('SETTING_BOLD'),
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    changeLanguage: (language) => {
        dispatch(updateUser({ language : language }))
    },
})

const LeftContainer = connect(
    mapStateToProps, mapDispatchToProps
)(Left)

export default LeftContainer
