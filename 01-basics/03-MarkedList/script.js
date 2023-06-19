import { createApp } from './vendor/vue.esm-browser.js';

// From https://jsonplaceholder.typicode.com/comments
const emails = [
  'Eliseo@gardner.biz',
  'Jayne_Kuhic@sydney.com',
  'Nikita@garfield.biz',
  'Lew@alysha.tv',
  'Hayden@althea.biz',
  'Presley.Mueller@myrl.com',
  'Dallas@ole.me',
  'Mallory_Kunze@marie.org',
  'Meghan_Littel@rene.us',
  'Carmen_Keeling@caroline.name',
  'Veronica_Goodwin@timmothy.net',
  'Oswald.Vandervort@leanne.org',
  'Kariane@jadyn.tv',
  'Nathan@solon.io',
  'Maynard.Hodkiewicz@roberta.com',
  'Christine@ayana.info',
  'Preston_Hudson@blaise.tv',
  'Vincenza_Klocko@albertha.name',
  'Madelynn.Gorczany@darion.biz',
  'Mariana_Orn@preston.org',
  'Noemie@marques.me',
  'Khalil@emile.co.uk',
  'Sophia@arianna.co.uk',
  'Jeffery@juwan.us',
  'Isaias_Kuhic@jarrett.net',
];

const app = createApp({
  data() {
    return {
      emails: [...emails],
      target: '',
    };
  },
  computed: {
    filter() {
      const list = document.querySelector('.list');
      list.innerHTML = '';

      let newArr = this.emails.map((email) => {
        let item = email.toLowerCase();
        let searchQuery = this.target.toLowerCase();

        if (item.indexOf(searchQuery) >= 0 && searchQuery != '') {
          createNode('.list', email, true);
        } else {
          createNode('.list', email);
        }

        function createNode(parentNode, innerText, marked = false) {
          parentNode = document.querySelector(parentNode);

          let tag = document.createElement('li');

          if (marked == true) {
            tag.classList.add('marked');
          }

          tag.innerHTML = innerText;
          parentNode.appendChild(tag);
        }
      });

      return newArr;
    },
  },
});

app.mount('#app');
