<template>
  <div class="pens">
  <JobCards v-for='job in jobs' :key="job._id" :job="job"/>
  </div>
</template>

<script>
import JobCards from '@/components/JobCards.vue.vue'
import { mapState } from 'vuex'

export default {
  name: 'Home',
  components: {
   JobCards
  },
  computed: {
      ...mapState({
          jobs: 'jobs'
      })
  }
}
</script>

<style scoped>
.pens {
  background: rgb(241,241,241);
  background: linear-gradient(35deg, rgba(241,241,241,1) 49%, rgba(210,210,210,1) 49%);
  min-height: 100vh;
  max-height: auto;
}
</style>