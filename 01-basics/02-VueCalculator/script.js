import { createApp } from './vendor/vue.esm-browser.js';

// Создайте Vue приложение
const app = createApp({
  data() {
    return {
      firstNumber: 0,
      secondNumber: 0,
      output: 0,
      sign: 'sum',
    }
  },
  computed: {
    operator() {
      return this.sign.value;
    },
  },
  methods: {
    getCalculate() {
      if (this.sign === 'sum') {
        this.output = parseInt(this.firstNumber) + parseInt(this.secondNumber);
      } else if (this.sign === 'subtract') {
        this.output = this.firstNumber - this.secondNumber;
      } else if (this.sign === 'multiply') {
        this.output = this.firstNumber * this.secondNumber;
      } else {
        this.output = this.firstNumber / this.secondNumber;
      }
    }
  }
});

const vm = app.mount("#app");
