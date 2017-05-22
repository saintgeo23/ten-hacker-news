import axios from 'axios';

const state = {
  storiesIDs: [],
  completeStories: {},
  ready: false,
};

const mutations = {
  saveStories(state, stories) {
    state.storiesIDs = [...stories];

    stories.forEach((id) => {
      state.completeStories[id] = {
        ready: false,
      };
    });
  },

  saveStory(state, story) {
    state.completeStories[story.id].story = story;
  },

  saveAuthor(state, data) {
    state.completeStories[data.id].author = data.author;
    state.completeStories[data.id].ready = true;

    const ready = Object.keys(state.completeStories).every(item => state.completeStories[item].ready);

    if (ready) {
      state.ready = true;
    }
  },
};

const actions = {
  getStoriesIDs({ commit }) {
    const topStoriesUrl = 'https://hacker-news.firebaseio.com/v0/topstories.json';

    return new Promise((resolve, reject) => {
      axios.get(topStoriesUrl)
        .then((result) => {
          const storiesArray = [...result.data];

          for (let i = 0; storiesArray.length > 10; i += 1) {
            const index = Math.floor(Math.random() * (storiesArray.length + 1));
            storiesArray.splice(index, 1);
          }

          commit('saveStories', storiesArray);
          resolve(storiesArray);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },

  getStory({ commit }, id) {
    const storyUrl = `https://hacker-news.firebaseio.com/v0/item/${id}.json`;

    return new Promise((resolve, reject) => {
      axios.get(storyUrl)
        .then((result) => {
          commit('saveStory', result.data);
          resolve(result.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },

  getAuthor({ commit }, payload) {
    const authorUrl = `https://hacker-news.firebaseio.com/v0/user/${payload.name}.json`;

    return new Promise((resolve, reject) => {
      axios.get(authorUrl)
        .then((result) => {
          const data = {
            author: result.data,
            id: payload.id,
          };

          commit('saveAuthor', data);
          resolve(result.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
};

const getters = {
  getStoriesIDs(state) {
    return state.storiesIDs;
  },

  getCompleteStories(state) {
    return state.completeStories;
  },

  getReady(state) {
    return state.ready;
  },
};

const store = {
  state,
  mutations,
  actions,
  getters,
};

export default store;
