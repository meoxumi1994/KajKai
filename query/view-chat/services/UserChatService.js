import { UserChat } from '../models'

export const getChats = (userId, offset, length, next) => {

  UserChat.findOne({ id: userId }, (err, userChat) => {
    if (err) {
      next(null)
    } else {
      const { chats } = userChat
      const mChats = []
      let currentNumberOfChat = 0, mOffset = -1

      for (let i = chats.length - 1; i >= 0; i--) {
        let chat = chats[i]
        if (chat.lastMessageTime < offset) {
          if (currentNumberOfChat < length) {

            let mChat = {}, lastMessage = chat.messages[]
            mChat.mesId = chat.id
            mChat.lastMessage = {

            }
             {
              id: '',                // Sender id
              time: '',
              message: {
                text: '',
                type: '',
                url: ''
              }
            },
            mChat.displayLabel: '',
            mChat.users: [                 // Not included requester
              {
                avatarUrl: '',
                id: '',
                name: '',
              }
            ]

            mChats.push(mChat)


            mOffset = chat.lastMessageTime
            currentNumberOfChat++
          } else {
            break
          }
        }
      }
      next(null)
    }
  })
}

export const getClientFormatPostrows = (postrows) => {
  const postrowOrder = [], mPostrows = []

  let currentNumberOfLine = 0, postrowOffset = -1

  for (let i = 0; i < postrows.length; i++) {
    let postrow = postrows[i]
    if (currentNumberOfLine + 0.5 * postrow.numberOfLine < 30) {
      postrowOrder.push(postrow.id)

      let mPostrow = {}
      mPostrow.sellpostid = postrow.sellpostId
      mPostrow.id = postrow.id
      mPostrow.content = postrow.content
      mPostrow.numline = postrow.numberOfLine
      mPostrow.images = postrow.images
      mPostrow.titles_order = postrow.titles.map(title => title.id)
      mPostrow.titles = postrow.titles
      mPostrow.products = postrow.products.map(product => ({
        id: product.id,
        content: product.content,
        imageUrl: product.imageUrl,
        list: product.list,
        totalnum: product.numberOfOrder
      }))
      mPostrows.type = postrow.type

      mPostrows.push(mPostrow)
      currentNumberOfLine += postrow.numberOfLine
      postrowOffset = i
    } else {
      break
    }
  }

  return ({
    postrows_offset: postrowOffset,
    postrow_order: postrowOrder,
    postrows: mPostrows
  })
}

export const verifyToken = (token) => {
    try {
        const decoded = jwt.verify(token, 'secret');
        return decoded;
    } catch(err) {
        return null;
    }
}
