import { connect } from 'react-redux'
import { get } from '~/config/allString'

import GuildUser from '~/components/entity/guild/GuildUser'

const mapStateToProps = (state, ownProps) => {
    const g = (lang) => get(state.user.language, lang)
    return({
        isOwner: state.inst.user.index.id == state.user.id,
        GUILD_USER_1: g('GUILD_USER_1'),
        GUILD_USER_2: g('GUILD_USER_2'),
        GUILD_USER_3: g('GUILD_USER_3'),
        GUILD_USER_4: g('GUILD_USER_4'),
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({

})

const GuildUserContainer = connect(
    mapStateToProps, mapDispatchToProps
)(GuildUser)

export default GuildUserContainer
