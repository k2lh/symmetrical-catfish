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
        <span id="topofbox">&nbsp;</span>
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
</template>

<script>
  import data from '../static/cats.json'
  import VueScrollTo from 'vue-scrollto'
  import { ref } from 'vue'

  const targetId = ref('200')
  const scrollToElement = () =>  {
    const el = document.getElementById(targetId.value);
    if (el) {
      el.scrollIntoView();
    }
  }

  export default {
    name: "Home",
    data() {
      return {
        // isSeen: false,
        groups: data,
        ind: 0,
        selected: {}
      }
    },
    methods: {
      getImages: function(val) {
        this.clear();
        this.ind = val - 1;
        console.log('index=', val, this.ind, 'cat=', this.groups[this.ind].cat);
        this.selected = this.groups[this.ind];
      },
      clear: function() {
        this.selected = {};
        window.scrollTo(0, 0);
        var end = window.screenTop;
        console.log(end);
      }
    }
  };
</script>

<style scoped lang="scss">
  .page {
    height: 100%;
    margin-top: 3rem;
    overflow: hidden;
  }
  .col.container {
    padding: 0;
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
          margin: 0 0 .5rem 0;
          border: 1px solid #E5E5E8;
          width: -moz-available;
        }
      }
    }
  }
  .hidden {
    // visibility: hidden !important;
    display: none;
  }
  .onclick {
    cursor: pointer;
  }
</style>
