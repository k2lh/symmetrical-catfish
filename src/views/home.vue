<template>
  <div class="page">
    <div class="row">
      <div class="col">

      </div>
      <div class="col center">

      </div>

      <div class="col">
        evolution of a site
        no crying in dataviz		dash design
        how not to dashboard 	exec view
        building a user bridge	hoover/360
        annotation vibration	all annotated works
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
