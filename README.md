# label-edit
Click to show input text box Vue Component ... inspired by Trello. This is my first time publishing Vue Component via npm package and let me know if you encounter any issues, bugs, or improvement. Thanks!

## Installation
```
npm install --save label-edit
```
### Module
```js
import LabelEdit from 'label-edit'
```
## Usage
```html
<label-edit v-bind:text="text" placeholder="Enter text value" v-on:text-updated="textUpdateCallback"></label-edit>
```

### Definition

| Props | Description |
| --------- |:----- |
| :text | default value for label edit |
| v-on:text-updated-blur | callback function to capture the value changes of the input text when text lost its focus |
| v-on:text-updated-enter | callback function to capture the value changes of the input text when user pressed enter |
| placeholder | (optional) placeholder for empty label edit value |

## Example

```html
<template>
	<div class="hello">
		<h3>Text Box 1 with default text and place holder</h3>
		<label-edit :text="text" id="labeledit1" v-on:text-updated="textUpdated" placeholder="Enter some text"></label-edit>
	</div>
</template>
```

```js
<script>
import LabelEdit from 'label-edit'
export default {
  name: 'HelloWorld',
  data () {
    return {
      text: 'Click this text!',
    }
  },
  components: {
    LabelEdit,
  },
  methods: {
    textUpdated: function(text){
      this.text = text;
    },
  }
}
</script>
```

## Demo
![Gif Demo][demo]

### References

[demo]: https://media.giphy.com/media/PMUxyTGtLN8csmXxFm/giphy.gif