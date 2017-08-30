import { createSelector } from 'reselect'

const getCommentFilter = (state, props) =>
  state.commentLists[props.listId].commentFilter

const getComments = (state, props) => state.commentLists[props.listId].comments

const makeGetCommentTodos = () => {
  return createSelector(
    [getCommentFilter, getComments],
    (commentFilter, comments) => {
      switch (commentFilter) {
        case 'NEW':
          return comments.filter(comment => (comment.status == 'NEW'))
        case 'RECEIVED':
          return comments.filter(comment => (comment.status == 'RECEIVED'))
        default:
          return comments
      }
    }
  )
}

export default makeGetCommentTodos
