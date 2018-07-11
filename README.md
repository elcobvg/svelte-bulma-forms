# svelte-bulma-forms
Bulma form components for [Svelte.js](https://svelte.technology/)

These components offer a convenient way to build HTML forms, either in **Svelte** projects or in **plain JavaScript.**

**NOTE:** this is still a work in progress

### TODO
- [x] Remaining form elements
- [x] Input validation for all elements
- [x] Consistent event handling
- [x] Documentation of all element options
- [ ] Capability to add multiple validation rules
- [ ] Additional elements like autocomplete, credit card field etc.

## Install

`npm install svelte-bulma-forms`

## Use

Import the components you need in your Svelte project.

````javascript
import {
  TextField,
  DateField,
  EmailField
} from 'svelte-bulma-forms/module'

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

## Available elements

### Form fields

**Form fields** are composite components offering the most convenient way to build forms. The following fields are available:

- `ButtonField`
- `DateField`
- `EmailField`
- `FileField`
- `PasswordField`
- `SelectField`
- `TextareaField`
- `TextField`

See [**form fields**](https://github.com/elcobvg/svelte-bulma-forms/tree/master/src/fields)

### Form controls

In cases where you may wish to use **form input fields** by themselves, you can use [**form controls**](https://github.com/elcobvg/svelte-bulma-forms/tree/master/src/controls). The folliwng controls are available:

- `ButtonControl`
- `CheckboxControl`
- `FileControl`
- `InputControl`
- `MultiSelectControl`
- `RadioControl`
- `SelectControl`
- `TextareaControl`

### Form groups

Controls like **checkboxes** and **radio buttons** need to be grouped together. There is also a group for regular inputs and grouped **buttons**:

- `CheckboxGroup`
- `InputGroup`
- `RadioGroup`

See [**form groups**](https://github.com/elcobvg/svelte-bulma-forms/tree/master/src/groups)

## Further information

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
It's made with [Svelte](https://svelte.technology/), which means you don't need any JS framework. Just use the file in the `dist` directory in any Javascript project:

**include the bundle:** 

````html
<script src="svelte-bulma-forms/dist/index.js"></script>
````
**create components like so:**

````javascript
const { EmailField } = SvelteBulmaForms

const emailInput = new EmailField({
  target: document.querySelector('#email'),
  data: { 
    name: 'email',
    label: 'Email address',
    horizontal: true
  }
})
````

### Reference

- https://bulma.io/documentation/form/general
- https://svelte.technology/guide
- https://fontawesome.com/v4.7.0/