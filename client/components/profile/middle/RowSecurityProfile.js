import React from 'react';
import allString from '../../../config/allString'

const RowSecurityProfile = (props)=> {
    let { language, title, onClickChange, noteContent } = props;
    const g = (lang) => allString.get(language, lang);
    return(
        <div>
            <div style={{ paddingTop: 8, paddingBottom: 8, paddingRight: 14 }}>
                <div style={{  width: 'calc(100% - 24px)' }}>
                    <div style={{ width: 145, marginLeft: 13,  float: 'left'}}>
                        {title}
                    </div>
                    <div style= {{ padding: 2, marginLeft: 158, fontSize: 13}}>
                        <div className="btn btn-default btn-xs"
                            onClick={() => onClickChange()}
                            >{g('CHANGE')+' '+title+'.'}</div>
                        <div style={{ color: '#888888' }}>
                            {noteContent}
                        </div>
                    </div>
                </div>
            </div>
            <hr style={{ margin: 0}}></hr>
        </div>
    )
}

export default RowSecurityProfile
