<template>
  <div class="page highlights">
    <div class="pure-g">
      <div class="pure-u-1-1 pure-u-md-3-8">
        <div v-for="(group, index) in categories" :key="index" class="boxed">
          <div class="dtside">
            <div @click="getImages(index+1)" class="onclick">
              {{ group.cat }}
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
              <div v-for="(img, iindex) in images">
                {{ img.dex }} / {{ img.title }}
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

  export default {
    name: "Highlights",
    data() {
      return {
        categories: categories,
        items: items,
        ind: 0,
        selected: {},
        imgObj: {},
        ilink: '',
        images: [],
        isVisible: false
      }
    },
    methods: {
      getImages: function(val) {
        if (this.isVisible = true) {
          this.clear();
          this.$nextTick(() => {
            console.log('$nextTick');
            this.retrieve(val);
          })
        } else {
          this.retrieve(val);
        }
      },
      clear: function() {
        this.selected = {};
        this.isVisible = false;
      },
      retrieve: function(val) {
        this.ind = val - 1;
        this.imgObj = {};
        this.ilink = {};
        this.images = [];
        this.selected = this.categories[this.ind];
        this.selected.files.forEach((num) => {
          console.log(num);
          this.imgObj = this.items.filter((e) => e.dex == num);
          this.ilink = {
            file: this.imgObj[0].link.file,
            title: this.imgObj[0].title,
            dex: this.imgObj[0].dex,
            top: this.imgObj[0].dash.top,
            side: this.imgObj[0].dash.side,
            bot: this.imgObj[0].dash.bot,
          }
          console.log(this.ilink);
          this.images.push(this.ilink);
          console.log('--------------------------');
        });
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
    height: 3rem;
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
          margin: 0 0 2rem 0;
          border: 1px solid #E5E5E8;
          max-width:99%;
          height:auto;
          &.dashtop {
            border-top: 1px dashed #333;
          }
          &.dashbot {
            border-bottom: 1px dashed #333;
          }
          &.dashside {
            border-right: 1px dashed #333;
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
