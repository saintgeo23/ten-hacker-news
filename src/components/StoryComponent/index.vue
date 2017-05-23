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
          {{ prettyUrl }}
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
        title: '',
        url: '',
        prettyUrl: '',
        timestamp: '',
        score: '',
        authorID: '',
        authorKarma: '',
        text: '',
      };
    },

    methods: {
      getStory() {
        this.$store.dispatch('getStory', this.id)
          .then((data) => {
            const payload = {
              name: data.by,
              id: `${data.id}`,
            };

            return this.$store.dispatch('getAuthor', payload);
          })
          .then(() => {
            this.setData();
          })
          .catch(() => {
            this.$emit('error');
          });
      },

      setData() {
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
          this.prettyUrl = obj.story.url;

          if (window.URL) {
            this.prettyUrl = new window.URL(obj.story.url).hostname;
          }
        }

        if (this.$store.getters.getReady) {
          this.$emit('ready');
        }
      },
    },

    beforeMount() {
      if (this.$store.getters.getReady) {
        this.setData();
      } else {
        this.getStory();
      }
    },
  };
</script>

<style lang="less" rel="stylesheet/less">
  @import (reference) '../../assets/styles/settings/index.less';

  .story {
    background-color: @white;
    box-shadow: 0 1px 5px rgba(0,0,0,.2),
                0 2px 2px rgba(0,0,0,.14),
                0 3px 1px -2px rgba(0,0,0,.12);
    
    &__title {
      color: @white;
      background-color: @blue;
      font-size: 18px;
      line-height: 24px;
      padding: 16px 24px;
      white-space: wrap;
    }

    &__container {
      padding: 16px 24px;
      font-size: 16px;
      line-height: 22px;
    }

    &__item + &__item {
      margin-top: 16px;
    }

    &__label {
      display: block;
      font-weight: 900;
    }

    &__link,
    &__link:visited {
      display: block;
      color: @blue;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }

    &__text {
      display: block;
    }

    &__label + &__link,
    &__label + &__text {
      margin-top: 4px;
    }
  }
</style>
