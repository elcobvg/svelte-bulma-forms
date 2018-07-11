# svelte-bulma-forms
Bulma form components for [Svelte.js](https://svelte.technology/)

**Note:** this is still a work in progress

### TODO
- [x] Remaining form elements
- [x] Input validation for all elements
- [x] Consistent event handling
- [ ] Capability to add multiple validation rules
- [ ] Documentation of all element options

## Install

`npm install svelte-bulma-forms`

## Use

Import the components you need in your Svelte project.

````javascript
import {
  TextField,
  DateField,
  EmailField
} from 'svelte-bulma-forms'

export default {
  components: {
    TextField,
    DateField,
    EmailField,
	...
  }
}
````
And then use them like so:

````html
<TextField name="name" label="Name" horizontal />

<CheckboxGroup horizontal>
  <CheckboxControl name="agree" required>
    I agree to the <a href="#">terms and conditions</a>
  </CheckboxControl>
</CheckboxGroup>

<ButtonField state="info" type="submit" horizontal />
````
**Don't forget to include the Bulma and Font Awesome CSS files!**

## Options

For detailed information about the options, see the [Bulma documentation](https://bulma.io/documentation/form/).

### Events
Each input element emits a `change` event with its `value` on input change, which you can use in your app according to your needs.

### Custom input validation
In addition to the built-in default input validation, you can supply your own validation rules and messages, like this:

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
The custom validator is merged with the default settings, so you can only provide a `message` and keep the default `rule`, for instance.

## Made with Svelte
It's made with [Svelte](https://svelte.technology/), which means you don't need any JS framework. Just use the file in the `dist` directory in any Javascript project.