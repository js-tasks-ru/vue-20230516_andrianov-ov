import { defineComponent } from '../vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'MeetupInfo',

  props: {
    organizer: {
      required: true,
      type: String,
    },
    place: {
      required: true,
      type: String,
    },
    date: {
      required: true,
      type: Number,
    },
  },

  methods: {
    transformDate(timestamp) {
      return new Date(timestamp).toLocaleDateString(navigator.language, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    },
    formatDateAsISOString(timestamp) {
      return new Date(timestamp).toISOString().substring(0, 10);
    },
  },

  template: `
    <ul class="meetup-info">
      <li>
        <img class="icon meetup-info__icon" alt="icon" src="/assets/icons/icon-user.svg" />
        {{ organizer }}
      </li>
      <li>
        <img class="icon meetup-info__icon" alt="icon" src="/assets/icons/icon-map.svg" />
        {{ place }}
      </li>
      <li>
        <img class="icon meetup-info__icon" alt="icon" src="/assets/icons/icon-cal-lg.svg" />
        <time :datetime="formatDateAsISOString(date)">
          {{ transformDate(date) }}
        </time>
      </li>
    </ul>`,
});
