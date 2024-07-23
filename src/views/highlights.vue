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
      <div class="pure-u-1-1 pure-u-md-5-8 outlines">
        <div :class="{ hidden: !isVisible }">
          <div class="simple-modal__content" @click="clear()">
            <div class="modal-main">
              <div id="resetAtTop"></div>
              <div v-for="(img, iindex) in images" class="image-box">
                <img :src="img.image">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import categories from '../json/highlights.json'
  import items from '../json/archive.json'

  export default {
    name: "Highlights",
    data() {
      return {
        categories: categories,
        items: items,
        ind: 0,
        selected: {},
        obj: {},
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
          this.obj = this.items.filter((e) => e.dex == num);
          this.ilink = {
            image: this.obj[0].link.img,
            num: this.obj[0].num
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
      width: 62.5%;
      position: absolute;
      overflow: hidden;
      top: 0;
      right: 0;
      display: flex;
      flex: 6;
      flex-direction: column;
      .modal-main {
        display: block;
        overflow-x: auto;
        & .image-box {
          margin: 0 23% 0 6%;
          & img {
            margin: 0 0 2rem 0;
            border: 1px solid #E5E5E8;
            width:100%;
            height:auto;
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
