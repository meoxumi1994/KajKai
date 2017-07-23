import React from 'react'

import Textarea from 'react-textarea-autosize'

import { MixMakeUpShow } from '~/components/entity/MakeUp'

class ContentShow extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            focus: false,
            width: 0,
        }
    }
    componentDidMount(){
        this.setState({ width: this.display.getBoundingClientRect().width })
    }
    render(){
        const { heightEachRow, content, padding, fontWeight, fontSize, minHeight } = this.props
        return(
            <div style={{
                // outline: '1px solid transparent',
                minHeight: minHeight,
                fontSize: fontSize,
                fontWeight: fontWeight,
                backgroundColor: 'white',
                padding: padding}}>
                <div
                    ref={display => this.display = display}
                    dangerouslySetInnerHTML={{ __html: MixMakeUpShow(content, heightEachRow) }}>
                </div>
            </div>
        )
    }
}

export default ContentShow
