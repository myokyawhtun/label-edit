# vue-label-edit
Click to show input text box Vue Component ... inspired by Trello

## Installation
```
npm install --save vue-label-edit
```
### Module
```js
import LabelEdit from 'vue-label-edit'
```
## Usage
```html
<label-edit v-bind:text="text" placeholder="Enter text value" v-on:text-updated="textUpdateCallback"></label-edit>
```

### Definition

| Props | Description |
| --------- |:----- |
| :text | default value for label edit |
| v-on:text-updated | callback function to capture the value of the input text |
| placeholder | (optional) placeholder for empty label edit value |

## Demo
![Gif Demo][demo]

### References

[demo]: https://media.giphy.com/media/PMUxyTGtLN8csmXxFm/giphy.gif