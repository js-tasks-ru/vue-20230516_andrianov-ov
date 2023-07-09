import { createApp } from './vendor/vue.esm-browser.js';

const API_URL = 'https://course-vue.javascript.ru/api';

const app = createApp({
  data() {
    return {
      meetupTitle: '',
      meetupNumber: '',
    };
  },
  watch: {
    meetupNumber: {
      immediate: true,
      async handler() {
        let answer = await this.fetchMeetupById(this.meetupNumber);
        return (this.meetupTitle = answer);
      },
    },
  },
  methods: {
    fetchMeetupById(meetupId) {
      return fetch(`${API_URL}/meetups/${meetupId}`)
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            return response.json().then((error) => {
              throw error;
            });
          }
        })
        .then((evt) => {
          return evt.title;
        });
    },
  },
});

app.mount('#app');
