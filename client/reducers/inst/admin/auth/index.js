const auth = (state={
    status: true,
    id: '597612080b080d79757e39bf',
    adminName: 'admin',
}, action) => {
    switch (action.type) {
      case 'ADMIN/AUTH':
          const { status, adminName, id } = action.data
          return {
              ...state,
              status,
              adminName,
              id
          }
      default:
          return state
    }
}

export default auth
