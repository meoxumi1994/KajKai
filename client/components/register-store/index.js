import React from 'react';
import { Redirect } from 'react-router-dom'

import Left from '~/containers/register-store/Left'
import Right from '~/containers/register-store/Right'
import DropDownCategory from '~/components/entity/DropDownCategory'
import VerifyPhone from '~/containers/entity/phone/VerifyPhone'
import ShowInMap from '~/containers/entity/map/ShowInMap'
import WarningModal from '~/containers/entity/modal/WarningModal'

const checkPhone = (phone) => {
    if(!phone) return 'error'
    const isphone = /^\+?\d{1,3}?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d\d$/.test(phone)
    if( !isphone ) return 'error'
    return null
}

class RegisterStore extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            showPostRow: false,
        }
    }
    render(){
        const {
            STORE, CONFIRM, CHOOSE_ANOTHER, CREATE_STORE,
            CREATE_STORE_DESCRIPTION, CREATE_STORE_DESCRIPTION_0,
            CREATE_STORE_DESCRIPTION_1, CREATE_STORE_DESCRIPTION_2,
            CREATE_STORE_DESCRIPTION_3, CREATE_STORE_DESCRIPTION_4,
            CREATE_STORE_DESCRIPTION_5, CREATE_STORE_DESCRIPTION_6,
            CREATE_STORE_DESCRIPTION_7, CATEGORY, PHONE,
            POSITION_IN_MAP, POSITION_IN_MAP_DESCRIPTION, ADDRESS,
            ADDRESS_DESCRIPTION, STORE_NAME, STORE_URL,  SAVE, NAME_BY_URL ,
            ENTER_YOUR_STORE_NAME, ENTER_YOUR_PHONE, ENTER_YOUR_ADDRESS, ENTER_URL_STORE,
            onChangeAddress, onChangeStoreName,
            onChangeName, name, isConfirmPhone, chooseAnother, openModalPhone, onChangePosition,
            onOpenModalPhone, address, onChangeAdress, position, changeLanguage, createStore,
            categories, chooseCategory, chooseSecondCategory, chooseCategoryId, phone, onChangePhone,
            isusername, iswhoing, onOpenStore, registerStoreOK, onGetCategory, updatePhone,
            urlname, onChangeUrlName,
            onChooseCategory, onChooseSecondCategory, onChangeCategoryInputValue, categoryInputValue,
            openModalWarning, contentModalWarning, closeModalWarning,
            showDropDown, showSecondDropDown, onChange,
            } = this.props
        const categoriesName = categories.map((item) => item.name)
        let secondCategoriesName = []
        for(let i=0; i< categories.length; i++ ){
            if(categories[i].id == chooseCategoryId){
                secondCategoriesName = categories[i].secondCategories.map((item) => item.name)
                break;
            }
        }
        if(iswhoing)
            return <div></div>
        if(!isusername)
            return <Redirect to="/register"/>
        if(registerStoreOK){
            return <Redirect to={"/"+urlname}/>
        }
        return(
            <div style={{ marginLeft: 200, marginRight: 200 }}>
                <div style={{ padding: 15, backgroundColor: 'white', width: 700, height: '100%'}}>
                    <div style={{ fontSize: 25 }}>{CREATE_STORE}</div>
                    <div>{CREATE_STORE_DESCRIPTION}:</div>
                    <div style={{ fontSize: 13, color: '#64686E'}}>. {CREATE_STORE_DESCRIPTION_0}</div>
                    <div style={{ fontSize: 13, color: '#64686E'}}>. {CREATE_STORE_DESCRIPTION_1}</div>
                    <div style={{ fontSize: 13, color: '#64686E'}}>. {CREATE_STORE_DESCRIPTION_2}</div>
                    <div style={{ marginTop: 15, fontWeight: 'bold'}}>
                        {STORE_NAME}{" :"}
                    </div>
                    <div>
                        <input
                            onChange={(e) => onChangeStoreName(e)}
                            value={name}
                            placeholder={ENTER_YOUR_STORE_NAME+" ..."} style={{
                            width: 400,
                            fontSize: 12.5,
                            marginTop: 5,
                            paddingLeft: 5,}}/>
                    </div>
                    <div style={{ marginTop: 15, fontWeight: 'bold'}}>
                        {STORE_URL}{" :"}
                    </div>
                    <div>
                        www.kajkai.com/{" "}
                        <input
                            onChange={(e) => onChangeUrlName(e)}
                            value={urlname}
                            placeholder={ENTER_URL_STORE+" ..."} style={{
                            width: 400,
                            fontSize: 12.5,
                            marginTop: 5,
                            paddingLeft: 5,}}/>
                    </div>
                    <div style={{ marginTop: 15, fontWeight: 'bold'}}>
                        {CATEGORY}{" :"}
                    </div>
                    <div style={{  marginLeft: 350, height: 150, width: 300 }}>
                        <div className="btn btn-default btn-xs" style={{ marginTop: 5, width: 300 , fontSize: 12.5 }}
                            onClick={() => {
                                setTimeout(() => {
                                    onChange('showDropDown', true)
                                },1)
                            }}>
                            {chooseCategory || 'chooseCategory'}
                        </div>
                        {showDropDown &&
                            <DropDownCategory
                                width={300}
                                contents={categoriesName}
                                onClick={(id) => onChooseCategory(id)}/>
                        }
                        {chooseCategory &&
                            <div className="btn btn-default btn-xs" style={{ marginTop: 5, width: 300, fontSize: 12.5 }}
                                onClick={() => {
                                    setTimeout(() => {
                                        onChange('showSecondDropDown', true)
                                    },1)
                                }}>
                                {chooseSecondCategory || 'chooseSecondCategory'}
                            </div>
                        }
                        { (chooseCategory && showSecondDropDown) &&
                            <DropDownCategory
                                width={300}
                                contents={secondCategoriesName}
                                onClick={(id) => {
                                    onChooseSecondCategory(id)
                                    setTimeout(() =>{
                                        this.input.focus()
                                    }, 1)
                                }}/>
                        }
                        {chooseSecondCategory &&
                            <input
                                onChange={(e) => onChangeCategoryInputValue(e)}
                                value={categoryInputValue}
                                ref={input =>  this.input = input}
                                placeholder={ENTER_YOUR_PHONE+" ..."} style={{
                                fontSize: 12.5,
                                marginTop: 5,
                                paddingLeft: 5,
                                width: '100%' }}/>
                        }
                    </div>
                    <div style={{ marginTop: -147, width: 340, }}>
                        <div style={{ fontSize: 13, color: '#64686E'}}>. {CREATE_STORE_DESCRIPTION_4}</div>
                        <div style={{ fontSize: 13, color: '#64686E'}}>. {CREATE_STORE_DESCRIPTION_5}</div>
                    </div>
                    <div style={{ marginTop: 15, fontWeight: 'bold'}}>
                        {PHONE}{" :"}
                    </div>
                    {!isConfirmPhone ?
                        <input
                            onChange={(e) => onChangePhone(e)}
                            value={phone}
                            placeholder={ENTER_YOUR_PHONE+" ..."} style={{
                            marginLeft: 350,
                            width: 200,
                            fontSize: 12.5,
                            marginTop: 5,
                            paddingLeft: 5,}}/>
                    :   <div style={{ display: 'inline',marginLeft: 350, paddingLeft: 5, height: 28, width: 200, }}>
                            {phone}
                        </div>
                    }
                    {!isConfirmPhone ?
                        <div className="btn btn-default btn-xs"
                            disabled={checkPhone(phone)}
                            onClick={() => {
                                if(!checkPhone(phone)){
                                    updatePhone(phone)
                                    onOpenModalPhone(true)
                                }
                            }}
                            style={{ marginLeft: 10 }}>
                            {CONFIRM}
                        </div>
                    :   <div className="btn btn-default btn-xs"
                            style={{ marginLeft: 10 }}
                            onClick={() => chooseAnother()}>
                            {CHOOSE_ANOTHER}
                        </div>
                    }
                    <VerifyPhone
                        phone={phone}
                        showModal={openModalPhone}
                        close={() => onOpenModalPhone(false)}/>
                    <div style={{ marginTop: isConfirmPhone?-19: -25, width: 340 }}>
                        <div style={{ fontSize: 13, color: '#64686E'}}>. {CREATE_STORE_DESCRIPTION_6}</div>
                        <div style={{ fontSize: 13, color: '#64686E'}}>. {CREATE_STORE_DESCRIPTION_7}</div>
                    </div>
                    <div style={{ marginTop: 15, fontWeight: 'bold'}}>
                        {POSITION_IN_MAP}{" :"}
                    </div>
                    <div>
                        <ShowInMap
                            width={400} height={200}
                            position={position}
                            onChangePosition={(position) => onChangePosition(position)}
                        />
                    </div>
                    <div style={{ marginTop: 15, fontWeight: 'bold'}}>
                        {ADDRESS}{" :"}
                    </div>
                    <div>
                        {". "}{ADDRESS_DESCRIPTION}
                    </div>
                    <div>
                        <input
                            onChange={(e) => onChangeAddress(e)}
                            value={address}
                            placeholder={ENTER_YOUR_ADDRESS+" ..."} style={{
                            width: 400,
                            fontSize: 12.5,
                            marginTop: 5,
                            paddingLeft: 5,}}/>
                    </div>
                    <div style={{ height: 40 }}>
                        <div className="btn btn-default btn-sm"
                            style={{ float: 'right',
                            color: '#5D9149',
                            borderColor: '#5D9149',
                            marginRight: 10,
                            marginTop: 10 }}
                            onClick={() => createStore()}
                            >
                            {CREATE_STORE}
                        </div>
                    </div>
                    <WarningModal
                        showModal={openModalWarning}
                        content={contentModalWarning}
                        close={() => closeModalWarning()}
                    />
                    <hr style={{ margin: 0, marginTop: 10 }}/>
                    <div style={{ marginLeft: 0, padding: 5 }} className="btn"
                        onClick={()=> changeLanguage('vi')}>
                        <a>Tiếng Việt</a>
                    </div>
                    <div className="btn"
                        onClick={()=> changeLanguage('en')}>
                        <a>English</a>
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount(){
        this.props.onGetCategory();
    }
}

export default RegisterStore
