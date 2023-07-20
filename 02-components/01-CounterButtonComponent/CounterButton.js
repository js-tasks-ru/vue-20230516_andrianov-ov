import { defineComponent } from './vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'CounterButton',

  props: {
    count: {
      type: Number,
      default: 0,
    },
  },
  emits: ['update:count'],
  methods: {
    incrementCount() {
      let value = this.count;
      value += 1;
      this.$emit('update:count', value);
    },
  },

  template: `
              <button @click="incrementCount" type="button">
                {{ count }}
              </button>
            `,
});
