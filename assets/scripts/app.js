'use strict'

const authEvents = require('./auth/events.js')
const surveyEvents = require('./survey/events.js')

// Pops up the create survey form.
const cib = function () {
  $('#create-item').removeClass('hide')
  $('#content').addClass('hide')
}

$(() => {
  // sign up for new user.
  $('#sign-up').on('submit', authEvents.onSignUp)

  // sign in for registered user.
  $('#sign-in').on('submit', authEvents.onSignIn)

  // sign out for signed-in user.
  $('#sign-out').on('click', authEvents.onSignOut)

  // change password for registered user.
  $('#change-password').on('submit', authEvents.onChangePassword)

  // clear the alerts from the page.
  $('body').on('click', authEvents.clear)

  // load the create survey form.
  $('#cib').on('click', cib)

  // surveys related events.
  surveyEvents.addHandlers()
})
