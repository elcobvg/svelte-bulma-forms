/**
 * Validate a form field
 * @param  {Object} field The form field component
 * @param  {String} input Field input value
 * @return {Boolean}
 */
export const validate = (field, input) => {
  let { validation, iconRight, help, original } = field.get()

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
 * @param  {Object} options._validate [description]
 * @param  {Object} options.validate  [description]
 * @param  {Boolean} options.required  [description]
 * @return {Array|Object}
 */
export const makeRules = ({ _validate, validate, required }) => {
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
