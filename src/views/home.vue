<template>
  <div class="page home">
    <div class="pure-g">
      <div class="pure-u-1-1 pure-u-md-3-8">
        <div v-for="(group, index) in groups" :key="index" class="boxed">
          <div class="dtside">
            <div @click="getImages(index+1)" class="onclick">
              {{ group.cat }}
            </div>
            <div>
              <span v-for="(item, gindex) in group.industry" :key="gindex" class="answer">{{ item }}<span v-if="gindex < (group.industry.length - 1)">, </span> </span>
            </div>
          </div>
          <div class="ddside">
            <span @click="getImages(index+1)" class="onclick">&#8594;</span>
          </div>
        </div>
      </div>
      <div class="pure-u-1-1 pure-u-md-5-8">
        <div :class="{ hidden: !isVisible }">
          <div class="simple-modal__content" @click="clear()">
            <div class="modal-main">
              <div v-for="(img, iindex) in selected.files">
                <img :src="img.file" :class="{ 'dashtop': img.top, 'dashbot': img.bot, 'dashside': img.side }">
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
          console.log('getImages --> isVisible=', this.isVisible);
          this.$nextTick(() => {
            console.log('$nextTick');
            this.retrieve(val);
            console.log('if route --> isVisible=', this.isVisible);
          })
        } else {
          this.retrieve(val);
          console.log('then route --> isVisible=', this.isVisible);
        }
      },
      clear: function() {
        console.log('-- clear --');
        this.selected = {};
        this.isVisible = false;
      },
      retrieve: function(val) {
        console.log('-- retrieve --');
        this.ind = val - 1;
        this.selected = this.groups[this.ind];
        this.isVisible = true;
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
  .boxed {
    height: 5rem;
    width: 50%;
    float: left;
  }
  .dtside {
    width: 85%;
    text-align: right;
    padding: 2% 1% 2% 2%;
    float: left;
  }
  .ddside {
    margin-left: 2%;
    padding: 2% 2% 2% 0;
    display: inline-block;
    float: left;
  }
  .answer {
    font-weight: 300;
  }
  .simple-modal {
    &__content {
      height: 100vh;
      width: 62.5%;
      position: absolute;
      top: 0;
      right: 0;
      display: flex;
      flex: 6;
      flex-direction: column;
      .modal-main {
        width: 100%;
        display: block;
        overflow: auto;
        padding-top: 3.5rem;
        & img {
          margin: 0 0 .5rem 0;
          border: 1px solid #E5E5E8;
          max-width:99%;
          height:auto;
          &.dashtop {
            border-top: 1px dashed #6f6f75;
          }
          &.dashbot {
            border-bottom: 1px dashed #6f6f75;
          }
          &.dashside {
            border-right: 1px dashed #6f6f75;
          }
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
