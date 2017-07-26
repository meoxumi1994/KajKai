import { flem, flet } from '../../../support'

export const getFeedbacks = (offset) => dispatch => {
    flem('/feedbacks',{
        offset: offset,
        length: 50
    })
    .then((response) => {
        console.log('[API] /getFeedbacks', response);
        if ( response != undefined && response.status == 'success') {
            if (response.data.length > 0) {
                dispatch({type: 'ADMIN/DASHBOARD/INIT_FEEDBACK', data: response.data})
            } else {
                dispatch({type: 'ADMIN/DASHBOARD/DISPLAY', subType: 'LOAD_MORE', data: {display: false}})
            }
        }
    })
}

export const getFeedback = (id) => dispatch => {
    flem('/feedback/'+id,{})
    .then((response) => {
        console.log('[API] /getFeedback', response);
        if ( response != undefined && response.status == 'success') {
              dispatch({type: 'ADMIN/DASHBOARD/INIT_DETAILS', data: response.data})
        }
    })
}
