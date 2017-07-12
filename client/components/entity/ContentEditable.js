import React from 'react'

import Textarea from 'react-textarea-autosize'

import { MixMakeUp } from '~/components/entity/MakeUp'

class ContentEditable extends React.Component {
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
    // componentWillUpdate(){
    //     this.setState({ width: this.display.getBoundingClientRect().width })
    // }
    render(){
        const { placehoder, width, content, handleChange, padding, minRows } = this.props
        return(
            <div style={{
                outline: '1px solid #D2D2D2',
                fontSize: 14,
                // backgroundColor: 'white',
                padding: padding}}>
                <Textarea
                    autoComplete="off"
                    autoCorrect="off"
                    autoCapitalize="off"
                    spellCheck={false}
                    style={{
                        caretColor: '#1D2129',
                        backgroundColor: 'transparent',
                        position: 'absolute',
                        color: 'transparent',
                        borderWidth: 0,
                        resize: 'none',
                        fontSize: 14,
                        padding: 0,
                        width: this.state.width,
                        outline: 'none',
                    }}
                    minRows={minRows}
                    value={content}
                    onChange={(e) => handleChange(e)} />
                <div
                    ref={display => this.display = display}
                    style={{
                        color: content?undefined:(this.state.focus?'#BFC2C9':'#A7ABB1'),
                        minHeight: minRows? minRows*20: undefined,
                        wordWrap: 'break-word',
                        width: width,
                    }}
                    dangerouslySetInnerHTML={{ __html: content?MixMakeUp(content):placehoder }}>
                </div>
            </div>
        )
    }
}

export default ContentEditable
