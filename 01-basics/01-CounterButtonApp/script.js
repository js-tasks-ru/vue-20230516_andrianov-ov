import { createApp } from './vendor/vue.esm-browser.js';

const app = createApp({
  data() {
    return {
      counter: 0,
    }
  },
  methods: {
    counterIncrement() {
      return this.counter += 1;
    }
  }
});

const vm = app.mount('#app');
