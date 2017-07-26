const auth = (state={
    status: true,
    id: '59775f1e69c80c310ea04f72',
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
