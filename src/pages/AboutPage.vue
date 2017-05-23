<template>
  <div class="page">
    <div class="wrapper">
      <div class="wrapper__item">
        <div class="about">
          <div class="about__title">
            About TenHackerNews
          </div>

          <div class="about__container">
            <div class="about__item">
              <span class="about__text">
                This is a test single page application written in modern Javascript framework Vue.js.
              </span>
              <span class="about__text">
                It uses open Hackernews API to get top stories data, single story data and author data.
              </span>
              <span class="about__text">
                The ten stories that are shown in the application are randomly selected from the top 500 stories and sorted by story score in ascending order.
              </span>
              <span class="about__text">
                The application has a placeholder spinner and shows data only when it is completely recieved from API.
              </span>
              <span class="about__text">
                The application won’t attempt to fetch any data from API if it is already stored in Vuex storage
              </span>
            </div>

            <div class="about__item">
              <span class="about__label">Technology stack</span>
              <span class="about__text">
                - Vue.js 2<br>
                - Vue-router<br>
                - Vuex<br>
                - Axios<br>
                - Webpack 2<br>
              </span>
            </div>

            <div class="about__item">
              <span class="about__label">Repository</span>
              <span class="about__text">
                You can download the application from github.com
              </span>
              <a class="about__link" href="https://github.com/saintgeo23/ten-hacker-news">
                https://github.com/saintgeo23/ten-hacker-news
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'AboutPage',

    head: {
      title: {
        inner: 'About',
      },
    },
  };
</script>

<style lang="less" rel="stylesheet/less">
  @import (reference) '../assets/styles/settings/index.less';

  .about {
    background-color: @white;
    box-shadow: 0 1px 5px rgba(0,0,0,.2),
                0 2px 2px rgba(0,0,0,.14),
                0 3px 1px -2px rgba(0,0,0,.12);
    
    &__title {
      color: @white;
      background-color: @green;
      font-size: 18px;
      line-height: 24px;
      padding: 16px 24px;
      white-space: wrap;
    }

    &__container {
      padding: 16px 24px;
      font-size: 16px;
      line-height: 24px;
    }

    &__item + &__item {
      margin-top: 18px;
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
    &__label + &__text,
    &__text + &__link,
    &__text + &__text {
      margin-top: 6px;
    }
  }
</style>
