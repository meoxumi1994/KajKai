import { flem, flet } from '../../../support'

export const getFeedbacks = (offset, length) => dispatch => {
    flem('/feedbacks',{
        offset: 0,
        length: 100
    })
    .then((response) => {
        console.log('[API] /getFeedbacks', response);
        if ( response != undefined && response.status == 'success') {
            dispatch({type: 'ADMIN/DASHBOARD/INIT_FEEDBACK', data: response.data})
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
