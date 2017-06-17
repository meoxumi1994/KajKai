import React from 'react'
import Textarea from 'react-textarea-autosize'
import ContentEditable from 'react-contenteditable'
import {Editor, EditorState} from 'draft-js';

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
    content = EditorState.createEmpty()
    return(
        <div>
            {/* <Editor
                editorState={content}
                onChange={(e) => onHandleChangeContent(e)} />
            <ContentEditable
                html={content}
                disabled={false}
                // onFocus={() => console.log('focus')}
                onChange={(e) => {
                    // this.focus();
                    onHandleChangeContent(e)
                }}
            /> */}

            <Textarea {...styleTextArea} ref={(input) => { this.textInput = input; console.log(input)}}/>
        </div>
    )
}

// class MyEditor extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {editorState: EditorState.createEmpty()};
//     this.onChange = (editorState) => this.setState({editorState});
//   }
//   render() {
//     return (
//       <Editor editorState={this.state.editorState} onChange={this.onChange} />
//     );
//   }
// }

export default CommentInput
