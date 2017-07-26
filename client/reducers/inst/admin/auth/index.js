const auth = (state={
    status: false,
    id: "",
    adminName: '',
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
