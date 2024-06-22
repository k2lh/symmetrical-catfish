<template>
  <div class="page home">
    <div class="row">
      <div class="col">

      </div>
      <div class="col six">

      </div>
      <div class="col">

      </div>
    </div>
  </div>
</template>

<script>
  import dataThings from '../static/files.json'
  import dataCusts from '../static/clients.json'

  export default {
    name: "Home",
    data() {
      return {
        works: dataThings,
        places: dataCusts
      }
    }
  };
</script>

<style scoped lang="scss">


</style>
