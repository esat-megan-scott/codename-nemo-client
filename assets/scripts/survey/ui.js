'use strict'

const store = require('../store')

const showItemsTemplate = require('../templates/item-listing.handlebars')
const showItemsUpdateTemplate = require('../templates/item-updating.handlebars')
const showMySurveysTemplate = require('../templates/my-surveys-listing.handlebars')

// Store all surveys and show them to the user with related html.
const showItemsSuccess = function (data) {
  $('.alert-success').removeClass('hide')
  $('.alert-success').text('Surveys showing Successfully!')
  $('#create-item').addClass('hide')
  $('#content').removeClass('hide')
  $('#content').text(' ')
  store.surveys = data.surveys
  // console.log(data.surveys)
  const showItemsHtml = showItemsTemplate({ surveys: data.surveys })
  $('.content').append(showItemsHtml)
}

// Store all the surveys which is creadted by user and show them to the user with related html.
const showMyItemsSuccess = function (data) {
  $('.alert-success').removeClass('hide')
  $('.alert-success').text('Surveys showing Successfully!')
  $('#create-item').addClass('hide')
  $('#content').removeClass('hide')
  $('#content').text(' ')
  console.log(data, ' is') // data.surveys.owner
  store.surveys = data.surveys
  const id = store.user._id
  const targetSurveys = store.surveys.filter(survey => survey.owner === id)
  const showMySurveysHtml = showMySurveysTemplate({ surveys: targetSurveys })
  $('.content').append(showMySurveysHtml)
}

// Feedbacks user and create a new list.
const createItemSuccess = function (data) {
  $('.alert-success').removeClass('hide')
  $('.alert-success').text('Survey created Successfully!')
  $('#create-item').trigger('reset')
  $('#create-item').addClass('hide')
}

// Delete list, feedbacks user and shows all the remaining lists of signed-in user.
const deleteItemSuccess = function (data) {
  $('.alert-success').removeClass('hide')
  $('.alert-success').text('Survey deleted Successfully!')
  $('#create-item').addClass('hide')
  $('#content').removeClass('hide')
  $('#content').text(' ')
  store.surveys = data.surveys
  const id = store.user._id
  const targetSurveys = store.surveys.filter(survey => survey.owner === id)
  const showMySurveysHtml = showMySurveysTemplate({ surveys: targetSurveys })
  $('.content').append(showMySurveysHtml)
}

// Loads the update html into the related list are on show lists page.
const showUpdateItemBar = function (id) {
  // console.log(id)
  const targetSurvey = store.surveys.find(survey => survey._id === id)
  console.log(targetSurvey)
  const showItemsUpdateHtml = showItemsUpdateTemplate({ survey: targetSurvey })
  $(`#survey${id}`).html(showItemsUpdateHtml)
}

// Updates the related lists with list id and shows all lists of signed-in user.
const updateItemSuccess = function (data) {
  $('.alert-success').removeClass('hide')
  $('.alert-success').text('Survey updated Successfully!')
  $('#create-item').addClass('hide')
  $('#content').removeClass('hide')
  $('#content').text(' ')
  store.surveys = data.surveys
  const id = store.user._id
  const targetSurveys = store.surveys.filter(survey => survey.owner === id)
  const showMySurveysHtml = showMySurveysTemplate({ surveys: targetSurveys })
  $('.content').append(showMySurveysHtml)
}

// Feedbacks user about an error.
const failure = function (data) {
  $('.alert-danger').removeClass('hide')
  $('.alert-danger').text('Uh! There is an error here! Please try again later :)')
}

module.exports = {
  showItemsSuccess,
  showMyItemsSuccess,
  createItemSuccess,
  showUpdateItemBar,
  updateItemSuccess,
  deleteItemSuccess,
  failure
}
