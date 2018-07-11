# Form fields

**Form fields** are composite components offering a convenient way to build forms. 
The `field` container is a simple container for:

- a text `label`
- a form `control`
- an optional `help` text

All **form fields** feature input validation where applicable, which can be extended with custom rules and/or messages.

In cases where you may wish to use **form input fields** by themselves, you can use [**form controls**](https://github.com/elcobvg/svelte-bulma-forms/tree/master/src/controls)

## Button

### Markup

```html
<ButtonField state="primary" type="submit" size="large" horizontal />
```
### Props

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| type | String | submit | false | button type
| name | String | Submit | false | button label
| state | String | - | false | color setting of button
| size | String | - | false | button size
| href | String | - | false | link button


## Date

### Markup

```html
<DateField name="birthday" label="Birth day" value="2011-06-19" />

<DateField name="arrival" label="Arrival date" horizontal>
  <ButtonControl id="arrival-button" name="OK" />
</DateField>
```
### Props

Identical to `TextField` (see below)

### Slots

Identical to `TextField` (see below)

## Email

### Markup

```html
<EmailField name="email" label="Email address" validate="{emailValidator}" />
```
### Props

Identical to `TextField` (see below)

### Slots

Identical to `TextField` (see below)


## File

### Markup

```html
<FileField name="upload" label="Upload file" horizontal />
```
### Props

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| name | String | - | true | form input name
| label | String | - | false | form input label
| state | String | - | false | color setting of control
| size | String | - | false | control size
| help | String | - | false | optional help text
| horizontal | Boolean | false | false | horizontal form layout
| required | Boolean | false | false | require input field
| disabled | Boolean | false | false | disable input


## Password

### Markup

```html
<PasswordField name="password" label="Password" horizontal required />
```
### Props

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| name | String | - | true | form input name
| label | String | - | false | form input label
| state | String | - | false | color setting of control
| size | String | - | false | control size
| help | String | - | false | optional help text
| iconLeft | String | - | false | optional font-awesome icon
| reveal | Boolean | false | false | toggle show/hide password input
| horizontal | Boolean | false | false | horizontal form layout
| required | Boolean | false | false | require input field
| rounded | Boolean | false | false | rounded corners on field
| validate | Object | - | false | optional custom input validation

### Slots

Identical to `TextField` (see below)


## Select

### Markup

```html
<SelectField name="country" label="Country" horizontal iconLeft="fa fa-globe">
  <option value="Argentina">Argentina</option>
  <option value="Bolivia">Bolivia</option>
  <option value="Brazil">Brazil</option>
  <option value="Chile">Chile</option>
  ...
</SelectField>
```
### Props

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| name | String | - | true | form input name
| state | String | - | false | color setting
| size | String | - | false | control size
| iconLeft | String | - | false | optional font-awesome icon
| multiple | Boolean | false | false | multiple or single select
| horizontal | Boolean | false | false | horizontal form layout
| required | Boolean | false | false | require input field
| disabled | Boolean | false | false | disable field

### Slots

| Slot | Prop dependencies | Description |
|------|-------------------|-------------|
| default | - | select input options |

## Text

### Markup

```html
<TextField name="search" horizontal iconLeft="fa fa-search">
  <ButtonControl state="primary" type="button" name="Search" />
</TextField>

<TextField name="title" label="Disabled" value="Input text" disabled />

<TextField name="firstName" label="First name" value="Pipo" required />
```
### Props

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| name | String | - | true | form input name
| label | String | - | false | form input label
| state | String | - | false | color setting of control
| size | String | - | false | control size
| value | Mixed | - | false | input value
| help | String | - | false | optional help text
| iconLeft | String | - | false | optional font-awesome icon
| iconRight | String | - | false | optional font-awesome icon
| placeholder | String | - | false | optional text
| horizontal | Boolean | false | false | horizontal form layout
| required | Boolean | false | false | require input field
| rounded | Boolean | false | false | rounded corners on field
| disabled | Boolean | false | false | disable input
| readonly | Boolean | false | false | input is read-only
| validate | Object | - | false | optional custom input validation

### Slots

| Slot | Prop dependencies | Description |
|------|-------------------|-------------|
| default | - | grouped form control |


## Textarea

### Markup

```html
<TextareaField name="area" label="Message" placeholder="Textarea..." horizontal required />

<TextareaField name="content" label="Description">Some text already here...</TextareaField>
```
### Props

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| name | String | - | true | form input name
| label | String | - | false | form input label
| state | String | - | false | color setting of control
| size | String | - | false | control size
| placeholder | String | - | false | optional text
| rows | Number | 5 | false | number of textarea rows
| disabled | Boolean | false | false | disable input
| readonly | Boolean | false | false | input is read-only
| validate | Object | - | false | optional custom input validation


### Reference

https://bulma.io/documentation/form/general/#form-field