import React from 'react'
import Textarea from 'react-textarea-autosize'

const CommentInput = ({ content, paddingtopbot, onHandleChangeContent, onHandleKeyPress }) => {
    const styleTextArea = {
        style : {
            width: '100%',
            fontSize: 14,
            borderWidth:  1,
            borderColor: '#cccccc',
            resize: 'none',
            paddingBottom: paddingtopbot,
            paddingTop: paddingtopbot,
        },
        minRows: 1,
        value: content,
        onChange: (e) => onHandleChangeContent(e),
        onKeyPress: (e) => onHandleKeyPress(e),
    }
    return(
        <div>
            <Textarea {...styleTextArea} ref={(input) => { this.textInput = input }}/>
        </div>
    )
}

export default CommentInput
