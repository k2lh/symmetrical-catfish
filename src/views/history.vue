<template>
  <div class="page history">
    <div v-for="(job, index) in positions" :key="index" class="">
      <div class="pure-g rows">
        <div class="pure-u-1-1 pure-u-md-1-4">
          <div class="metadata">
            <div class="title">
              {{ job.title }}
            </div>
            <div class="meta first">
              <span v-if="job.team">{{ job.team}}, </span>{{ job.company }}
            </div>
            <div class="meta second">
              {{ job.startMonth }} / {{ job.startYear }} &ndash; {{ job.endMonth }} / {{ job.endYear }} <span v-if="job.location"> | {{ job.location }}</span>
            </div>
          </div>
        </div>
        <div class="pure-u-1-1 pure-u-md-1-2">
          <div class="description">
            <ul>
              <li v-for="(point, pindex) in job.points" :key="pindex">
                {{ point }}
              </li>
            </ul>
          </div>
        </div>
        <div class="pure-u-1-1 pure-u-md-1-4">
          <div class="description">
            <span v-for="(project, prindex) in job.projects" :key="prindex">
              {{ project }},
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import history from '../static/history.json'

  export default {
    name: "History",
    data() {
      return {
        positions: history
      }
    }
  };
</script>

<style scoped lang="scss">
  .history {
    max-width: 1800px;
    margin: 5rem auto 0 auto;
    font-size: .9rem;
  }
  .metadata {
    text-align: right;
    padding: 1rem;
  }
  .description {
    padding: 1rem;
  }
  ul {
    margin: 0;
    padding: 0;
  }
  li {
    list-style: square;
  }
  .rows {
    border-top: 1px solid #AAA;
  }
</style>
