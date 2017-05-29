import React from 'react'
import Textarea from 'react-textarea-autosize';

const BasicInput = ({ width, fontSize, minRows, textare, handleChange,
    opensupplement, onFocus, onBlur, onSave, onBold, onItalic, focus }) => {

    const styleTextArea = {
        style : {
            width: '100%',
            fontSize: 14,
            borderWidth:  1,
            borderColor: '#cccccc',
            resize: 'none',
            fontSize: fontSize,
        },
        minRows: minRows,
        value: textare,
        onChange: (e) => handleChange('textare',e)
    }
    return(
        <div tabIndex="0" onFocus={() => onFocus(this.textInput)} onBlur={() => onBlur(this.textInput)}
            style={{ width: width }}>
            <Textarea {...styleTextArea} ref={(input) => { this.textInput = input; }}/>
            {/* {opensupplement &&
                <div className="btn-group" role="group" style={{ width: 200 }}>
                    <div onMouseDown={ () => onBold(this.textInput) }
                        type="button" className="btn btn-default btn-xs">bold</div>
                    <div onMouseDown={ () => onItalic(this.textInput) }
                        type="button" className="btn btn-default btn-xs">italic</div>
                    <div onMouseDown={ () => onSave() }
                        type="button" className="btn btn-default btn-xs">save</div>
                </div>
            } */}
        </div>
    )
}

export default BasicInput
