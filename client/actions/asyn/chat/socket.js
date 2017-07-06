export const readChat = (mesId) => ({
    type: 'server/READ_CHAT',
    mesId: mesId
})

export const  addMember = (mesId, id, members) => {
  const a = {
      type: 'server/ADD_MEMBER',
      data: {
          mesId,
          id,
          members,
          time: Date.now()
      }
  }
  console.log(a);
  return a
}
