<template>
  <div class="mainpage">
    <div class="pure-g">
      <div class="pure-u-1-1">

      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: "Home",
    components: {
      // skills,
      // reviews,
      // projects,
      // history,
      // studies
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
  .pure-form [type="checkbox"], [type="radio"] {
    margin: 0 .25rem 0 0;
  }

  .mainpage {
    height: 100vh;
  }

</style>
