# Form controls

The **form control** is a versatile container meant to enhance **single form controls.** Form controls are the basic units to build Bulma forms. Controls can be used directly, but when combining several controls in a **form**, or when using **labels** or **help** texts, you should use [**form fields**](../fields)

## Button

### Markup

```html
<ButtonControl state="primary" name="OK" size="medium" />
```
### Props

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| type | String | submit | false | button type
| name | String | Submit | false | button label
| state | String | - | false | color setting of button
| size | String | - | false | button size
| href | String | - | false | link button


## Checkbox

### Markup

```html
<CheckboxControl name="agree" required>
  I agree to the <a href="#">terms and conditions</a>
</CheckboxControl>
```
### Props

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| name | String | - | false | form input name
| value | Mixed | true | false | checkbox value
| required | Boolean | false | false | required field

### Slots

| Slot | Prop dependencies | Description |
|------|-------------------|-------------|
| default | - | checkbox label |

## File

You won't usually use this control stand-alone, but in a `<FileField>`

### Markup

```html
<FileControl state="primary" name="upload" file="my_logo.png" />
```
### Props

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| name | String | - | true | form input name
| state | String | - | false | color setting of control
| size | String | - | false | control size
| file | String | - | false | preset file name

## Input

Generic control for **text type inputs.**
You won't usually use this control stand-alone, but use one of the [**input fields**](../fields).

### Markup

```html
<InputControl type="text" name="something" value="My input text" />
```
### Props

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| name | String | - | true | form input name
| type | String | text | false | form input type
| state | String | - | false | color setting of control
| size | String | - | false | control size
| value | Mixed | - | false | input value
| placeholder | String | - | false | optional text
| required | Boolean | false | false | require input field
| disabled | Boolean | false | false | disable input
| readonly | Boolean | false | false | input is read-only

## Multiple Select

### Markup

```html
<MultiSelectControl name="country">
  <option value="Argentina">Argentina</option>
  <option value="Bolivia">Bolivia</option>
  <option value="Brazil">Brazil</option>
  <option value="Chile">Chile</option>
  ...
</MultiSelectControl>
```

### Props

Identical to `SelectControl` (see below)

## Radio button

### Markup

```html
<RadioControl name="member" value="1" required>Yes</RadioControl>
```
### Props

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| name | String | - | true | form input name
| value | Mixed | - | true | radio button value
| required | Boolean | false | false | required field

### Slots

| Slot | Prop dependencies | Description |
|------|-------------------|-------------|
| default | - | radio button label |

## Select

### Markup

```html
<SelectControl name="country">
  <option value="Argentina">Argentina</option>
  <option value="Bolivia">Bolivia</option>
  <option value="Brazil">Brazil</option>
  <option value="Chile">Chile</option>
  ...
</SelectControl>
```
### Props

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| name | String | - | true | form input name
| state | String | - | false | color setting
| size | String | - | false | control size
| iconLeft | String | - | false | optional font-awesome icon
| required | Boolean | false | false | require field
| disabled | Boolean | false | false | disable field

### Slots

| Slot | Prop dependencies | Description |
|------|-------------------|-------------|
| default | - | select input options |

## Textarea

### Markup

```html
<TextareaControl name="content" rows="8">Write here...</TextareaControl>
```
### Props

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| name | String | - | true | form input name
| placeholder | String | - | false | optional text
| rows | Number | 5 | false | number of textarea rows

### Reference

https://bulma.io/documentation/form/general/