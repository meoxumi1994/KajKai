import { flet, flem } from '~/actions/support'

export const getTarget = (id) => dispatch => {
    console.log('/getTarget');
    flet('/gettarget',{
        id: id
    },{

    })
    .then((response) => {
        return response;
    })
}
