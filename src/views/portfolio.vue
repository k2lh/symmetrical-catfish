<template>
  <div class="page portfolio">
    <div v-for="(item, index) in files" :key="index" class="row fits">
      <div class="col two">
        <ul class="tag alignright">
          <li>
            {{ item.cat }}
          </li>
          <li>
            {{ item.stage }}
          </li>
        </ul>
      </div>
      <div class="col six">
        <img :src="item.link.file" class="display">
      </div>
      <div class="col two">
        <ul class="tag alignright">
          <li>
            {{ item.title }}
          </li>
          <li>
            v{{item.vers}}.{{item.num}}, {{ item.stage }}
          </li>
          <li>
            {{ item.proj }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import data from '../static/files.json'

  export default {
    name: "portfolio",
    data() {
      return {
        items: [],
        files: data
      }
    }
  };
</script>

<style scoped lang="scss">

  img {
    max-height: 80vh;
    width: auto;
    object-fit: contain;
    aspect-ratio: 1/2;
  }
</style>
