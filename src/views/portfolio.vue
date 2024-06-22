<template>
  <div class="page portfolio">
    <div class="lining">
      {{ works[0] }}
      {{ places[0] }}
    </div>
  </div>
</template>

<script>
  import dataThings from '../static/files.json'
  import dataCusts from '../static/clients.json'

  export default {
    name: "portfolio",
    data() {
      return {
        items: [],
        works: dataThings,
        places: dataCusts
      }
    }
  };
</script>

<style scoped lang="scss">

</style>
