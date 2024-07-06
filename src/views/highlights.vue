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
                <div class="dtside2">
                  <div class="">
                    {{ img.title }}
                  </div>
                  <div class="">
                    {{ img.note }}
                  </div>
                </div>
                <div class="ddside2">
                  <div class="">
                    {{ img.industry }}
                  </div>
                  <div class="">
                    {{ img.vers }}.{{ img.num }}, {{ img.stage }}
                  </div>
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
        console.log('currently showing = ', this.isVisible);
        if (this.isVisible == true) {
          console.log('is true');
          this.clear();
          this.$nextTick(() => {
            console.log('next tick');
            this.retrieve(val);
          })
        } else {
          console.log('is false');
          this.retrieve(val);
        }
        this.isVisible = true;
      },
      clear: function() {
        this.isVisible = false;
        console.log('CLR 1 -- isVisible=', this.isVisible);
        this.selected = {};
        this.imgObj = {};
        this.ilink = {};
        this.images = [];
      },
      retrieve: function(val) {
        console.log('retrieve');
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
            note: this.imgObj[0].note,
            top: this.imgObj[0].dash.top,
            side: this.imgObj[0].dash.side,
            bot: this.imgObj[0].dash.bot,
          }
          this.images.push(this.ilink);
        });
        console.log('have images');
      }
    }
  };
</script>

<style scoped lang="scss">
  .page {
    overflow: hidden;
    margin-top: 6rem;
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
  .dtside2 {
    width: 60%;
    text-align: left;
    padding: 0;
    float: left;
  }
  .ddside2 {
    margin-left: 2%;
    padding: 0;
    display: inline-block;
    text-align: right;
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
          margin: 0 0 5rem 0;
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
