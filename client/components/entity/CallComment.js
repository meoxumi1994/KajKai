import React from 'react'

import ContentEditable from '~/components/entity/ContentEditable'

class CallComment extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        const { isleader, avatarUrl, placehoder, handleChange, content } = this.props
        return(
            <div style={{
                marginLeft: isleader?0:38,
                paddingLeft: isleader?0:10,
                borderLeft: isleader?undefined:'2px solid #4080FF'
            }}>
                <img src={avatarUrl} style={{
                    width: isleader?40:20,
                    height: isleader?40:20,
                }}/>
                <div style={{
                    marginTop: isleader?-40:-20,
                    marginLeft: isleader?50:30,
                }}>
                    <ContentEditable
                        canEdit={true}
                        placehoder={placehoder}
                        handleChange={(e) => handleChange(e)}
                        content={content}
                        padding={isleader?5:0}
                    />
                </div>
            </div>
        )
    }
}

export default CallComment