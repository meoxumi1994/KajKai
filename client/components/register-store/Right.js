import React from 'react'

class Right extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        const { STORE, ENTER_STORE, ENTER_ADDRESS, PHONE_STORE, ADDRESS_WARNING,
            PHONE_WARNING, STORE_NAME_WARNING, CATEGORY_WARNING, ENTER_CATEGORY,
            handleChange, storename, address, phone, warningstorename, newindex,
            warningcategory, warningaddress, warningphone, category, onRegisterClick } = this.props
        return(
            <div>
                <h3>Register {STORE}</h3>
                <div className={"form-group"+ (warningstorename ?" has-error":"")}>
                    <input type="text" className="form-control input-md"
                        value={storename} placeholder={ENTER_STORE}
                        onChange={(e) => handleChange('storename', e.target.value)}
                    />
                    <div className="help-block">
                        {warningstorename && STORE_NAME_WARNING}
                    </div>
                </div>
                <div className={"form-group"+ (warningcategory ?" has-error":"")}>
                    <input type="text" className="form-control input-md"
                        value={category} placeholder={ENTER_CATEGORY}
                        onChange={(e) => handleChange('category', e.target.value)}
                    />
                    <div className="help-block">
                        {warningcategory && CATEGORY_WARNING}
                    </div>
                </div>
                <div className={"form-group"+ (warningaddress ?" has-error":"")}>
                    <input type="text" className="form-control input-md"
                        value={address} placeholder={ENTER_ADDRESS}
                        onChange={(e) => handleChange('address', e.target.value)}
                    />
                    <div className="help-block">
                        {warningaddress && ADDRESS_WARNING}
                    </div>
                </div>
                <div className={"form-group" + (warningphone ?" has-error":"")}>
                    <input type="text" className="form-control input-md"
                        value={phone} placeholder={PHONE_STORE}
                        onChange={(e) => handleChange('phone', e.target.value)}
                    />
                    <div className="help-block">
                        {warningphone && PHONE_WARNING}
                    </div>
                </div>
                <div className="btn btn-default btn-md"
                    onClick={() => onRegisterClick(newindex, storename, address, phone, category)}>
                    REGISTER STORE
                </div>
            </div>
        )
    }
}

export default Right
