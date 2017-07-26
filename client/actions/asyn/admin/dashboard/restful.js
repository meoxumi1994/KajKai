import { flem, flet } from '../../../support'

export const getFeedbacks = (offset, length) => dispatch => {
    flet('/feedbacks',{
        offset: 0,
        length: 10
    })
    .then((response) => {
        response = {
            status: 'success',
            data: [
                {
                  id: 123152141,
                  reporter: {
                      user: {
                          id: 2342342352,
                          username: 'Long Lý',
                          avatarUrl: ''
                      },
                      ban: {
                          status: false,
                      },
                      content: 'bán thực phẩm bẩn'
                  },
                  defendant: {
                      user: {
                          id: 2349789,
                          username: 'Đức Minh',
                          avatarUrl: ''
                      },
                      ban: {
                          status: true,
                      },
                      sellpostId: 252423523
                  },
                  decision: '',
                  status: false,
                  time: Date.now(),
                },
            ]
        }
        console.log('[API] /getFeedbacks', response);
        if (response.status == 'success') {
            dispatch({type: 'ADMIN/DASHBOARD/INIT_FEEDBACK', data: response.data})
        }
    })
}
