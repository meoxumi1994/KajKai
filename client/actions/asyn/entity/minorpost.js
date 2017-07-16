import { flet } from '~/actions/support'

export const postMinorPost = (minorpost) => dispatch => {
    dispatch({ type: 'CREATE_MINOR_POST_ING'})
    flet('/minorpost',{
        ...minorpost,
    })
    .then(({ status, minorpost }) => {
        if(status == 'success'){
            dispatch({ type: 'CREATE_MINOR_POST_SUCCESS', minorpost: minorpost})
        }else {
            dispatch({ type: 'CREATE_MINOR_POST_FAILED'})
        }
    })
}
