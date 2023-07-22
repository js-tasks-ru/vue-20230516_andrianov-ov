import { defineComponent } from '../vendor/vue.esm-browser.js';
import MeetupAgendaItem from './MeetupAgendaItem.js';

export default defineComponent({
  name: 'MeetupAgenda',

  components: {
    MeetupAgendaItem,
  },

  props: {
    agenda: {
      type: Object,
      required: true,
    },
  },

  template: `
    <ul class="agenda">
      <li v-for="item, index in agenda" class="agenda__item">
        <MeetupAgendaItem :agenda-item="agenda[index]" />
      </li>
    </ul>`,
});
