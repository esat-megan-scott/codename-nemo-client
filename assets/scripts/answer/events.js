'use strict'
const ui = require('./ui')
const api = require('./api')
const getFormFields = require('../../../lib/get-form-fields')

// // Shows all the surveys.
// const onShowItems = function (event) {
//   event.preventDefault()
//   api.showItems()
//     .then(ui.showItemsSuccess)
//     .catch(ui.failure)
// }
//
// // Shows the surveys of signed-in user.
// const onShowMyItems = function (event) {
//   event.preventDefault()
//   api.showMyItems()
//     .then(ui.showMyItemsSuccess)
//     .catch(ui.failure)
// }

// Creates the new list for signed-in user.
const onVote = function (event) {
  event.preventDefault()
  const id = event.target.id
  console.log(event.target.id)
  console.log(id, ' kk')
  api.vote(id)
    .then(ui.voteSuccess)
    .catch(ui.failure)
}

// // Deletes the list of signed-in user.
// const onDeleteItem = function (event) {
//   event.preventDefault()
//   api.deleteItem($(event.target).data('id'))
//     .then(
//       function () {
//         api.showItems()
//           .then(ui.deleteItemSuccess)
//       })
//     .catch(ui.failure)
// }
//
// // Loads the update item html into the related list's space at the show lists page.
// const onUpdateItemButton = function (event) {
//   event.preventDefault()
//   console.log(event.target)
//   const id = $(event.target).data('id')
//   console.log(id)
//   ui.showUpdateItemBar(id)
// }
//
// // Updates the list of signed-in user.
// const onUpdateItem = function (event) {
//   event.preventDefault()
//   const id = $(event.target).data('id')
//   const data = getFormFields(event.target)
//   api.updateItem(id, data)
//     .then(
//       function () {
//         api.showMyItems()
//           .then(ui.updateItemSuccess)
//       })
//     // .then(ui.updateItemSuccess)
//     .catch(ui.failure)
// }

// handlebars
const addHandlers = () => {
  $('.content').on('click', '.btn-warning', onVote)
}

module.exports = {
  addHandlers
}
