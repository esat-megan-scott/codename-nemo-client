'use strict'

const config = require('../config')
const store = require('../store.js')

// Lovely api codes which are related with their names but bec. of an last
// update Items means lists here.

// Shows all the lists of signed-in user.
const vote = function (id) {
  const data = store.surveys
  console.log(data, 'aa')
  return $.ajax({
    url: config.apiUrl + '/answers',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
//
// // Creates new list for signed-in user.
// const createItem = function (data) {
//   return $.ajax({
//     url: config.apiUrl + '/surveys',
//     method: 'POST',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     },
//     data
//   })
// }
//
// // Deletes the created List of signed-in user.
// const deleteItem = function (id) {
//   return $.ajax({
//     url: config.apiUrl + '/surveys/' + id,
//     method: 'delete',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     }
//   })
// }
//
// // Updates the created List of signed-in user.
// const updateItem = function (id, data) {
//   return $.ajax({
//     url: config.apiUrl + '/surveys/' + id,
//     method: 'PATCH',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     },
//     data
//   })
// }

module.exports = {
  vote
}
