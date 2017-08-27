import React from 'react';
import { Redirect } from 'react-router-dom'

import Left from '~/containers/register-store/Left'
import Right from '~/containers/register-store/Right'
import DropDownCategory from '~/components/entity/DropDownCategory'
import VerifyPhone from '~/containers/entity/phone/VerifyPhone'
import ShowInMap from '~/containers/entity/map/ShowInMap'
import WarningModal from '~/containers/entity/modal/WarningModal'
import ChangeLanguage from '~/containers/entity/row/ChangeLanguage'
import AddPhoto from '~/containers/entity/thumnail/AddPhoto'

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
            STORE, CONFIRM, CHOOSE_ANOTHER, CREATE_STORE, ENTER_AVATAR_STORE,
            CREATE_STORE_DESCRIPTION, CREATE_STORE_DESCRIPTION_0,
            CREATE_STORE_DESCRIPTION_1, CREATE_STORE_DESCRIPTION_2,
            CREATE_STORE_DESCRIPTION_3, CREATE_STORE_DESCRIPTION_4,
            CREATE_STORE_DESCRIPTION_5, CREATE_STORE_DESCRIPTION_6,
            CREATE_STORE_DESCRIPTION_7, CATEGORY, PHONE,
            POSITION_IN_MAP, POSITION_IN_MAP_DESCRIPTION, ADDRESS,
            ADDRESS_DESCRIPTION, STORE_NAME, STORE_URL,  SAVE, NAME_BY_URL ,
            ENTER_YOUR_STORE_NAME, ENTER_YOUR_PHONE, ENTER_YOUR_ADDRESS, ENTER_URL_STORE,
            ENTER_CATEGORY, AVATAR_STORE_DESCRIPTION_1, AVATAR_STORE_DESCRIPTION_2,
            CHOOSE_CATEGORY_1, CHOOSE_CATEGORY_2,
            onChangeAddress, onChangeStoreName,
            onChangeName, name, avatarUrl, isConfirmPhone, chooseAnother, openModalPhone, onChangePosition,
            onOpenModalPhone, address, onChangeAdress, position, changeLanguage, createStore,
            categories, chooseCategory, chooseSecondCategory, chooseCategoryId, phone, onChangePhone,
            isusername, iswhoing, onOpenStore, registerStoreOK, onGetCategory, updatePhone,
            urlname, onChangeUrlName, language,
            onChooseCategory, onChooseSecondCategory, onChangeCategoryInputValue, categoryInputValue,
            openModalWarning, contentModalWarning, closeModalWarning,
            showDropDown, showSecondDropDown, onChange,
            } = this.props
        const categoriesName = categories.map((item) => (language == 'en') ? item.enName : item.name )
        let secondCategoriesName = []
        for(let i=0; i< categories.length; i++ ){
            if(categories[i].id == chooseCategoryId){
                secondCategoriesName = categories[i].secondCategories.map((item) => (language == 'en') ? item.enName : item.name)
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
            <div style={{ marginLeft: 200, marginRight: 200, marginTop: 10 }}>
                <div style={{ width: 700, height: '100%'}}>

                    <div style={{ backgroundColor: 'white', borderRadius: '5px 5px 0px 0px'}}>
                        <div style={{ fontSize: 25, padding: '15px 20px 15px 20px', borderRadius: '5px 5px 0px 0px', color: 'white', backgroundColor: '#BD081C'}}>{CREATE_STORE}</div>
                        <hr style={{ margin: 0 }}/>
                        <div style={{ padding: '15px 20px 15px 20px' }}>
                            <div>{CREATE_STORE_DESCRIPTION}:</div>
                            <div style={{ fontSize: 13.5, color: '#64686E'}}>. {CREATE_STORE_DESCRIPTION_0}</div>
                            <div style={{ fontSize: 13.5, color: '#64686E'}}>. {CREATE_STORE_DESCRIPTION_1}</div>
                            <div style={{ fontSize: 13.5, color: '#64686E'}}>. {CREATE_STORE_DESCRIPTION_2}</div>
                        </div>
                    </div>

                    <div style={{ padding: '15px 20px 15px 20px', marginTop: 10, backgroundColor: 'white'}}>
                        <div style={{ fontWeight: 'bold'}}>
                            {STORE_NAME}{" :"}
                        </div>
                        <hr style={{ margin: 0, marginBottom: 5, marginTop: 5 }}/>
                        <div>
                            <input
                                onChange={(e) => onChangeStoreName(e)}
                                value={name}
                                placeholder={ENTER_YOUR_STORE_NAME+" ..."} style={{
                                width: 400,
                                fontSize: 13.5,
                                marginTop: 5,
                                paddingLeft: 5,}}/>
                        </div>
                    </div>

                    <div style={{ padding: '15px 20px 15px 20px', marginTop: 10, backgroundColor: 'white'}}>
                        <div style={{ fontWeight: 'bold'}}>
                            {STORE_URL}{" :"}
                        </div>
                        <hr style={{ margin: 0, marginBottom: 5, marginTop: 5 }}/>
                        <div>
                            www.kajkai.com/{" "}
                            <input
                                onChange={(e) => onChangeUrlName(e)}
                                value={urlname}
                                placeholder={ENTER_URL_STORE+" ..."} style={{
                                width: 400,
                                fontSize: 13.5,
                                marginTop: 5,
                                paddingLeft: 5,}}/>
                        </div>
                    </div>

                    <div style={{ padding: '15px 20px 15px 20px', marginTop: 10, backgroundColor: 'white'}}>
                        <div style={{ fontWeight: 'bold'}}>
                            {CATEGORY}{" :"}
                        </div>
                        <hr style={{ margin: 0, marginBottom: 5, marginTop: 5 }}/>
                        <div style={{  marginLeft: 350, height: 150, width: 300 }}>
                            <div className="btn btn-default btn-xs" style={{ marginTop: 5, width: 300 , fontSize: 13.5 }}
                                onClick={() => {
                                    setTimeout(() => {
                                        onChange('showDropDown', true)
                                    },1)
                                }}>
                                {chooseCategory || CHOOSE_CATEGORY_1}
                            </div>
                            {showDropDown &&
                                <DropDownCategory
                                    width={300}
                                    contents={categoriesName}
                                    onClick={(id) => onChooseCategory(id)}/>
                            }
                            {chooseCategory &&
                                <div className="btn btn-default btn-xs" style={{ marginTop: 5, width: 300, fontSize: 13.5 }}
                                    onClick={() => {
                                        setTimeout(() => {
                                            onChange('showSecondDropDown', true)
                                        },1)
                                    }}>
                                    {chooseSecondCategory || CHOOSE_CATEGORY_2}
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
                                    placeholder={ENTER_CATEGORY+" ..."} style={{
                                    fontSize: 13.5,
                                    marginTop: 5,
                                    paddingLeft: 5,
                                    width: '100%' }}/>
                            }
                        </div>
                        <div style={{ marginTop: -147, width: 340, }}>
                            <div style={{ fontSize: 13.5, color: '#64686E'}}>. {CREATE_STORE_DESCRIPTION_4}</div>
                            <div style={{ fontSize: 13.5, color: '#64686E'}}>. {CREATE_STORE_DESCRIPTION_5}</div>
                        </div>
                    </div>

                    <div style={{ marginTop: 15, padding: '15px 20px 15px 20px', backgroundColor: 'white' }}>
                        <div style={{  fontWeight: 'bold'}}>
                            {PHONE}{" :"}
                        </div>
                        <hr style={{ margin: 0, marginBottom: 5, marginTop: 5 }}/>
                        {!isConfirmPhone ?
                            <input
                                onChange={(e) => onChangePhone(e)}
                                value={phone}
                                placeholder={ENTER_YOUR_PHONE+" ..."} style={{
                                marginLeft: 350,
                                width: 200,
                                fontSize: 13.5,
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
                            <div style={{ fontSize: 13.5, color: '#64686E'}}>. {CREATE_STORE_DESCRIPTION_6}</div>
                            <div style={{ fontSize: 13.5, color: '#64686E'}}>. {CREATE_STORE_DESCRIPTION_7}</div>
                        </div>
                    </div>

                    <div style={{ padding: '15px 20px 15px 20px', marginTop: 10, backgroundColor: 'white' }}>
                        <div style={{ fontWeight: 'bold' }}>
                            {ENTER_AVATAR_STORE}{" :"}
                        </div>
                        <hr style={{ margin: 0, marginBottom: 5, marginTop: 5 }}/>
                        <div style={{ height: 180 }}>
                            <AddPhoto
                                aspectRatio={1}
                                id="registerstore"
                                onAddImage={(src) => onChange('avatarUrl', src)}
                                action={{
                                    type: 'UPDATE_STORE_REGISTER_AVATAR',
                                }}
                                canEdit={true}
                                style={{
                                src: avatarUrl,
                                width: 180,
                                height: 180,
                                isTop: false,
                            }}/>
                            <div style={{ marginLeft: 195, marginTop: -175 }}>
                                <div style={{ color: '#65696F' }}>{AVATAR_STORE_DESCRIPTION_1}</div>
                                <div style={{ color: '#65696F' }}>{AVATAR_STORE_DESCRIPTION_2}</div>
                            </div>
                        </div>
                    </div>

                    <div style={{ marginTop: 10, padding: '15px 20px 15px 20px', backgroundColor: 'white'}}>
                        <div style={{ fontWeight: 'bold'}}>
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
                                fontSize: 13.5,
                                marginTop: 5,
                                paddingLeft: 5,}}/>
                        </div>
                    </div>

                    <div style={{ marginTop: 10, padding: '15px 20px 15px 20px', backgroundColor: 'white'}}>
                        <div style={{ fontWeight: 'bold'}}>
                            {POSITION_IN_MAP}{" :"}
                        </div>
                        <hr style={{ margin: 0, marginBottom: 5, marginTop: 5 }}/>
                        <div>
                            <ShowInMap
                                canEdit={true}
                                width={400} height={200}
                                position={position}
                                onChangePosition={(position) => onChangePosition(position)}
                            />
                        </div>
                    </div>

                    <div style={{ marginTop: 10, padding: '15px 20px 15px 20px', color: 'white',
                        backgroundColor: '#BD081C', borderRadius: '0px 0px 5px 5px'}}>
                        <div style={{ height: 50 }}>
                            <div className="btn btn-default"
                                style={{ float: 'right',
                                fontSize: 16,
                                color: '#4B4F56',}}
                                onClick={() => createStore()}
                                >
                                <img src="/images/storeicon.svg" width={20} height={20}/>
                                <span style={{ marginLeft: 10 }}>{CREATE_STORE}</span>
                            </div>
                        </div>
                    </div>

                    <WarningModal
                        showModal={openModalWarning}
                        content={contentModalWarning}
                        close={() => closeModalWarning()}
                    />
                    <div style={{ padding: '15px 20px 15px 20px', marginTop: 10, height: 150, backgroundColor: 'white'}}>
                        <ChangeLanguage fontSize={14}/>
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
