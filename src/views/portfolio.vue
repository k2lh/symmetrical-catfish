<template>
  <div class="page portfolio">
    <div class="row">
      <div class="col four">
        <div class="row">
          <div v-for="(item, index) in groups" :key="index" class="col container limit">
            <div v-if="item.ftype=='img'" class="left">
              <img :src="item.link.file" class="clipped">
            </div>
            <div class="right">
              <div class="answer">
                {{item.industry}}
              </div>
              <div class="label">
                {{item.vers}}.{{item.num}}, {{ item.stage }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col four">
        <!-- <div v-if="item.ftype == 'img'">
          <img :src="item.link.file" class="display">
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
  import data from '../static/files.json'

  export default {
    name: 'portfolio',
    data() {
      return {
        groups: data,
        ind: 0,
        selected: {},
        isVisible: false
      }
    },
    methods: {
      getImages: function(val) {
        if (this.isVisible = true) {
          this.clear();
        }
        this.$nextTick(() => {
          this.ind = val - 1;
          this.selected = this.groups[this.ind];
          this.isVisible = true;
          console.log('cat=', this.groups[this.ind].cat, ' --> isVisible=', this.isVisible);
        })
      },
      clear: function() {
        this.selected = {};
        this.isVisible = false;
      }
    }
  };
</script>

<style scoped lang="scss">
  .boxlabel {
    letter-spacing: 1px;
  }
  .col.container {
    padding: 0;
  }
  .limit {
    width: 200px;
    height: 100px;
  }
  img.clipped {
    border: 1px solid #E5E5E8;
  }

</style>
