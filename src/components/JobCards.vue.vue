<template>
<v-hover>
  <template v-slot="{ hover }">
  <v-card
    class="mx-auto mb-5"
    max-width="350"
    :elevation="hover ? 24 : 6"
    shaped
    :to="`/job/${job._id}`"
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