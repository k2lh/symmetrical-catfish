json<template>
  <div class="page archive">
    <div class="categories-pane">
      <div class="category listing">
        <div v-for="(item, index) in groups" :key="index" class="container">
          <div class="upper">
            <div v-if="item.has_img" class="image-box">
              <img :src="item.link.img" class="clipped">
            </div>
            <div v-else>
              <div v-if="item.ftype === 'pdf'" class="image-box">
                <svg width="100%" height="100%" viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
                  <rect x="0" y="0" width="103" height="100" style="fill:none;"/>
                    <g transform="matrix(1,0,0,1,0.515,0)">
                      <g id="file--transfer_1_" transform="matrix(3.21875,0,0,3.125,-35.515,-11.75)">
                        <path d="M31,13.36L1,13.36C0.801,13.36 0.64,13.199 0.64,13L0.64,-3L1.36,-3L1.36,12.64L30.64,12.64L30.64,-6.8L31.361,-7.48L31.361,13C31.36,13.199 31.199,13.36 31,13.36Z" style="fill-rule:nonzero;"/>
                      </g>
                      <g id="file--transfer_1_1" serif:id="file--transfer_1_" transform="matrix(3.21875,0,0,3.125,-35.5118,-114.875)">
                          <path d="M22,15.64C22.096,15.64 21.64,16.36 21.64,16.36L1.36,16.36L1.36,31L0.64,31L0.64,16C0.64,15.801 0.801,15.64 1,15.64L22,15.64Z" style="fill-rule:nonzero;"/>
                      </g>
                      <g id="arrow" transform="matrix(2.276,2.20971,-2.276,2.20971,11.9217,-128.83)">
                          <path d="M26.36,14.522L25.64,14.522L25.64,3.869L22.255,7.254L21.745,6.745L26,2.491L30.255,6.746L29.745,7.255L26.36,3.869L26.36,14.522Z" style="fill-rule:nonzero;"/>
                      </g>
                      <g transform="matrix(1.03,0,0,1,-31.9084,-10)">
                          <text x="5px" y="32.222px" style="font-family:'RosarioRoman-Bold', 'Rosario';font-size:38px;">P<tspan x="27.99px 55.692px " y="32.222px 32.222px ">DF</tspan></text>
                      </g>
                      <g id="_Transparent_Rectangle" transform="matrix(3.21875,0,0,3.125,-35.515,-68)">
                          <rect x="0" y="0" width="32" height="32" style="fill:none;"/>
                      </g>
                  </g>
                </svg>

              </div>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import array from '../json/archive.json'

  export default {
    name: 'Archive',
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
