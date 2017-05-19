import axios from 'axios';

const state = {
  stories: [],
};

const mutations = {
  saveStories(state, stories) {    
    state.stories = [...stories];
  },
};

const actions = {
  getStories({ commit }) {
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
};

const getters = {
  getStories(state) {
    return state.stories;
  },
};

const store = {
  state,
  mutations,
  actions,
  getters,
};

export default store;
