/**
 * Validate a form field
 * @param  {Object} field The form field component
 * @param  {String} input Field input value
 * @return {Boolean}
 */
export const validate = (field, input) => {
  let { validation, iconRight, help, original } = field.get()

  if (!validation) {
    return true
  }

  // store original icon & help text
  original || field.set({ original: { iconRight, help } })
  field.set({ iconRight: null })

  // check if multiple rules
  if (!validation.length) {
    validation = [validation]
  }

  for (const validator of validation) {
    if (!validator.rule.test(input)) {
      field.set({
        help: validator.message,
        state: 'danger',
        iconRight: 'fa fa-exclamation-triangle'
      })
      // return on first failed rule
      return false
    }
  }
  // all rules passed
  field.set({
    help: '',
    state: 'success',
    iconRight: 'fa fa-check'
  })
  return true
}

/**
 * Helper to make the validation rules
 * @param  {Object} data Data properties of form input component
 * @return {Array|Object}
 */
export const makeRules = (data) => {
  const { _validate, validate, required } = data
  Object.assign(_validate, validate)
  if (Object.keys(_validate).length) {
    return required ? [isRequired, _validate] : _validate
  }
  return required ? isRequired : null
}

/**
 * Validation rules
 */

/* eslint-disable no-useless-escape */
export const isEmail = {
  message: 'This email adress is invalid',
  rule: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
}

export const isRequired = {
  message: 'This field is required',
  rule: /\S+/
}

export const isPassword = {
  message: 'Your password must be at least 12 characters long',
  rule: /\S{12,}/
}

export const isDate = {
  message: 'Please enter a valid date',
  rule: /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$|^(19|20)\d{2}-(0[1-9]|1[0-2])-(0[1-9]|1\d|2\d|3[01])$/
}

export const isUrl = {
  message: 'Please enter a valid URL',
  rule: /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/
}

export const isAlphaNum = {
  message: 'Sorry, only letters and numbers are allowed',
  rule: /^[a-zA-Z0-9]*$/
}
