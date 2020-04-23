'use strict'

const store = require('../store')

const showItemsTemplate = require('../templates/item-listing.handlebars')
const showItemsUpdateTemplate = require('../templates/item-updating.handlebars')
const showMySurveysTemplate = require('../templates/my-surveys-listing.handlebars')
const showMyResultsTemplate = require('../templates/result-listing.handlebars')

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

const showAfterVoteItemsSuccess = function (data, surveyId) {
  store.surveys = data.surveys
  console.log(store.surveys, ' survey has ')
  console.log(store.surveys[7]._id, ' survey 7 ')
  // const id = store.survyes // this is totally wrong, it should be smthng else
  // console.log(id, ' aa ')
  const id = store.surveys.findIndex(survey => survey._id === surveyId)
  console.log(id, ' target is ')
  // console.log(id, ' id')
  // console.log(store.user, ' store has a user like that ')
  // console.log(data, ' data in show')
  // console.log(data.surveys, ' data has surveys ')
  // console.log(data.surveys[id].answer, ' answers for 7th survey')
  let opt0 = 0
  let opt1 = 0
  let opt2 = 0
  // console.log(data.surveys[7].answer.length, ' length')
  for (let i = 0; i < data.surveys[id].answer.length; i++) {
    if (data.surveys[id].answer[i].choice === data.surveys[id].options[0]) {
      // console.log(data.surveys[7].answer[i].choice, ' in for loop it is the choice')
      // console.log(data.surveys[7].options[0], ' in for loop it is the options')
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
  console.log(opt0, ' option1 ', opt1, ' option2 ', opt2, ' option3 ')
  // console.log(data.surveys[7].answer[0].choice, ' data for choice')
  // console.log(data.surveys[7].options[1], ' data for option1')
}

// Store all the surveys which is creadted by user and show them to the user with related html.
const showMyItemsSuccess = function (data) {
  $('.alert-success').removeClass('hide')
  $('.alert-success').text('Surveys showing Successfully!')
  $('#create-item').addClass('hide')
  $('#content').removeClass('hide')
  $('#content').text(' ')
  //  console.log(data, ' is') // data.surveys.owner
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
  // console.log(targetSurvey)
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

const voteSuccess = function () {
  $('.alert-success').removeClass('hide')
  $('.alert-success').text('Survey voted Successfully!')
  $('#create-item').trigger('reset')
  $('#create-item').addClass('hide')
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
  voteSuccess,
  showAfterVoteItemsSuccess,
  failure
}
