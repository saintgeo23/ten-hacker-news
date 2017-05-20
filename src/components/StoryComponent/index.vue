<template>
  <div class="story">
    <div class="story__title">
      {{ title }}
    </div>

    <div class="story__container">
      <div class="story__item" v-if="url">
        <span class="story__label">
          URL
        </span>

        <a class="story__link" :href="url">
          {{ url }}
        </a>
      </div>

      <div class="story__item" v-else>
        <span class="story__label">
          Text
        </span>

        <span class="story__text" v-html="text"></span>
      </div>

      <div class="story__item">
        <span class="story__label">
          Timestamp
        </span>

        <span class="story__text">
          {{ timestamp }}
        </span>
      </div>

      <div class="story__item">
        <span class="story__label">
          Score
        </span>

        <span class="story__text">
          {{ score }}
        </span>
      </div>

      <div class="story__item">
        <span class="story__label">
          Author ID
        </span>

        <span class="story__text">
          {{ authorID }}
        </span>
      </div>

      <div class="story__item">
        <span class="story__label">
          Author karma
        </span>

        <span class="story__text">
          {{ authorKarma }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
  import moment from 'moment';

  export default {
    name: 'StoryComponent',

    props: {
      id: String,
    },

    data() {
      return {
        title: 'Example title',
        url: 'Exampleurl',
        timestamp: 'Example timestamp',
        score: 'Example score',
        authorID: 'Example id',
        authorKarma: 'Example carma',
        text: 'Example text',
      };
    },

    beforeMount() {
      this.$store.dispatch('getStory', this.id)
      .then((data) => {
        const payload = {
          name: data.by,
          id: `${data.id}`,
        };

        return this.$store.dispatch('getAuthor', payload);
      })
      .then((data) => {
        const obj = this.$store.getters.getCompleteStories[this.id];

        this.title = obj.story.title;
        this.timestamp = moment.unix(obj.story.time).fromNow();
        this.score = obj.story.score;
        this.authorID = obj.story.by;
        this.authorKarma = obj.author.karma;

        if (!obj.story.url && obj.story.text) {
          this.url = null;
          this.text = obj.story.text;
        } else {
          this.url = obj.story.url;
        }

        if (this.$store.getters.getReady) {
          this.$emit('ready');
        }
      })
      .catch(() => {
        this.$emit('error');
      });
    },
  };
</script>

<style>
  .story {
    box-shadow: 0 1px 5px rgba(0,0,0,.2),
                0 2px 2px rgba(0,0,0,.14),
                0 3px 1px -2px rgba(0,0,0,.12);
  }
</style>