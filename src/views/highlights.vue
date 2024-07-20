<template>
  <div class="page highlights">
    <div class="pure-g">
      <div class="pure-u-1-1 pure-u-md-3-8">
        <ul>
          <li v-for="(group, index) in categories" :key="index" class="boxed onclick" @click="getImages(index+1)">
            {{ group.cat }}
          </li>
        </ul>
      </div>
      <div class="pure-u-1-1 pure-u-md-5-8">
        <div :class="{ hidden: !isVisible }">
          <div class="simple-modal__content" @click="clear()">
            <div class="modal-main">
              <div id="resetAtTop"></div>
              <div v-for="(img, iindex) in images">
                <div class="boxlabel adjusted">
                  {{ img.title }} &nbsp;~&nbsp; <span class="answer">v{{ img.vers }}.{{ img.num }}, {{ img.stage }}</span>
                </div>
                <div class="undertext">
                  {{ img.industry }} &nbsp;~&nbsp; <span class="">{{ img.note }}</span>
                </div>
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
  import categories from '../static/highlights.json'
  import items from '../static/archive.json'
  import { ref } from 'vue'

  export default {
    name: "Highlights",
    data() {
      return {
        categories: categories,
        items: items,
        ind: 0,
        selected: {},
        imgObj: {},
        ilink: {},
        images: [],
        isVisible: false
      }
    },
    methods: {
      getImages: function(val) {
        this.clear();
        this.$nextTick(() => {
          this.retrieve(val);
        });
      },
      clear: function() {
        document.getElementById('resetAtTop').scrollIntoView();
        this.$nextTick(() => {
          this.images = [];
          this.selected = {};
        });
      },
      retrieve: function(val) {
        this.ind = val - 1;
        this.selected = this.categories[this.ind];
        this.selected.files.forEach((num) => {
          this.imgObj = this.items.filter((e) => e.dex == num);
          this.ilink = {
            file: this.imgObj[0].link.file,
            title: this.imgObj[0].title,
            vers: this.imgObj[0].vers,
            num: this.imgObj[0].num,
            stage: this.imgObj[0].stage,
            industry: this.imgObj[0].industry,
            note: this.imgObj[0].note
          }
          this.images.push(this.ilink);
        });
        this.imgObj = {};
        this.ilink = {};
        this.isVisible = true;
      }
    }
  };
</script>

<style scoped lang="scss">
  .highlights {
    max-width: 1800px;
    margin: 5rem auto 0 auto;
    overflow: hidden;
  }
  .boxed {
    padding: .5rem 1rem .5rem .25rem;
  }

  ul {
    padding: 0;
    margin: 0 0 0 2rem;
  }
  ul li {
    list-style: none;
    float: left;
    width: 8rem;
    font-size: .9rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  #resetAtTop {
    height: 6rem;
    display: block;
    // border: 1px solid purple;
  }

  .simple-modal {
    &__content {
      height: 100vh;
      max-width: 62.5%;
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
        & img {
          margin: 0 0 2rem 0;
          border: 1px solid #E5E5E8;
          max-width:99%;
          height:auto;
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

  }
  /*500-1200 M - tablets */
  @media only screen and (min-width: 500px) and (max-width: 1199px) {

  }
  /*1200-2000 L - laptops */
  @media only screen and (min-width: 1200px) and (max-width: 1800px) {

  }
  /*1801+ XL - monitors */
  @media only screen and (min-width: 1801px) {

  }

</style>
