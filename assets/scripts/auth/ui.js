'use strict'

const store = require('../store')

// Lovely ui codes which are related with their names.

const signUpSuccess = function () {
  $('.alert-success').removeClass('hide')
  $('.alert-success').text('Signed up successfully')
  // $('#sign-up')[0].reset()
  $('#sign-up').trigger('reset')
  $('#sign-up-modal').modal('hide')
  // document.getElementById('sign-up').reset()
}

const signUpFailure = function () {
  $('.alert-danger').removeClass('hide')
  $('.alert-danger').text('Error when signing up')
  $('#sign-up').trigger('reset')
}

const signInSuccess = function (data) {
  $('.alert-success').removeClass('hide')
  $('.alert-success').text('Signed in successfully')
  $('#sign-out').removeClass('hide')
  $('#cpb').removeClass('hide')
  $('#sub').addClass('hide')
  $('#sib').addClass('hide')
  $('#auth-dd').addClass('hide')
  $('#surveys-dd').removeClass('hide')
  $('#settings-dd').removeClass('hide')
  $('.item-group').removeClass('hide')
  $('.info').addClass('hide')
  $('#sign-in-modal').modal('hide')
  store.user = data.user
  $('#sign-in').trigger('reset')
}

const signInFailure = function () {
  $('.alert-danger').removeClass('hide')
  $('.alert-danger').text('Error when signing in')
  $('#sign-in').trigger('reset')
}

const signOutSuccess = function () {
  $('.alert-success').removeClass('hide')
  $('.alert-success').text('Signed out successfully')
  $('.item-group').addClass('hide')
  $('#content').addClass('hide')
  $('#sign-out').addClass('hide')
  $('#cpb').addClass('hide')
  $('#sub').removeClass('hide')
  $('#sib').removeClass('hide')
  $('#create-item').addClass('hide')
  $('.info').removeClass('hide')
  $('.navbar-expand-lg').show('')
  $('#auth-dd').removeClass('hide')
  $('#surveys-dd').addClass('hide')
  $('#settings-dd').addClass('hide')

}

const signOutFailure = function () {
  $('.alert-danger').removeClass('hide')
  $('.alert-danger').text('Error when signing out')
}

const changePasswordSuccess = function () {
  $('.alert-success').removeClass('hide')
  $('.alert-success').text('Password changed')
  $('#change-password').trigger('reset')
  $('#change-password-modal').modal('hide')
}

const changePasswordFailure = function () {
  $('.alert-danger').removeClass('hide')
  $('.alert-danger').text('Failed to change password')
  $('#change-password').trigger('reset')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure
}
