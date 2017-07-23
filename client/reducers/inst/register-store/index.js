import { combineReducers } from 'redux'

import right from './right'

const index = (state = {
    categories: [],
    chooseCategory: '',
    chooseCategoryId: '',
    chooseSecondCategory: '',
    chooseSecondCategoryId: '',
    categoryInputValue: '',
    openModalPhone: false,
    phone: '01655791021',
    isConfirmPhone: true,
    position: undefined,
    storename: '',
    address: '',
    urlname: '',
    openModalWarning: false,
    contentModalWarning: '',
}, action) => {
    switch (action.type) {
        case 'SCREEN_CLICK':
            return {...state,
                showDropDown: false,
                showSecondDropDown: false,
            }
        case 'GET_LIST_CATEGORY_SUCCESS':
            return {...state, categories: action.categories }
        case 'INST_REGISTER_STORE_CHOOSE_CATEGORY':
            return {...state,
                chooseCategory: action.chooseCategory,
                chooseCategoryId: action.chooseCategoryId,
                chooseSecondCategory: '',
                chooseSecondCategoryId: '',
            }
        case 'INST_REGISTER_STORE_CHOOSE_SECOND_CATEGORY':
            return {...state, chooseSecondCategory: action.chooseSecondCategory
                , chooseSecondCategoryId: action.chooseSecondCategoryId }
        case 'INST_REGISTER_STORE_CHANGE_CATEGORY_INPUT':
            return {...state, categoryInputValue: action.value }
        case 'INST_REGISTER_STORE_CHANGE_PHONE':
            return {...state, phone: action.value }
        case 'UPDATE_PHONE_ING':
            return {...state, isConfirmPhone: false }
        case 'VERIFY_PHONE_SUCCESS':
            return {...state, isConfirmPhone: true, openModalPhone: false }
        case 'INST_REGISTER_STORE_CHOOSE_OPEN_MODAL_PHONE':
            return {...state, openModalPhone: action.value }
        case 'INST_REGISTER_STORE_CHOOSE_ANOTHER_PHONE':
            return {...state, phone: '', isConfirmPhone: false }
        case 'INST_REGISTER_STORE_CHOOSE_POSITION':
            return {...state, position: action.position }
        case 'INST_REGISTER_STORE_CHANGE_STORENAME':
            return {...state, storename: action.storename }
        case 'INST_REGISTER_STORE_CHANGE_ADDRESS':
            return {...state, address: action.address }
        case 'INST_REGISTER_STORE_CHANGE_URLNAME':
            return {...state, urlname: action.urlname}
        case 'INST_REGISTER_STORE_CLOSE_MODAL_WARNING':
            return {...state, openModalWarning: false }
        case 'INST_REGISTER_STORE_CHANGE':
            return {...state, [action.key] : action.value}
        case 'INST_REGISTER_STORE_SHOW_MODAL_FAILED':
            return {...state, openModalWarning: true, contentModalWarning: action.content}
        default:
            return state
    }
}


const registerstore = combineReducers({
    index,
    right
})

export default registerstore
