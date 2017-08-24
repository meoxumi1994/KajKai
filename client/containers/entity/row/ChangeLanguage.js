import { connect } from 'react-redux'
import { get } from '~/config/allString'

import { updateUser } from '~/actions/asyn/user'
import ChangeLanguage from '~/components/entity/row/ChangeLanguage'

const mapStateToProps = (state, ownProps) => {
    const g = (lang) => get(state.user.language, lang)
    return({
        username : state.user.username,
        language: state.user.language
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    weChangeLanguage: (language, username) => {
        if(username)
            dispatch(updateUser({ language : language }))
        dispatch({ type: 'UPDATE_USER_SUCCESS', user: { 'language' : language } })
    },
})

const mergerProps = (stateProps, dispatchProps, ownProps) => {
    const { username, ...anotherState } = stateProps
    const { weChangeLanguage, ...anotherDispatch } = dispatchProps
    return({
        changeLanguage: (language) => {
            weChangeLanguage(language, username)
        },
        ...ownProps,
        ...stateProps,
        ...dispatchProps,
    })
}

const ChangeLanguageContainer = connect(
    mapStateToProps, mapDispatchToProps, mergerProps
)(ChangeLanguage)

export default ChangeLanguageContainer
