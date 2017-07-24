import React from 'react';

// class RowBigProfile extends React.Component {
//     constructor(props){
//         super(props)
//     }
//     render(){
//         const { noteContent, onSaveChange, onCancel, isLoading, validatetop,
//              validatebot, warning, handleChange, newvalue,
//              TITLE_WARNING, NOTE_TITLE, SAVE_CHANGE, NOTE, TITLE, NO, CANCEL,
//              } = this.props
//         return(
//             <div style={{ backgroundColor: '#e8e8e8'}}>
//                 <div style={{  paddingTop: 5, paddingBottom: 5, paddingRight: 14 }}>
//                     <a href="#" style={{ float: 'right', marginTop: 3, marginRight: -7 }}
//                         onClick={() => onCancel()}>{CANCEL}</a>
//                     <div style={{ width: '100%' }}>
//                         <div style={{ width: 145, marginLeft: 13,  float: 'left'}}>
//                             <h5>{TITLE}</h5>
//                         </div>
//                         <div style= {{ marginLeft: 158 }}>
//                             <div className={"form-group" + (validatetop ?" has-error":"")}
//                                 style={{ width: '100%', color: 'red'}}>
//                                 <input type="text" className="form-control input-sm"
//                                     style={{ width: 300 }} value={newvalue}
//                                     onChange={(e) => handleChange(e.target.value)}
//                                 />
//                                 <div className="help-block">
//                                     {validatetop && TITLE_WARNING}
//                                 </div>
//                             </div>
//                             <div style={{ marginTop: 5, marginBottom: 5 }}>
//                                 {NOTE}{": "}
//                                 <small>{NOTE_TITLE}</small>
//                             </div>
//                             <div style={{ marginTop: 5}} >
//                                 { isLoading
//                                     ?<div className="loader-small" style={{ marginLeft: 40 }}></div>
//                                     : validatebot? <div className="btn btn-default btn-xs" disabled>{SAVE_CHANGE}</div>
//                                     : <div className="btn btn-default btn-xs"
//                                         onClick={() => onSaveChange(newvalue)}>{SAVE_CHANGE}</div>
//                                 }
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <hr style={{ margin: 0}}></hr>
//             </div>
//         )
//     }
// }
//
// const RowSmallProfile = ({ onEdit, title, value, NO, TITLE, EDIT}) => {
//     return(
//         <div>
//             <div style={{ paddingTop: 8, paddingBottom: 8, paddingRight: 14 }}>
//                 <a href="#" style={{ float: 'right', marginRight: -7 }}
//                     onClick={() => onEdit(value)}>{EDIT}</a>
//                 <div style={{  width: 'calc(100% - 24px)' }}>
//                     <div style={{ width: 145, marginLeft: 13,  float: 'left'}}>
//                         {TITLE}
//                     </div>
//                     <div style= {{ padding: 2, marginLeft: 158, color: (value)?'#555555':'#AAAAAA', fontSize: 13}}>
//                         { value || NO+' '+TITLE+'.' }
//                     </div>
//                 </div>
//             </div>
//             <hr style={{ margin: 0}}></hr>
//         </div>
//     )
// }

class RowInfo extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        const { open, onEdit, title, value, NO, TITLE, EDIT} = this.props
        console.log(open)
        return(
            <div>
                123123123123
                <div style={{ paddingTop: 8, paddingBottom: 8, paddingRight: 14 }}>
                    <a href="#" style={{ float: 'right', marginRight: -7 }}
                        // onClick={() => onEdit(value)}
                        >EDIT</a>
                    <div style={{  width: 'calc(100% - 24px)' }}>
                        <div style={{ width: 145, marginLeft: 13,  float: 'left'}}>
                            {TITLE}
                        </div>
                        <div style= {{ padding: 2, marginLeft: 158, color: (value)?'#555555':'#AAAAAA', fontSize: 13}}>
                            { value || NO+' '+TITLE+'.' }
                        </div>
                    </div>
                </div>
                12312312312
                <hr style={{ margin: 0}}></hr>
            </div>
        )
        // if(open)
        //     return <RowBigProfile {...this.props}/>
        // else
        //     return <RowSmallProfile {...this.props}/>
    }
}

export default RowInfo
