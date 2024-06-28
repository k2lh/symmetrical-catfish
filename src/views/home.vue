<template>
  <div class="page home">
    <div class="row">
      <div class="col three container">
        <div class="row">
          <div v-for="(group, index) in groups" :key="index" class="col container limit">
            <dl>
              <dt><span @click="getImages(index+1)" class="onclick">{{ group.cat }}</span></dt>
              <dd><span @click="getImages(index+1)" class="onclick">&#8594;</span></dd>
              <dt>
                <span v-for="(item, gindex) in group.industry" :key="gindex" class="answer">{{ item }}<span v-if="gindex < (group.industry.length - 1)">, </span> </span>
              </dt>
              <dd>&nbsp;</dd>
            </dl>
          </div>
        </div>
      </div>
      <div class="col six">
        <div :class="{ hidden: !isVisible }">
          <div class="simple-modal__content" @click="clear()">
            <div class="modal-main">
              <div v-for="(img, iindex) in selected.files">
                <img :src="img">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import data from '../static/cats.json'
  import VueScrollTo from 'vue-scrollto'

  export default {
    name: "Home",
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
  .page {
    height: 100%;
    margin-top: 3rem;
    overflow: hidden;
    max-width: 2000px;
  }
  .col.container {
    padding: 0;
    height: 100%;
  }
  .limit {
    max-width: 200px;
    min-height: 120px;
    border: 1px solid red;
  }
  dl {
    width: 200%;
  }
  dt {
    float: left;
    width: 75%;
    text-align: right;
  }
  dd {
    margin-left: 75%;
  }
  .answer {
    font-weight: 300;
  }
  .simple-modal {
    &__content {
      height: 100vh;
      width: 67.25%;
      position: absolute;
      top: 0;
      right: 0;
      display: flex;
      flex: 6;
      flex-direction: column;
      background: #F9F9F9;
      .modal-main {
        width: 100%;
        display: block;
        overflow: auto;
        padding-top: 3.5rem;
        & img {
          margin: 0 2rem .5rem 0;
          border: 1px solid #E5E5E8;
          width: -moz-available;
          max-width: 1000px;
        }
      }
    }
  }
  .hidden {
    visibility: hidden !important;
    display: none;
  }
  .onclick {
    cursor: pointer;
  }

  /*<500px S - phones */
  @media only screen and (max-width: 499px) {
    .row {
      height: auto;
      flex-direction: column;
    }
  }
  /*500-1200 M - tablets */
  @media only screen and (min-width: 500px) and (max-width: 1199px) {

  }
  /*1200-2000 L - laptops */
  @media only screen and (min-width: 1200px) and (max-width: 1800px) {

  }
  /*1801+ XL - monitors */
  @media only screen and (min-width: 1801px) {
    // .col.six {
    //   flex: 9;
    // }
  }

  @media only screen and (min-width: 2200px) {

  }
</style>
