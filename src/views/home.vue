<template>
  <div class="page">
    <div class='row'>
      <div class='col alignright'>
        <siteLogo/>
        <div class="boxlabel first">
          kl hamilton
        </div>
        <div class="boxlabel">
          <span v-scroll-to="'#experience'" class="">
            experience
          </span>
        </div>
        <div class="boxlabel">
          <span v-scroll-to="'#projects'" class="">
            projects
          </span>
        </div>
        <div class="boxlabel">
          <span v-scroll-to="'#testimonials'" class="">
            testimonials
          </span>
        </div>
      </div>
      <div class='col center'>
        Some Text in Column Two
      </div>
      <div class='col'>
        Some Text in Column One
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import siteLogo from '../components/siteLogo.vue';

  export default {
    name: "Home",
    components: {
      siteLogo
    },
    data() {
      return {}
    }
    // mounted() {
    //   this.$store.commit('setIsHome', true);
    // }
  };

</script>

<style scoped lang="scss">


</style>
