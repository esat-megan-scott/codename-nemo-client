'use strict'

const store = require('../store')

const showItemsTemplate = require('../templates/item-listing.handlebars')
const showItemsUpdateTemplate = require('../templates/item-updating.handlebars')
const showMySurveysTemplate = require('../templates/my-surveys-listing.handlebars')
const showMyResultsTemplate = require('../templates/result-listing.handlebars')

// Store all surveys and show them to the user with related html.
const showItemsSuccess = function (data) {
  $('.alert-success').removeClass('hide')
  $('.alert-success').text('Surveys showing successfully!')
  $('#create-item').addClass('hide')
  $('#content').removeClass('hide')
  $('#content').text(' ')
  store.surveys = data.surveys
  const showItemsHtml = showItemsTemplate({ surveys: data.surveys })
  $('.content').append(showItemsHtml)
}

const showAfterVoteItemsSuccess = function (data, surveyId) {
  store.surveys = data.surveys
  const id = store.surveys.findIndex(survey => survey._id === surveyId)
  let opt0 = 0
  let opt1 = 0
  let opt2 = 0
  for (let i = 0; i < data.surveys[id].answer.length; i++) {
    if (data.surveys[id].answer[i].choice === data.surveys[id].options[0]) {
      opt0 = opt0 + 1
    } else if (data.surveys[id].answer[i].choice === data.surveys[id].options[1]) {
      opt1 = opt1 + 1
    } else if (data.surveys[id].answer[i].choice === data.surveys[id].options[2]) {
      opt2 = opt2 + 1
    }
  }
  store.opt0 = opt0
  store.opt1 = opt1
  store.opt2 = opt2
  const esat = {result1: opt0,
    result2: opt1,
    result3: opt2,
    survey: data.surveys[id] }
  const showItemsHtml = showMyResultsTemplate({esat: esat})
  $(`#survey${esat.survey._id}`).html(showItemsHtml)
}

// Store all the surveys which is creadted by user and show them to the user with related html.
const showMyItemsSuccess = function (data) {
  $('.alert-success').removeClass('hide')
  $('.alert-success').text('Surveys showing successfully!')
  $('#create-item').addClass('hide')
  $('#content').removeClass('hide')
  $('#content').text(' ')
  store.surveys = data.surveys
  const id = store.user._id
  const targetSurveys = store.surveys.filter(survey => survey.owner === id)
  const showMySurveysHtml = showMySurveysTemplate({ surveys: targetSurveys })
  $('.content').append(showMySurveysHtml)
}

// Feedbacks user and create a new survey.
const createItemSuccess = function (data) {
  $('.alert-success').removeClass('hide')
  $('.alert-success').text('Survey created successfully!')
  $('#create-item').trigger('reset')
  $('#create-item').addClass('hide')
  $('#create-survey-modal').modal('hide')
}

// Delete survey, feedbacks user and shows all the remaining surveys of signed-in user.
const deleteItemSuccess = function (data) {
  $('.alert-success').removeClass('hide')
  $('.alert-success').text('Survey deleted successfully!')
  $('#create-item').addClass('hide')
  $('#content').removeClass('hide')
  $('#content').text(' ')
  store.surveys = data.surveys
  const id = store.user._id
  const targetSurveys = store.surveys.filter(survey => survey.owner === id)
  const showMySurveysHtml = showMySurveysTemplate({ surveys: targetSurveys })
  $('.content').append(showMySurveysHtml)
}

// Loads the update html into the related survey are on show mysurveys page.
const showUpdateItemBar = function (id) {
  const targetSurvey = store.surveys.find(survey => survey._id === id)
  const showItemsUpdateHtml = showItemsUpdateTemplate({ survey: targetSurvey })
  $(`#survey${id}`).html(showItemsUpdateHtml)
}

// Updates the related survey with survey id and shows all surveys of signed-in user.
const updateItemSuccess = function (data) {
  $('.alert-success').removeClass('hide')
  $('.alert-success').text('Survey updated successfully!')
  $('#create-item').addClass('hide')
  $('#content').removeClass('hide')
  $('#content').text(' ')
  store.surveys = data.surveys
  const id = store.user._id
  const targetSurveys = store.surveys.filter(survey => survey.owner === id)
  const showMySurveysHtml = showMySurveysTemplate({ surveys: targetSurveys })
  $('.content').append(showMySurveysHtml)
}

const voteSuccess = function () {
  $('.alert-success').removeClass('hide')
  $('.alert-success').text('Voted successfully!')
  $('#create-item').trigger('reset')
  $('#create-item').addClass('hide')
}

// Feedbacks user about an error.
const failure = function (data) {
  $('.alert-danger').removeClass('hide')
  $('.alert-danger').text('Uh oh! There is an error here! Please try again later :)')
}

module.exports = {
  showItemsSuccess,
  showMyItemsSuccess,
  createItemSuccess,
  showUpdateItemBar,
  updateItemSuccess,
  deleteItemSuccess,
  voteSuccess,
  showAfterVoteItemsSuccess,
  failure
}
