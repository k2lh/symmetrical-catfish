<template>
  <div class="history">
    <div v-for="(job, index) in positions" :key="index" class="">
      <div class="lining">
        <div class="title martop1">
          {{ job.title }}
        </div>
        <div class="meta jobline">
          <span v-if="job.team">{{ job.team}}, </span>{{ job.company }}
        </div>
        <div class="meta jobline">
           {{ job.startMonth }} {{ job.startYear }} &ndash; {{ job.endMonth }} {{ job.endYear }} | {{ job.location }}
        </div>
      </div>
      <div class="lining">
        <div class="description">
          {{ job.description }}
        </div>
        <ul class="highlight martop0">
          <li v-for="(point, pindex) in job.points" :key="pindex">
            {{ point }}
          </li>
        </ul>
      </div>
      <div class="lining">
        <div class="meta jobline uppercase">
          tools & technologies
        </div>
        <div class="highlight martop0">
          <span v-for="(techs, tindex) in job.tech" :key="tindex">
            {{(techs !='' && tindex !=0) ? ' - ' : ''}}{{ techs }}
          </span>
        </div>
      </div>
      <div class="lining">
        <div class="meta jobline uppercase">
          skills
        </div>
        <div class="highlight martop0">
          <span v-for="(skill, sindex) in job.skills" :key="sindex">
            {{(skill !='' && sindex !=0) ? ' - ' : ''}}{{ skill }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import history from '../static/experience.json'

  export default {
    name: "experience",
    data() {
      return {
        positions: history
      }
    }
  };
</script>

<style scoped lang="scss">
  .uppercase {
    text-transform: uppercase;
  }

  .lining {
    padding-bottom: 1rem;
  }
  h2.section.short {
    margin-bottom: 0;
    padding-bottom: 0;
  }
</style>
