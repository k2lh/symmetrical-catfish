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
            <ul class="points">
              <li v-for="(point, pindex) in job.points" :key="pindex">
                {{ point }}
              </li>
            </ul>
          </div>
        </div>
        <div class="pure-u-1-1 pure-u-md-1-4">
          <div class="description roles">
            <div v-if="job.lead" class="boxlabel">
              Team Leader
            </div>
            <div v-if="job.advisor" class="boxlabel">
              Advisor
            </div>
            <ul class="roles">
              <li v-for="(role, rodex) in job.role" :key="rodex">
                {{ role }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import history from '../json/history.json'

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
    padding: 2rem 0 0 0;
    font-size: .9rem;
  }
  .title {
    font-weight: 700;
    padding-bottom: .5rem;
  }
  .metadata {
    text-align: right;
    padding: 1rem;
    margin: 0 1rem;
  }
  .description {
    padding: 1rem;
    &.roles {
      margin: 0 1rem;
    }
  }
  ul.points {
    margin: 0;
    padding: 0;
  }
  li {
    list-style: square;
  }
  .rows {
    border-top: 1px solid #AAA;
  }
  ul.roles {
    margin: .5rem 0 0 .75rem;
    padding: 0;
    & li {
      font-weight: 500;
      letter-spacing: 1px;
    }
  }
  .boxlabel {
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
</style>
