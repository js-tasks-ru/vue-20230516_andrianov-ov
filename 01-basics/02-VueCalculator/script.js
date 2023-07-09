import { createApp } from './vendor/vue.esm-browser.js';

const app = createApp({
  data() {
    return {
      firstNumber: 0,
      secondNumber: 0,
      sign: 'sum',
    };
  },
  computed: {
    output() {
      if (this.sign === 'sum') {
        return this.firstNumber + this.secondNumber;
      } else if (this.sign === 'subtract') {
        return this.firstNumber - this.secondNumber;
      } else if (this.sign === 'multiple') {
        return this.firstNumber * this.secondNumber;
      } else {
        return this.firstNumber / this.secondNumber;
      }
    },
  },
});

const vm = app.mount('#app');
