<template>
  <div class="portfolio">
    <div class="lining">
      {{ works[0] }}
      {{ places[0] }}
    </div>
  </div>
</template>

<script>
  import dataThings from '../static/files.json'
  import dataComps from '../static/projects.json'

  export default {
    name: "portfolio",
    data() {
      return {
        works: dataThings,
        places: dataComps
      }
    }
  };
</script>

<style scoped lang="scss">

</style>
