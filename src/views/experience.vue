<template>
  <div class="page">
    <div v-for="(job, index) in positions" :key="index" class="row fits">
      <div class="col two alignright">
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
      </div>
      <div class="col five">
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
      </div>
      <div class="col two">
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

</style>
