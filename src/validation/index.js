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

  // coerce to string
  input = input + ''

  // store original icon & help text
  original || field.set({ original: { iconRight, help } })
  field.set({ iconRight: null })

  // check if multiple rules
  if (!validation.length) {
    validation = [validation]
  }

  for (const validator of validation) {
    let pass = true
    if (typeof validator.rule === 'function') {
      const { options } = validator
      pass = validator.rule(input, options)
    } else {
      pass = validator.rule.test(input)
    }
    // return on first failed rule
    if (!pass) {
      return fail(field, validator.message)
    }
  }
  // all rules passed
  return success(field)
}

const fail = (field, message) => {
  field.set({
    help: message,
    state: 'danger',
    iconRight: 'fa fa-exclamation-triangle'
  })
  return false
}

const success = (field) => {
  const { original } = field.get()
  field.set({
    help: original ? original.help : '',
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

export const isUrlSafe = {
  message: "Sorry, only letters, numbers, '-' and '_' are allowed",
  rule: /^[a-zA-Z0-9_-]*$/
}

export const isAlphaNum = {
  message: 'Sorry, only letters and numbers are allowed',
  rule: /^[a-zA-Z0-9]*$/
}
