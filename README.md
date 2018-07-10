# svelte-bulma-forms
Bulma form componenents for [Svelte](https://svelte.technology/)
**Note:** this is still a work in progress

### TODO
- [ ] Remaining form elements
- [ ] Input validation for all elements
- [ ] Consistent event handling

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

**Don't forget to include the Bulma CSS files!**

## Options

For detailed information about the options, see the [Bulma documentation](https://bulma.io/documentation/form/).

## Made with Svelte
It's made with [Svelte](https://svelte.technology/), which means you don't need any JS framework. Just use the file in the `dist` directory in any Javascript project.