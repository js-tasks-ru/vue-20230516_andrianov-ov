import { defineComponent } from '../vendor/vue.esm-browser.js';
import UiContainer from './UiContainer.js';
import UiAlert from './UiAlert.js';
import { fetchMeetupById } from '../meetupService.js';
//import MeetupView from '../../06-MeetupView/components/MeetupView.js';
import { defineAsyncComponent } from 'vue';

export default defineComponent({
  name: 'PageMeetup',

  data() {
    return {
      meetup: {},
      state: ''
    }
  },

  components: {
    UiAlert,
    UiContainer,
    MeetupView: defineAsyncComponent(() => {
      import('../../06-MeetupView/components/MeetupView.js')
    })
  },

  props: {
    meetupId: {
      type: Number,
      required: true
    }
  },

  methods: {
    fetchMeetupById() {
      fetchMeetupById(this.meetupId).then(
        (data) => {
          console.log(data);
          this.state = 'done';
          return this.meetup = data;
        },
        (error) => {
          return this.state = 'error';
        }
      );
    }
  },

  template: `
    <div class="page-meetup">
      <MeetupView v-if="this.state === 'done'" :meetup="fetchMeetupById" />

      <UiContainer v-else-if="this.state === 'error'">
        <UiAlert>error</UiAlert>
      </UiContainer>

      <UiContainer v-else>
        <UiAlert>Загрузка...</UiAlert>
      </UiContainer>


    </div>`,
});
