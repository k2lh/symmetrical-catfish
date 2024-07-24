<template>
  <div class="page archive">
    <div class="categories-pane">
      <div class="category listing">
        <div v-for="(item, index) in groups" :key="index" class="container">
          <div class="upper">
            <div v-if="item.has_img" class="image-box">
              <img :src="item.link.img" class="clipped">
            </div>
            <div v-if="!item.has_img && item.ftype === 'pdf'">
              <linkPDF/>
            </div>
            <div v-if="!item.has_img && item.ftype === 'git'">
              <linkGIT/>
            </div>
            <div v-if="!item.has_img && item.ftype === 'txt'">
              <linkTXT/>
            </div>
          </div>
          <div class="lower">
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
              <div v-if="item.link.url" class="amswer link">
                <a :href="item.link.url" target="_new">
                  view file &#8594;
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import array from '../json/archive.json'
  import linkPDF from '../components/linkPDF.vue';
  import linkGIT from '../components/linkGIT.vue';
  import linkTXT from '../components/linkTXT.vue';
  import linkURL from '../components/linkURL.vue';

  export default {
    name: 'Archive',
    components: {
      linkPDF,
      linkGIT,
      linkTXT,
      linkURL
    },
    data() {
      return {
        groups: [],
        ind: 0,
        selected: {},
        isVisible: false,
        prefix: '..'
      }
    },
    created() {
      this.getData(array);
    },
    methods: {
      getData: function(array) {
        var img;
        var set;
        set = array.sort((a, b) => (a.year < b.year) ? 1 : -1);
        this.groups = set;
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
  .categories-pane {
    display: grid;
    margin: 0 auto;
  }
  .category {
    margin-bottom: 0;
    height: auto;
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 2rem;
  }
  .container {
    padding: 1rem;
  }
  .upper {
    height: 5rem;
    align-content: end;
    padding: 0 0 .5rem 0;
  }
  .image-box {
    width: 6.5rem;
    height: 4.5rem;
    overflow: hidden;
  }
  .lower {
    height: 6rem;
  }
  .text-box {

  }
  .title {
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin: 0 0 .5rem 0;
    border-bottom: 1px solid #c6c5c5;
    padding: 0 0 .25rem 0;
  }
  .link {
    margin: .5rem 0 0 0;
    padding: .25rem 0 0 0;
    border-top: 1px dashed #c6c5c5;
  }

  .label {
    font-size: .85rem;
  }
  img.clipped {
    width: 6.39rem;
  }
  @media only screen and (max-width: 2040px) {
    .categories-pane {
      max-width: 80%;
    }
  }
</style>
