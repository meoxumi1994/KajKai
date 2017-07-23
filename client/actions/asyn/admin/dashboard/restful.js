import { flem } from '../../../support'

export const getNewFeed = (offset, length) => dispatch => {
    flem('/admin/newfeeds',{
        offset,
        length
    })
    .then((response) => {
        response = {
          status: 'success',
          data: [
              {
                id: 24234,
                reporter: {
                    id: 234024,
                    username: 'Long Ly',
                    avatarUrl: 'http://d2d3l62ibcj1br.cloudfront.net/hyperin-portal/imageserver/tenants/54444/_DSC3158.jpg',
                },
                defendant: {
                    id: 23402456454,
                    username: 'Minh gay',
                    avatarUrl: 'http://d2d3l62ibcj1br.cloudfront.net/hyperin-portal/imageserver/tenants/54444/_DSC3158.jpg',
                },
                reason: "Minh gay sida",
                time: Date.now(),
                status: true
              },
              {
                id: 24235154,
                reporter: {
                    id: 234024,
                    username: 'Long Ly',
                    avatarUrl: 'http://d2d3l62ibcj1br.cloudfront.net/hyperin-portal/imageserver/tenants/54444/_DSC3158.jpg',
                },
                defendant: {
                    id: 23402456454,
                    username: 'Minh gay',
                    avatarUrl: 'http://d2d3l62ibcj1br.cloudfront.net/hyperin-portal/imageserver/tenants/54444/_DSC3158.jpg',
                },
                reason: "Minh gay sida 2",
                time: Date.now(),
                status: false
              },
              {
                id: 24238749874,
                reporter: {
                    id: 234024,
                    username: 'Long Ly',
                    avatarUrl: 'http://d2d3l62ibcj1br.cloudfront.net/hyperin-portal/imageserver/tenants/54444/_DSC3158.jpg',
                },
                defendant: {
                    id: 23402456454,
                    username: 'Minh gay',
                    avatarUrl: 'http://d2d3l62ibcj1br.cloudfront.net/hyperin-portal/imageserver/tenants/54444/_DSC3158.jpg',
                },
                reason: "Minh gay sida 4",
                time: Date.now(),
                status: true
              },
              {
                id: 242848734,
                reporter: {
                    id: 234024,
                    username: 'Long Ly',
                    avatarUrl: 'http://d2d3l62ibcj1br.cloudfront.net/hyperin-portal/imageserver/tenants/54444/_DSC3158.jpg',
                },
                defendant: {
                    id: 23402456454,
                    username: 'Minh gay',
                    avatarUrl: 'http://d2d3l62ibcj1br.cloudfront.net/hyperin-portal/imageserver/tenants/54444/_DSC3158.jpg',
                },
                reason: "Minh gay sida 3",
                time: Date.now(),
                status: true
              }
          ]
        }
        dispatch({type: 'ADMIN/DASHBOARD/INIT_FEEDBACK', data: response.data})
    })
}
