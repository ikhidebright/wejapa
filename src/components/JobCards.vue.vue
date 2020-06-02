<template>
<v-hover>
  <template v-slot="{ hover }">
  <v-card
    class="mx-auto mb-5"
    max-width="350"
    :elevation="hover ? 24 : 6"
    shaped
    to="/"
    flat
    light
  >
    <v-card-title class="mb-n7">
      <p class="title">{{ job.title }}</p>
      <v-spacer></v-spacer>
    </v-card-title>
    <v-card-subtitle class="ml-2">
      {{ job.type }} -
      N {{ job.salary }}
    </v-card-subtitle>
  </v-card>
      </template>


<!-- git commit -m "first commit"
git remote add origin https://github.com/ikhidebright/wejapa.git
git push -u origin master -->


    </v-hover>
</template>

<script>
export default {
  props: ["job"]
}
</script>

<style scoped>
.title {
    font-family: 'Fredoka One' !important;
}
</style>