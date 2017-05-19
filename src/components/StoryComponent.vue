<template>
  <div class="story">
    <v-card>
      <v-card-row class="blue">
        <v-card-title>
          <span class="white--text">{{ title }}</span>
        </v-card-title>
      </v-card-row>
      <v-card-text>
        <v-card-row height="75px">
          <div>
            <div>URL</div><strong>{{ url }}</strong>
          </div>
        </v-card-row>

        <v-card-row height="75px">
          <div>
            <div>Timestamp</div><strong>{{ timestamp }}</strong>
          </div>
        </v-card-row>

        <v-card-row height="75px">
          <div>
            <div>Score</div><strong>{{ score }}</strong>
          </div>
        </v-card-row>

        <v-card-row height="75px">
          <div>
            <div>Author ID</div><strong>{{ authorID }}</strong>
          </div>
        </v-card-row>

        <v-card-row height="75px">
          <div>
            <div>Author carma</div><strong>{{ authorCarma }}</strong>
          </div>
        </v-card-row>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
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
        authorCarma: 'Example carma',
      };
    },

    beforeMount() {
      this.$store.dispatch('getStory', this.id)
      .then((data) => {
        return this.$store.dispatch('getUser', this.id);
      })
      .then((data) => {

      })
      .catch(error => console.log(error));
    },
  };
</script>

<style></style>
