import React from 'react'

import Textarea from 'react-textarea-autosize'

import { MixMakeUp } from '~/components/entity/MakeUp'

class ContentEditable extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            focus: false,
            width: 0,
            height: 0,
            enter: false,
        }
    }
    componentDidMount(){
        this.setState({ width: this.display.offsetWidth, height: this.display.offsetHeight })
        if(this.props.getLine)
            this.props.getLine(this.textarea.state.height / 20)
    }
    componentDidUpdate(){
        this.setState({ width: this.display.offsetWidth, height: this.display.offsetHeight})
        if(this.props.getLine)
            this.props.getLine(this.textarea.state.height / 20)
    }
    shouldComponentUpdate(nextProps, nextState){
        if(this.props.content != nextProps.content)
            return true
        if(this.state.width == nextState.width)
            return false
        if(this.state.height == nextState.height)
            return false
        return true
    }
    render(){
        const { placehoder, width, content, handleChange, padding, minRows, onEnter, match } = this.props
        return(
            <div style={{
                outline: '1px solid #D2D2D2',
                fontSize: 14,
                padding: padding,
                paddingBottom: padding }}>
                <div
                    ref={display => this.display = display}
                    style={{
                        padding: 0,
                        color: content?undefined:(this.state.focus?'#BFC2C9':'#A7ABB1'),
                        minHeight: minRows? minRows*20: undefined,
                        width: width,
                    }}
                    dangerouslySetInnerHTML={{ __html: content?MixMakeUp(content, match):placehoder }}>
                </div>
                <div style={{
                        marginTop: (this.display) ? -this.display.offsetHeight : 0,
                        padding: 0,
                        height: this.state.height,
                    }}>
                    <Textarea
                        ref={ textarea => this.textarea = textarea }
                        autoComplete="off"
                        autoCorrect="off"
                        autoCapitalize="off"
                        spellCheck={false}
                        style={{
                            caretColor: '#1D2129',
                            backgroundColor: 'transparent',
                            color: 'transparent',
                            borderWidth: 0,
                            resize: 'none',
                            fontSize: 14,
                            padding: 0,
                            margin: 0,
                            width: this.state.width,
                            outline: 'none',
                        }}
                        minRows={minRows}
                        value={content}
                        onKeyPress={(e) => {
                            if(onEnter && e.key == "Enter"){
                                this.setState({ enter: true })
                                onEnter()
                            }
                        }}
                        onChange={(e) => {
                            if(this.state.enter){
                                this.setState({ enter: false })
                            }else{
                                handleChange(e)
                            }
                        }}/>
                </div>
            </div>
        )
    }
}

export default ContentEditable
