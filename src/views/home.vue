<template>
  <div class="page">
    <div class="row">
      <div class="col center">
        <div id="portfolio">
          <portfolio />
        </div>
        <!-- <div id="projects">
          <projects />
        </div> -->
        <div id="experience">
          <experience />
        </div>
        <div id="testimonials">
          <testimonials />
        </div>
      </div>

      <div class="col">
        evolution of a site		catalog
        no crying in dataviz		dash design
        how not to dashboard 	exec view
        building a user bridge	hoover/360
        annotation vibration	all annotated works
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  import portfolio from "../components/portfolio.vue";
  // import projects from "../components/projects.vue";
  import experience from "../components/experience.vue";
  import testimonials from "../components/testimonials.vue";

  export default {
    name: "Home",
    components: {
      portfolio,
      // projects,
      experience,
      testimonials
    },
    data() {
      return {}
    }
  };
</script>

<style scoped lang="scss">


</style>
