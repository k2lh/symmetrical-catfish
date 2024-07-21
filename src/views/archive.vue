<template>
  <div class="page archive">
    <div class="pure-g">
      <div class="pure-u-1-1">
        <div v-for="(item, index) in groups" :key="index" class="container">
          <div v-if="item.ftype=='img'" class="image-box">
            <img :src="item.link.file" class="clipped">
          </div>
          <div class="text-box">
            <div class="title">
              {{ item.title }}
            </div>
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
  </div>
</template>

<script>
  import data from '../static/archive.json'

  export default {
    name: 'Archive',
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
          console.log('getImages --> isVisible=', this.isVisible);
          this.$nextTick(() => {
            console.log('$nextTick');
            this.ind = val - 1;
            this.selected = this.groups[this.ind];
            this.isVisible = true;
            console.log('if route --> isVisible=', this.isVisible);
          })
        } else {
          this.ind = val - 1;
          this.selected = this.groups[this.ind];
          this.isVisible = true;
          console.log('then route --> isVisible=', this.isVisible);
        }
      },
      clear: function() {
        this.selected = {};
        this.isVisible = false;
        console.log('clear --> isVisible=', this.isVisible);
      }
    }
  };
</script>

<style scoped lang="scss">
  .archive {
    max-width: 1800px;
    margin: 5rem auto 0 auto;
    overflow: hidden;
  }
  .container {
    width: 20%;
    float: left;
    padding: 2rem;
  }
  .image-box {
    width: 100px;
    height: 100px;
    overflow: hidden;
    float: left;
  }
  .text-box {
    width: 150px;
    height: 100px;
    float: left;
    padding-left: 1rem;
  }
  .title {
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin: 0 0 .5rem 0;
    border-bottom: 1px solid #c6c5c5;
    padding: 0 0 .25rem 0;
  }
  .label {
    font-size: .85rem;
  }
  img.clipped {
    border: 1px solid #E5E5E8;
    width: 100px;
  }

</style>
