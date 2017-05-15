import { connect } from 'react-redux'
import { get } from '~/config/allString'

import { registerStore } from '~/actions/asyn/register-store'
import { checkPhone } from '~/containers/support'
import Right from '~/components/register-store/Right'

const mapStateToProps = (state, ownProps) => {
    const g = (lang) => get(state.user.language, lang)
    const { isclick, storename, address, phone, category } = state.inst.registerstore.right
    return({
        STORE: g('STORE'),
        ENTER_STORE: g('ENTER_STORE'),
        STORE_NAME_WARNING: g('STORE_NAME_WARNING'),
        ENTER_ADDRESS: g('ENTER_ADDRESS'),
        ADDRESS_WARNING: g('ADDRESS_WARNING'),
        PHONE_STORE: g('PHONE_STORE'),
        PHONE_WARNING: g('PHONE_WARNING'),
        ENTER_CATEGORY: g('ENTER_CATEGORY'),
        CATEGORY_WARNING: g('CATEGORY_WARNING'),
        storename: storename,
        address: address,
        phone: phone,
        category: category,
        warningstorename: isclick && !storename,
        warningaddress: isclick && !address,
        warningphone: isclick && checkPhone(phone),
        warningcategory: isclick && !category,
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    handleChange: (type, value) => {
        dispatch({ type: 'REGISTER_STORE_RIGHT_HANDLE_CHANGE', value : { [type] : value }})
    },
    onRegisterClick: (storename, address, phone, category) => {
        if(storename && address && !checkPhone(phone) && category){
            dispatch(registerStore(storename, address, phone, category))
        }else{
            dispatch({ type: 'REGISTER_STORE_RIGHT_CLICK_REGISTER' })
        }
    }
})

const RightContainer = connect(
    mapStateToProps, mapDispatchToProps
)(Right)

export default RightContainer
