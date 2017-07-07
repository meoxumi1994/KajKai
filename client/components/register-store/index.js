import React from 'react';
import { Redirect } from 'react-router-dom'

import Left from '~/containers/register-store/Left'
import Right from '~/containers/register-store/Right'
import DropDownCategory from '~/components/entity/DropDownCategory'
import VerifyPhone from '~/containers/entity/phone/VerifyPhone'

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
            showDropDown: false,
            showSecondDropDown: false,
            showModalPhone: false,
        }
    }
    render(){
        const {
            STORE, CONFIRM, CHOOSE_ANOTHER,
            CREATE_STORE,
            CREATE_STORE_DESCRIPTION,
            CREATE_STORE_DESCRIPTION_0,
            CREATE_STORE_DESCRIPTION_1,
            CREATE_STORE_DESCRIPTION_2,
            CREATE_STORE_DESCRIPTION_3,
            CREATE_STORE_DESCRIPTION_4,
            CREATE_STORE_DESCRIPTION_5,
            CREATE_STORE_DESCRIPTION_6,
            CREATE_STORE_DESCRIPTION_7,
            CATEGORY, PHONE, isConfirmPhone,
            categories, chooseCategory, chooseSecondCategory, chooseCategoryId, phone, onChangePhone,
            isusername, iswhoing, onOpenStore, registerStoreOK, onGetCategory, updatePhone,
            onChooseCategory, onChooseSecondCategory, onChangeCategoryInputValue, categoryInputValue} = this.props
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
            return <Redirect to="/store"/>
        }
        return(
            <div style={{ marginLeft: 200, marginRight: 200, height: '100%'}}>
                <div style={{ padding: 15, backgroundColor: 'white', width: 700, height: '100%'}}>
                    <div style={{ fontSize: 25 }}>Create A New Store</div>
                    <div>{CREATE_STORE_DESCRIPTION}:</div>
                    <div style={{ fontSize: 13, color: '#64686E'}}>. {CREATE_STORE_DESCRIPTION_0}</div>
                    <div style={{ fontSize: 13, color: '#64686E'}}>. {CREATE_STORE_DESCRIPTION_1}</div>
                    <div style={{ fontSize: 13, color: '#64686E'}}>. {CREATE_STORE_DESCRIPTION_2}</div>
                    <div style={{ marginTop: 15, fontWeight: 'bold'}}>
                        {CATEGORY}
                    </div>
                    <div style={{  marginLeft: 350, height: 150, width: 300 }}>
                        <div className="btn btn-default btn-xs" style={{ marginTop: 5, width: 300 , fontSize: 12.5 }}
                            onClick={() => {
                                setTimeout(() => {
                                    this.setState({ showDropDown: true })
                                },1)
                            }}>
                            {chooseCategory || 'chooseCategory'}
                        </div>
                        {this.state.showDropDown &&
                            <DropDownCategory
                                width={300}
                                contents={categoriesName}
                                onClick={(id) => onChooseCategory(id)}/>
                        }
                        {chooseCategory &&
                            <div className="btn btn-default btn-xs" style={{ marginTop: 5, width: 300, fontSize: 12.5 }}
                                onClick={() => {
                                    setTimeout(() => {
                                        this.setState({ showSecondDropDown: true })
                                    },1)
                                }}>
                                {chooseSecondCategory || 'chooseSecondCategory'}
                            </div>
                        }
                        { (chooseCategory && this.state.showSecondDropDown) &&
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
                                placeholder={"enter your category"+" ..."} style={{
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
                        {PHONE}
                    </div>
                    {!isConfirmPhone ?
                        <input
                            onChange={(e) => onChangePhone(e)}
                            value={phone}
                            placeholder={"enter your phone"+" ..."} style={{
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
                                    updatePhone()
                                    this.setState({ showModalPhone: true })
                                }
                            }}
                            style={{ marginLeft: 10 }}>
                            {CONFIRM}
                        </div>
                    :   <div className="btn btn-default btn-xs"
                            style={{ marginLeft: 10 }}>
                            {CHOOSE_ANOTHER}
                        </div>
                    }

                    {!isConfirmPhone &&
                        <VerifyPhone
                            phone={phone}
                            showModal={this.state.showModalPhone}
                            close={() => this.setState({ showModalPhone: false })}/>
                    }
                    <div style={{ marginTop: isConfirmPhone?-19: -25, width: 340 }}>
                        <div style={{ fontSize: 13, color: '#64686E'}}>. {CREATE_STORE_DESCRIPTION_6}</div>
                        <div style={{ fontSize: 13, color: '#64686E'}}>. {CREATE_STORE_DESCRIPTION_7}</div>
                    </div>


                </div>
            </div>
        )
    }
    componentDidMount(){
        const that = this
        $(window).click(function() {
            that.setState({
                showDropDown: false,
                showSecondDropDown: false,
            })
        });
        this.props.onGetCategory();
    }
}

export default RegisterStore
