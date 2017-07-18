import { flem } from '../../../support'

export const getUsers = () => dispatch => {
    flem('/users', {

    }, {}
    ).then((response) => {
          const avatarUrl = 'https://lh4.googleusercontent.com/-NDr2pH7Tsh8/AAAAAAAAAAI/AAAAAAAAAAA/AI6yGXwrjmfeIKuR2PuJ5dd_Ym3svpLMOQ/s96-c/photo.jpg'
          response = {
              status: 'success',
              users: [
                  {
                      id: 654346834634683463463,
                      username: 'Long Ly',
                      avatarUrl,
                      email: 'abc@gmail.com',
                      status: true,
                  },
                  {
                      id: 456343465384634683468,
                      username: 'Thuy Linh',
                      avatarUrl,
                      email: 'abc@gmail.com',
                      status: true
                  },
                  {
                      id: 483483483483483483,
                      username: 'Loi Me',
                      avatarUrl,
                      email: 'abc@gmail.com',
                      status: false
                  },
                  {
                      id: 483648346834834683684,
                      username: 'Bach Da',
                      avatarUrl,
                      email: 'abc@gmail.com',
                      status: true
                  }
              ]
          }
          dispatch({type: 'ADMIN/USER/INIT_USERS', data: response.users})
    })
}
