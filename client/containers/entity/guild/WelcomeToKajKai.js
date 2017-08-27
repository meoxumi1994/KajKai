import { connect } from 'react-redux'
import { get } from '~/config/allString'

import WelcomToKajKai from '~/components/entity/guild/WelcomeToKajKai'

const mapStateToProps = (state, ownProps) => {
    const g = (lang) => get(state.user.language, lang)
    return({
        isOwner: state.inst.user.index.id == state.user.id,
        WELCOME_TO_KAJKAI: g('WELCOME_TO_KAJKAI'),
        GET_START_BY_FOLLOW: g('GET_START_BY_FOLLOW'),
        GET_START: g('GET_START'),
        GUILD_USER_4: g('GUILD_USER_4'),
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({

})

const WelcomToKajKaiContainer = connect(
    mapStateToProps, mapDispatchToProps
)(WelcomToKajKai)

export default WelcomToKajKaiContainer
