export const readChat = (mesId) => ({
    type: 'server/READ_CHAT',
    mesId: mesId
})

export const  addMember = (mesId, id, members) => ({
    type: 'server/ADD_MEMBER',
    data: {
        mesId,
        id,
        members,
        time: Date.now()
    }
})

export const sendMessage = (mesId, id, text, url, type) => ({
  type: 'server/SEND_MESSAGE',
  data: {
      mesId,
      id,
      message: {
          text,
          url,
          type
      },
      time: Date.now()
  }
})
