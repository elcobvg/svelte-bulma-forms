/**
 * Validate a form field
 * @param  {Object} field The form field component
 * @param  {String} input Field input value
 * @return {Boolean}
 */
export const validate = (field, input) => {
  field.set({ iconRight: null })
  const { validation } = field.get()
  if (!validation.rule.test(input)) {
    field.set({
      help: validation.message,
      state: 'danger',
      iconRight: 'fa fa-exclamation-triangle'
    })
    return false
  }
  field.set({
    help: '',
    state: 'success',
    iconRight: 'fa fa-check'
  })
  return true
}

/**
 * Validation rules
 */

/* eslint-disable no-useless-escape */
export const email = {
  message: 'This email adress is invalid',
  rule: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
}

export const required = {
  message: 'This field is required',
  rule: /\S+/
}

export const password = {
  message: 'Your password must be at least 12 characters long',
  rule: /\S{12,}/
}
