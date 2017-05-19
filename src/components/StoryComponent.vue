<template>
  <v-card>
    <v-card-row class="blue">
      <v-card-title>
        <span class="white--text">{{ title }}</span>
      </v-card-title>
    </v-card-row>
    <v-card-text>
      <v-card-row height="75px">
        <v-icon class="mr-5">card_membership</v-icon>
        <div>
          <div>Membership Number</div><strong>113241423</strong>
        </div>
      </v-card-row>
    </v-card-text>
    <v-card-row actions>
      <v-btn flat class="green--text darken-1">View Email</v-btn>
    </v-card-row>
  </v-card>


  <div class="">
    <div>Title: {{ title }}</div>
    <div>URL: {{ url }}</div>
    <div>Timestamp: {{ timestamp }}</div>
    <div>Score: {{ score }}</div>
    <div>Author ID: {{ authorID }}</div>
    <div>Author carma: {{ authorCarma }}</div>
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
