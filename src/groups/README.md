# Form groups

If you want to group controls together, use these **form groups.** For **radio buttons** and **checkboxes**, but also for regular inputs and grouped **buttons**.


## Checkbox group

### Markup

```html
<CheckboxGroup label="Terms & conditions" horizontal>
  <CheckboxControl value="agreed" name="agree" required>
    I agree to the <a href="/">terms and conditions</a>
  </CheckboxControl>
</CheckboxGroup>
```
### Props

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| name | String | - | false | form input name
| label | String | - | false | form input label
| size | String | - | false | control size
| horizontal | Boolean | false | false | horizontal form layout
| required | Boolean | false | false | required field

### Slots

| Slot | Prop dependencies | Description |
|------|-------------------|-------------|
| default | - | the group of checkboxes |

## Input group

### Markup

```html
<InputGroup>
  <ButtonControl state="link" name="Submit" />
  <ButtonControl name="Cancel" />
</InputGroup>
```
### Props

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| name | String | - | false | form input name
| label | String | - | false | form input label
| size | String | - | false | control size
| horizontal | Boolean | false | false | horizontal form layout
| required | Boolean | false | false | required field

### Slots

| Slot | Prop dependencies | Description |
|------|-------------------|-------------|
| default | - | the group of inputs and/or buttons |


## Radio group

### Markup

```html
<RadioGroup label="Already a member?" required>
  <RadioControl name="member" value="1" required>Yes</RadioControl>
  <RadioControl name="member" value="0" required>No</RadioControl>
</RadioGroup>
```
### Props

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| name | String | - | false | form input name
| label | String | - | false | form input label
| size | String | - | false | control size
| horizontal | Boolean | false | false | horizontal form layout
| required | Boolean | false | false | required field

### Slots

| Slot | Prop dependencies | Description |
|------|-------------------|-------------|
| default | - | the group of radio buttons |

### Reference

https://bulma.io/documentation/form/general/#form-group