import React from 'react'
import textarea from 'react-textarea-autosize';

const MainPost = ({ storename, onEdit, onSave, EDIT, SAVE, textare, handleChange, canedit }) => {
    return(
        <div className="panel panel-default">
            {canedit?
                <div className="btn btn-default btn-sm" onClick={() => onSave()}
                    style={{ fontSize: 20, float: 'right', margin: 10 }}>{SAVE}</div>
             :  <div className="btn btn-default btn-sm" onClick={() => onEdit()}
                    style={{ fontSize: 20, float: 'right', margin: 10 }}>{EDIT}</div>
            }
            <div style={{ minHeight: 1000 , marginTop: 40 }}>
                {canedit?
                    <Textarea
                        style={{ width: '100%', fontSize: 14 }}
                        minRows={1}
                        value={textare}
                        onChange={(e) => handleChange('textare',e)}>
                    </Textarea>
                 :  <div style={{ marginTop: 65, marginLeft: 3, width: '100%', fontSize: 14 }}>
                        {textare
                            .split('\n')
                            .map((value,index) => (value)?<div key={index}>{value}</div>:<br key={index}/>)
                        }
                    </div>
                }
            </div>
        </div>
    )
}



export default MainPost
