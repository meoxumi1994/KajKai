import { connect } from 'react-redux'
import { get } from '~/config/allString'

import About from '~/components/store/About'

const mapStateToProps = (state, { id }) => {
    const g = (lang) => get(state.user.language, lang)
    let isOwner = state.user.id == state.inst.user.index.id
    return({
        ...state.user,
        ...state.inst.store.index,
        isOwner: isOwner,
        USER_NAME: g('USER_NAME'),
        EMAIL: g('EMAIL'),
        LANGUAGE: g('LANGUAGE'),
        ADDRESS: g('ADDRESS'),
        PHONE: g('PHONE'),
        AGE: g('AGE'),
        INFO_GENERAL: g('INFO_GENERAL'),
        POSITION_IN_MAP: g('POSITION_IN_MAP'),
        INTERACTION: g('INTERACTION'),
        TOTAL_COMMENT: g('TOTAL_COMMENT'),
        TOTAL_REPLY_COMMENT: g('TOTAL_REPLY_COMMENT'),
        TOTAL_LIKE: g('TOTAL_LIKE'),
        TOTAL_FOLLOW: g('TOTAL_FOLLOW'),
        CREATE_TIME: g('CREATE_TIME'),
        LAST_TIME: g('LAST_TIME'),
        CATEGORY: g('CATEGORY'),
        URL_NAME: g('URL_NAME'),
        STORE_NAME: g('STORE_NAME'),
        categories: state.inst.category,
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({

})

const AboutContainer = connect(
    mapStateToProps, mapDispatchToProps
)(About)

export default AboutContainer
