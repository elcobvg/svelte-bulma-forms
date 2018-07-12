# Validation

This collection of **Bulma** form components provides **basic input validation** out-of-the box.

In addition to the built-in default input validation, you can supply your own validation rules and messages. There are two ways to do this:

1. With regular expressions
2. With a compare function

### Regular expression validation

````html
<PasswordField label="Password" required validate="{passwordValidator}" />
````
Where `passwordValidator` is a plain JavaScript object with two possible properties, a text `message` and a regexp `rule`: 

````javascript
{
  message: 'Your password must be at least 12 characters long',
  rule: /\S{12,}/
}
````
The custom validator is merged with the default settings, so you can choose to only provide a `message` and keep the default `rule`, for instance.

### Validation using a compare function

Instead of a `RegExp` you can also use a `function` to validate the input. This way, you can use an external validation library like [**validator.js**](https://github.com/chriso/validator.js), if you want. 

The validator object can have an extra prop `options`, which will be passed as second argument to the compare function.

**Example**

To validate credit card input:

````html
<TextField name="cc-number" label="Credit card" validate="{creditCardValidator}" />
````

````javascript
import isCreditCard from 'validator/lib/isCreditCard'

// Your Svelte component
export default {
  data () {
    return {
      creditCardValidator: {
        message: 'This is not a valid credit card number',
        rule: isCreditCard
      },
      ...
    }
  },
  ...
}
````
**NOTE** if you wish to use **validator.js** like this, you'll have to install it yourself: `npm install validator`

### TODO

Validation now occurs on an input's **onchange event**. In future versions, other events to trigger validation will be added, such as the form's **onsubmit event**.