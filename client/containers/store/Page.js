import { connect } from 'react-redux'
import { get } from '~/config/allString'

import Page from '~/components/store/Page'

const mapStateToProps = (state, ownProps) => {
    const g = (lang) => get(state.user.language, lang)
    const store = state.inst.store.index
    const { scrollTop, scrollLeft, height } = state.inst.app
    return({
        ...store,
        sellposts: [1,1,1,1],
        minorposts: [1,1,1,1,1,1,1,1],
        BY: g('BY'),
        LIKE : g('LIKE'),
        FOLLOW : g('FOLLOW'),
        ADDRESSMAP : g('ADDRESSMAP'),
        ADDRESS : g('ADDRESS'),
        CATEGORY : g('CATEGORY'),
        PHONE : g('PHONE'),
        ANOTHER_PEOPLE: g('ANOTHER_PEOPLE'),
        AND: g('AND'),
        THIS: g('THIS'),
        PEOPLE: g('PEOPLE'),
    })
}

const mapDispatchToProps = (dispatch, props) => ({
    onCreateStore: () => {

    },
    onNeedSellPost: () => {
        // console.log('onNeedSellPost')
    },
    onNeedMinorPost: () => {
        // console.log('onNeedMinorPost')
    }
})

const PageContainer = connect(
    mapStateToProps, mapDispatchToProps
)(Page)

export default PageContainer
