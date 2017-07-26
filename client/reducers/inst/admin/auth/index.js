const auth = (state={
    status: true,
    id: "59785f2028f7386891685e27",
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
