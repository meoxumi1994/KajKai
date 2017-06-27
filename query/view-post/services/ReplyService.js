export const getClientFormatReply = (reply) => ({
  id: reply.id,
  ownerid: reply.userId,
  leadercommentid: reply.commentId,
  avatarUrl: reply.avatarUrl,
  name: reply.username,
  content: reply.content,
  time: reply.time,
  numlike: reply.numberOfLike,
})
