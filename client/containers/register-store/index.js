import { connect } from 'react-redux'
import { get } from '~/config/allString'

import { authAction } from '~/actions/sync/auth'
import { getCategory, updatePhone, verifyPhone } from '~/actions/asyn/register-store'
import Registerstore from '~/components/register-store'

const mapStateToProps = (state, ownProps) => {
    const g = (lang) => get(state.user.language, lang)
    const registerstore = state.inst.registerstore.index
    return({
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
        dispatch(updatePhone(phone))
    },
    chooseAnother: () => {
        dispatch({ type: 'INST_REGISTER_STORE_CHOOSE_ANOTHER_PHONE'})
    },
    onOpenModalPhone: (value) => {
        dispatch({ type: 'INST_REGISTER_STORE_CHOOSE_OPEN_MODAL_PHONE', value: value })
    },
    onChangePosition: (position) => {
        console.log('onChangePosition', position)
        dispatch({ type: 'INST_REGISTER_STORE_CHOOSE_POSITION', position: position })
    }
})

const mergerProps = (stateProps, dispatchProps, ownProps) => {
    const { chooseCategoryId, categories, ...anotherState } = stateProps
    const { onChooseCategory, onChooseSecondCategory, ...anotherDispatch } = dispatchProps
    return({
        onChooseCategory: (id) => {
            onChooseCategory(categories[id].name, categories[id].id)
        },
        onChooseSecondCategory: (id) => {
            const secondCate = categories.filter((item) => item.id == chooseCategoryId)[0].secondCategories
            onChooseSecondCategory(secondCate[id].name, secondCate[id].id)
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
