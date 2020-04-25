'use strict'
const ui = require('./ui')
const api = require('./api')
const getFormFields = require('../../../lib/get-form-fields')

// Shows all the surveys.
const onShowItems = function (event) {
  event.preventDefault()
  api.showItems()
    .then(ui.showItemsSuccess)
    .catch(ui.failure)
}

// Shows the surveys of signed-in user.
const onShowMyItems = function (event) {
  event.preventDefault()
  api.showMyItems()
    .then(ui.showMyItemsSuccess)
    .catch(ui.failure)
}

// Creates the new survey for signed-in user.
const onCreateItem = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  const options = []
  options.push(data.survey.option1)
  options.push(data.survey.option2)
  options.push(data.survey.option3)
  data.survey.options = options
  api.createItem(data)
    .then(ui.createItemSuccess)
    .catch(ui.failure,
      $('#create-item').trigger('reset'))
}

// Deletes the surveys of signed-in user.
const onDeleteItem = function (event) {
  event.preventDefault()
  api.deleteItem($(event.target).data('id'))
    .then(
      function () {
        api.showItems()
          .then(ui.deleteItemSuccess)
      })
    .catch(ui.failure)
}

// Loads the update survey html into the related survey's space at the show  mysurveys page.
const onUpdateItemButton = function (event) {
  event.preventDefault()
  const id = $(event.target).data('id')
  ui.showUpdateItemBar(id)
}

// Updates the surveys of signed-in user.
const onUpdateItem = function (event) {
  event.preventDefault()
  const id = $(event.target).data('id')
  const data = getFormFields(event.target)
  const options = []
  options.push(data.survey.option1)
  options.push(data.survey.option2)
  options.push(data.survey.option3)
  data.survey.options = options
  api.updateItem(id, data)
    .then(
      function () {
        api.showMyItems()
          .then(ui.updateItemSuccess)
      })
    // .then(ui.updateItemSuccess)
    .catch(ui.failure)
}

// allow users to vote and see the results for voted survey
const onVote = function (event) {
  event.preventDefault()
  const surveyId = $(event.target).closest('section').data('id')
  const radio = $(`input[name='${surveyId}']:checked`).val()
  api.vote(surveyId, radio)
    .then(ui.voteSuccess)
    .then(function () {
      api.showItems()
        .then(data => ui.showAfterVoteItemsSuccess(data, surveyId))
    })
    .catch(ui.failure)
}

// handlebars
const addHandlers = () => {
  $('#all-items').on('click', onShowItems)
  $('#my-items').on('click', onShowMyItems)
  $('#create-item').on('submit', onCreateItem)
  $('.content').on('click', '.btn-danger', onDeleteItem)
  $('.content').on('click', '.btn-success', onUpdateItemButton)
  $('.content').on('submit', '.survey-update', onUpdateItem)
  $('.content').on('click', '.btn-warning', onVote)
}

module.exports = {
  addHandlers
}
