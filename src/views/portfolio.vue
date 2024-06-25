<template>
  <div class="page portfolio">
    <div class="row short">
      <div class="col six">
        view only:
      </div>
    </div>
    <div v-for="(item, index) in files" :key="index" class="row">
      <div class="col one alignright">
        <div class="boxlabel">
          {{ item.title }}
        </div>
        <div class="space-half">
          {{ item.note }}
        </div>
        <div class="space-one">
          <span class="label">industry:</span> <span class="answer">{{item.industry}}</span>
        </div>
        <div>
          <span class="label">category:</span> <span class="answer">{{ item.cat }}</span>
        </div>
        <div>
          <span class="label">version:</span> <span class="answer">{{item.vers}}.{{item.num}}, {{ item.stage }}</span>
        </div>
        <div class="space-one">
          {{ item.goal }}
        </div>
        <div class="label space-half">
          role(s):
        </div>
        <div v-if="item.lead" class="boxlabel light">
          Team Lead
        </div>
        <div v-if="item.advisor" class="boxlabel light">
          Advisor
        </div>
        <div v-for="(role, index) in item.role" :key="index" class="answer">
            {{ role }}
        </div>
      </div>
      <div class="col five">
        <div v-if="item.ftype == 'img'">
          <img :src="item.link.file" class="display">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import files from '../static/files.json'

  export default {
    name: 'portfolio',
    data() {
      return {
        files: files
      }
    }
  };
</script>

<style scoped lang="scss">
  img {
    max-height: 80vh;
    width: auto;
    object-fit: contain;
    aspect-ratio: 1/2;
  }
  .boxlabel {
    letter-spacing: 1px;
    &.light {
      font-weight: 500;
      letter-spacing: 0;
    }
  }
  .space-half {
    padding-top: .5em;
  }
  .space-one {
    padding-top: 1rem;
  }
  .space-two {
    padding-top: 2rem;
  }
</style>
