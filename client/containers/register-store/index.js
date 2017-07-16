import { connect } from 'react-redux'
import { get } from '~/config/allString'

import { FilteringPhoneDefaultVietName } from '~/containers/support'
import { changeLanguage } from '~/actions/asyn/user-login-register'
import { authAction } from '~/actions/sync/auth'
import { getCategory, updatePhone, verifyPhone, registerStore } from '~/actions/asyn/register-store'
import Registerstore from '~/components/register-store'

const mapStateToProps = (state, ownProps) => {
    const g = (lang) => get(state.user.language, lang)
    const registerstore = state.inst.registerstore.index
    return({
        language: state.user.language,
        isloading: (state.auth == 'REGISTER_STORE_ING'),
        iswhoing: (state.auth == 'WHO_ING' || state.auth == 'WAIT'),
        isusername: state.user.username,
        registerStoreOK: (state.auth == 'REGISTER_STORE_SUCCESS'),
        CREATE_STORE: g('CREATE_STORE'),
        CREATE_STORE_DESCRIPTION: g('CREATE_STORE_DESCRIPTION'),
        CREATE_STORE_DESCRIPTION_0: g('CREATE_STORE_DESCRIPTION_0'),
        CREATE_STORE_DESCRIPTION_1: g('CREATE_STORE_DESCRIPTION_1'),
        CREATE_STORE_DESCRIPTION_2: g('CREATE_STORE_DESCRIPTION_2'),
        CREATE_STORE_DESCRIPTION_3: g('CREATE_STORE_DESCRIPTION_3'),
        CREATE_STORE_DESCRIPTION_4: g('CREATE_STORE_DESCRIPTION_4'),
        CREATE_STORE_DESCRIPTION_5: g('CREATE_STORE_DESCRIPTION_5'),
        CREATE_STORE_DESCRIPTION_6: g('CREATE_STORE_DESCRIPTION_6'),
        CREATE_STORE_DESCRIPTION_7: g('CREATE_STORE_DESCRIPTION_7'),
        STORE_NAME: g('STORE_NAME'),
        POSITION_IN_MAP: g('POSITION_IN_MAP'),
        POSITION_IN_MAP_DESCRIPTION: g('POSITION_IN_MAP_DESCRIPTION'),
        ADDRESS: g('ADDRESS'),
        ADDRESS_DESCRIPTION: g('ADDRESS_DESCRIPTION'),
        CATEGORY: g('CATEGORY'),
        PHONE: g('PHONE'),
        CONFIRM: g('CONFIRM'),
        CHOOSE_ANOTHER: g('CHOOSE_ANOTHER'),
        SAVE: g('SAVE'),
        ENTER_YOUR_STORE_NAME: g('ENTER_YOUR_STORE_NAME'),
        ENTER_YOUR_PHONE: g('ENTER_YOUR_STORE_NAME'),
        ENTER_YOUR_ADDRESS: g('ENTER_YOUR_ADDRESS'),
        STORE_URL: g('STORE_URL'),
        ENTER_URL_STORE: g('ENTER_URL_STORE'),
        ...registerstore,
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    onGetCategory: () => {
        dispatch(getCategory())
    },
    onChooseCategory: (chooseCategory, chooseCategoryId) => {
        dispatch({
            type: 'INST_REGISTER_STORE_CHOOSE_CATEGORY',
            chooseCategory: chooseCategory,
            chooseCategoryId: chooseCategoryId,
        })
    },
    onChooseSecondCategory: (chooseSecondCategory, chooseSecondCategoryId) => {
        dispatch({
            type: 'INST_REGISTER_STORE_CHOOSE_SECOND_CATEGORY',
            chooseSecondCategory: chooseSecondCategory,
            chooseSecondCategoryId: chooseSecondCategoryId,
         })
    },
    onChangeCategoryInputValue: (e) => {
        dispatch({ type: 'INST_REGISTER_STORE_CHANGE_CATEGORY_INPUT', value: e.target.value })
    },
    onChangePhone: (e) => {
        dispatch({ type: 'INST_REGISTER_STORE_CHANGE_PHONE', value: e.target.value })
    },
    updatePhone: (phone) => {
        dispatch(updatePhone(FilteringPhoneDefaultVietName(phone)))
    },
    chooseAnother: () => {
        dispatch({ type: 'INST_REGISTER_STORE_CHOOSE_ANOTHER_PHONE'})
    },
    onOpenModalPhone: (value) => {
        dispatch({ type: 'INST_REGISTER_STORE_CHOOSE_OPEN_MODAL_PHONE', value: value })
    },
    onChangePosition: (position) => {
        dispatch({ type: 'INST_REGISTER_STORE_CHOOSE_POSITION', position: position })
    },
    onChangeAddress: (e) => {
        dispatch({ type: 'INST_REGISTER_STORE_CHANGE_ADDRESS', address: e.target.value })
    },
    onChangeStoreName: (e) => {
        dispatch({ type: 'INST_REGISTER_STORE_CHANGE_STORENAME', storename: e.target.value })
    },
    onChangeUrlName: (e) => {
        dispatch({ type: 'INST_REGISTER_STORE_CHANGE_URLNAME', urlname: e.target.value })
    },
    changeLanguage: (language) => {
        dispatch(changeLanguage(language))
    },
    closeModalWarning: () => {
        dispatch({ type: 'INST_REGISTER_STORE_CLOSE_MODAL_WARNING' })
    },
    onFailStore: (content) => {
        dispatch({ type: 'INST_REGISTER_STORE_SHOW_MODAL_FAILED', content: content })
    },
    onRegisterStore: (store) => {
        dispatch(registerStore(store))
    },
    onChange: (key, value) => {
        dispatch({ type: 'INST_REGISTER_STORE_CHANGE', key: key, value: value })
    }
})

const mergerProps = (stateProps, dispatchProps, ownProps) => {
    const g = (lang) => get(stateProps.language, lang)
    const { chooseCategoryId, categories, ...anotherState } = stateProps
    const { onChooseCategory, onChooseSecondCategory, onRegisterStore, onFailStore, ...anotherDispatch } = dispatchProps
    return({
        onChooseCategory: (id) => {
            onChooseCategory(categories[id].name, categories[id].id)
        },
        onChooseSecondCategory: (id) => {
            const secondCate = categories.filter((item) => item.id == chooseCategoryId)[0].secondCategories
            onChooseSecondCategory(secondCate[id].name, secondCate[id].id)
        },
        createStore: () => {
            const store = {
                storename: stateProps.storename,
                phone: stateProps.phone,
                position: stateProps.position,
                address: stateProps.address,
                urlname: stateProps.urlname,
                firstCategoryId: stateProps.chooseCategoryId,
                secondCategoryId: stateProps.chooseSecondCategoryId,
                category: stateProps.categoryInputValue,
            }
            const isConfirmPhone = stateProps.isConfirmPhone
            if(store.storename.length < 6){
                onFailStore(g('STORE_NAME_FAILED'))
                return;
            }
            if(store.urlname.length < 4){
                onFailStore(g('URL_NAME_SHORT'))
                return;
            }
            if( !(/^[a-z]*$/.test(store.urlname)) && store.urlname != '_' ){
                onFailStore(g('URL_NAME_SPECIAL'))
                return;
            }
            const path = store.urlname
            if((path == "chat" || path == "map" || path == "register" || path == "store" || path == "profile" || path == "registerstore" )){
                onFailStore(g('URL_NAME_FAILED'))
                return;
            }
            if(!store.firstCategoryId || !store.secondCategoryId || store.category.length < 3){
                onFailStore(g('CATEGORY_FAILED'))
                return;
            }
            if(!isConfirmPhone){
                onFailStore(g('PHONE_FAILED'))
                return;
            }
            if(!store.position){
                onFailStore(g('POSITION_FAILED'))
                return;
            }
            if(store.address.length < 6){
                onFailStore(g('ADDRESS_FAILED'))
                return;
            }
            onRegisterStore(store)
        },
        chooseCategoryId: chooseCategoryId,
        categories: categories,
        ...ownProps,
        ...anotherState,
        ...anotherDispatch,
    })
}

const RegisterstoreContainer = connect(
    mapStateToProps, mapDispatchToProps, mergerProps
)(Registerstore)

export default RegisterstoreContainer
