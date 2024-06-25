<template>
  <div class="page home">
    <div class="row">
      <div class="col four container">
        <div class="row">
          <div v-for="(group, index) in groups" :key="index" class="col container limit">
            <dl>
              <dt>{{ group.files.length }}</dt>
              <dd>{{ group.cat }}</dd>
              <dt>&nbsp;</dt>
              <dd>
                <span class="label">industry: </span>
                <span v-for="(item, gindex) in group.industry" :key="gindex" class="answer">{{ item }}<span v-if="gindex < (group.industry.length - 1)">, </span> </span></dd>
              <dt>&nbsp;</dt>
              <dd><span class="label">years: </span><span class="answer">{{ group.years }}</span></dd>
            </dl>
          </div>
        </div>
      </div>
      <div class="col six">
        something
      </div>
    </div>
  </div>
</template>

<script>
  import data from '../static/cats.json'

  export default {
    name: "Home",
    data() {
      return {
        groups: data
      }
    }
  };
</script>

<style scoped lang="scss">
  dl {
    width: 200%;
  }
  dt {
    float: left;
    width: 25%;
    text-align: center;
  }
  dd {
    margin-left: 25%;
  }

</style>
