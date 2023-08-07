import { defineComponent } from '../vendor/vue.esm-browser.js';
import UiContainer from './UiContainer.js';
import UiAlert from './UiAlert.js';
import { fetchMeetupById } from '../meetupService.js';
import MeetupView from '../../06-MeetupView/components/MeetupView.js';

export default defineComponent({
  name: 'PageMeetup',

  data() {
    return {
      meetup: {},
      state: '',
      errorMessage: '',
    };
  },

  components: {
    UiAlert,
    UiContainer,
    MeetupView,
  },

  props: {
    meetupId: {
      type: Number,
      required: true,
    },
  },

  methods: {
    getMeetupData() {
      fetchMeetupById(this.meetupId).then(
        (data) => {
          this.state = 'done';
          this.meetup = data;
        },
        (error) => {
          this.state = 'error';
          this.errorMessage = error.message;
        },
      );
    },
  },

  beforeMount() {
    this.getMeetupData();
  },

  watch: {
    meetupId: function () {
      this.state = 'loading';
      this.getMeetupData();
    },
  },

  template: `
    <div class="page-meetup">
      <MeetupView v-if="state === 'done'" :meetup="meetup" />

      <UiContainer v-else-if="state === 'error'">
        <UiAlert>{{ errorMessage }}</UiAlert>
      </UiContainer>

      <UiContainer v-else>
        <UiAlert>Загрузка...</UiAlert>
      </UiContainer>
    </div>`,
});
