<template>
  <div id="nav" class="globalnav">
    <div class="row">
      <div class="col">
        <siteLogo/>
      </div>
      <div class="col first adjust">
        <span class="boxlabel">K L Hamilton</span>
      </div>
      <div class="col adjust">
        <span v-scroll-to="'#portfolio'" class="boxlabel">
          portfolio
        </span>
      </div>
      <div class="col adjust">
        <span v-scroll-to="'#projects'" class="boxlabel">
          projects
        </span>
      </div>
      <div class="col adjust">
        <span v-scroll-to="'#experience'" class="boxlabel">
          experience
        </span>
      </div>
      <div class="col adjust">
        <span v-scroll-to="'#testimonials'" class="boxlabel">
          testimonials
        </span>
      </div>
    </div>
  </div>
</template>

<script>
  import siteLogo from '../components/siteLogo.vue';

  export default {
    name: "siteHeader",
    components: {
      siteLogo
    }
  };
</script>

<style scoped lang="scss">
  .globalnav {
    width: 100%;
    position: fixed;
    top: .5rem;
    z-index: 999;
  }

  .row {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
  }

  .col {
    display: flex;
    flex-direction: column;
    flex: 1;
    text-align: right;
    padding: 0;
    &.first {
      text-align: left;
      flex: 6;
    }
    &.adjust {
      margin: auto 1rem;
    }
  }

  .sitelogo {
    padding: 0;
    text-align: center;
  }

</style>
