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
                      id: 654346756834634683463463,
                      username: 'Long Ly',
                      avatarUrl,
                      email: 'abc@gmail.com',
                      status: true,
                      stores: [
                        {
                          id: 53453,
                          storename: 'Store A',
                          avatarUrl: 'http://d2d3l62ibcj1br.cloudfront.net/hyperin-portal/imageserver/tenants/54444/_DSC3158.jpg',
                        },
                      ]
                  },
                  {
                      id: 456343465345684634683468,
                      username: 'Thuy Linh',
                      avatarUrl,
                      email: 'abc@gmail.com',
                      status: true,
                      stores: [
                        {
                          id: 534890708953,
                          storename: 'Store A',
                          avatarUrl: 'http://d2d3l62ibcj1br.cloudfront.net/hyperin-portal/imageserver/tenants/54444/_DSC3158.jpg',
                        },
                        {
                          id: 346438568763,
                          storename: 'Store B',
                          avatarUrl: 'http://d2d3l62ibcj1br.cloudfront.net/hyperin-portal/imageserver/tenants/54444/_DSC3158.jpg',
                        },
                        {
                          id: 34635678546436,
                          storename: 'Store C',
                          avatarUrl: 'http://d2d3l62ibcj1br.cloudfront.net/hyperin-portal/imageserver/tenants/54444/_DSC3158.jpg',
                        }
                      ]
                  },
                  {
                      id: 48348348348344583483,
                      username: 'Loi Me',
                      avatarUrl,
                      email: 'abc@gmail.com',
                      status: false,
                      stores: [
                        {
                          id: 346434563453763,
                          storename: 'Store B',
                          avatarUrl: 'http://d2d3l62ibcj1br.cloudfront.net/hyperin-portal/imageserver/tenants/54444/_DSC3158.jpg',
                        }
                      ]
                  },
                  {
                      id: 483648346834838674683684,
                      username: 'Bach Da',
                      avatarUrl,
                      email: 'abc@gmail.com',
                      status: true,
                      stores: [
                        {
                          id: 534545633,
                          storename: 'Store A',
                          avatarUrl: 'http://d2d3l62ibcj1br.cloudfront.net/hyperin-portal/imageserver/tenants/54444/_DSC3158.jpg',
                        },
                        {
                          id: 3464456345633763,
                          storename: 'Store B',
                          avatarUrl: 'http://d2d3l62ibcj1br.cloudfront.net/hyperin-portal/imageserver/tenants/54444/_DSC3158.jpg',
                        },
                        {
                          id: 6346436456353454363,
                          storename: 'Store C',
                          avatarUrl: 'http://d2d3l62ibcj1br.cloudfront.net/hyperin-portal/imageserver/tenants/54444/_DSC3158.jpg',
                        },
                        {
                          id: 6346436534456354345435363,
                          storename: 'Store D',
                          avatarUrl: 'http://d2d3l62ibcj1br.cloudfront.net/hyperin-portal/imageserver/tenants/54444/_DSC3158.jpg',
                        },
                      ]
                  }
              ]
          }
          dispatch({type: 'ADMIN/USER/INIT_USERS', data: response.users})
    })
}

export const getUser = (id) => dispatch => {
    flem('/user/'+id)
    .then((response) => {
        response = {
            data: {
              username: 'Long Ly',
              email: 'prominh@gmail.com',
              avatarUrl: 'https://d1z4p30mgj29.cloudfront.net/abcxyz.png',
              coverUrl: 'https://d1z4p30mgj29.cloudfront.net/xyzabc.png',
              address: 'Ngõ 241/61 phường Phương Liên, quận Đống Đa, thành phố Hà Nội',
              phone: "+84 989810194",
              language: 'vi',
              sex: 'MALE',
              yearOfBirth: '6462636',
              lastUpdate: {
                  username: 'Long Ly',
                  phone: "+84 989 810 194",
                  address: "Kham Thien",
              },
              storeList: [{
                  id: '05434535',
                  storename: 'my store 1',
                  avatarUrl: 'https://d1z4p30mgj29.cloudfront.net/abcxyz.png',
              },
              {
                  id: '564567546546',
                  storename: 'my store 2',
                  avatarUrl: 'https://d1z4p30mgj29.cloudfront.net/abcxyz.png',
              }],
            }
        }

        dispatch({type: 'ADMIN/USER/USER_DETAILS', data: response.data})
    })
}
