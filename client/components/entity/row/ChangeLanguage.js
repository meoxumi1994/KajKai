import React from 'react'

class ChangeLanguage extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        const { language, changeLanguage, fontSize } = this.props
        return(
            <div>
                {language != 'vi' ?
                    <div style={{ marginLeft: 5, padding: 0, fontSize: fontSize ? fontSize : 12.5 }} className="btn"
                        onClick={()=> changeLanguage('vi')}>
                        <a>Tiếng Việt</a>
                    </div>
                    :
                    <div className="btn" style={{  color: '#737373',
                        marginLeft: 5, padding: 0, fontSize: fontSize ? fontSize : 12.5 }}>Tiếng Việt</div>
                }
                {" . "}
                {language != 'en' ?
                    <div className="btn" style={{ fontSize: fontSize ? fontSize : 12.5, padding: 0,}}
                        onClick={()=> changeLanguage('en')}>
                        <a>English</a>
                    </div>
                    : <div className="btn" style={{ color: '#737373',
                        padding: 0, fontSize: fontSize ? fontSize : 12.5 }}>English</div>
                }
            </div>
        )
    }
}

export default ChangeLanguage
