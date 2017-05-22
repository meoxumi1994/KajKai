import React from 'react'
import Textarea from 'react-textarea-autosize';

const BasicInput = ({ width, textare, handleChange, opensupplement, onFocus, onBlur, onBold, onItalic}) => {
    return(
        <div tabIndex="123" onBlur={() => onBlur()} >
            <Textarea
                onFocus={() => onFocus()}
                style={{ width: '100%', fontSize: 14, borderWidth:  0, resize: 'none'}}
                minRows={2}
                value={textare}
                onChange={(e) => handleChange('textare',e)}>
            </Textarea>
            {opensupplement &&
                <div>
                    <div className="btn-group" role="group">
                        <div onClick={ () => onBold() }
                            type="button" className="btn btn-default btn-xs">bold</div>
                        <div onClick={ () => onItalic() }
                            type="button" className="btn btn-default btn-xs">italic</div>
                    </div>
                </div>
            }
        </div>
    )
}

export default BasicInput
