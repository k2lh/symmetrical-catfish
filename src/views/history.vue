<template>
  <div class="page history">
    <div class="pure-g rows-external">
      <div class="pure-u-1-1">
        <div class="section-title">
          <div class="boxlabel adjusted">
            skills
          </div>
        </div>
      </div>
      <div class="pure-u-1-2 pure-u-md-1-6">
        <div class="cols boxed">
            <div class="boxlabel">
              principles
            </div>
          <ul class="roles">
            <li>Curiosity</li>
            <li>Respect</li>
            <li>Leadership</li>
            <li>Insight</li>
            <li>Design thinking</li>
            <li>Writing / Speaking</li>
            <li>Ingenuity</li>
            <li>Narratives</li>
            <li>Agile / Kanban</li>
            <li>Critical thinking</li>
            <li>Empathy</li>
          </ul>
        </div>
      </div>
      <div class="pure-u-1-2 pure-u-md-1-6">
        <div class="cols boxed">
            <div class="boxlabel">
              research
            </div>
          <ul class="roles">
            <li>User Interviews</li>
            <li>Cross-cultural communication</li>
            <li>Ethnographic studies</li>
            <li>Contextual studies</li>
            <li>Process analysis</li>
            <li>Task Analysis</li>
            <li>Comparative analysis</li>
            <li>Workshop facilitation</li>
          </ul>
        </div>
      </div>
      <div class="pure-u-1-2 pure-u-md-1-6">
        <div class="cols boxed">
            <div class="boxlabel">
              design
            </div>
          <ul class="roles">
            <li>Design principles</li>
            <li>Accessibility</li>
            <li>Findability</li>
            <li>Usability</li>
            <li>Interaction design</li>
            <li>Responsive design</li>
            <li>Adaptability</li>
            <li>Low/Mid/High fidelity</li>
            <li>Wireframes</li>
            <li>Mockups</li>
            <li>Design critiques</li>
            <li>Information architecture</li>
            <li>Workflows</li>
          </ul>
        </div>
      </div>
      <div class="pure-u-1-2 pure-u-md-1-6">
        <div class="cols boxed">
            <div class="boxlabel">
              development
            </div>
          <ul class="roles">
            <li>Coding standards</li>
            <li>Maintainable code</li>
            <li>Reusable components</li>
            <li>Rapid prototyping</li>
            <li>Code reviews</li>
            <li>RESTful API design</li>
            <li>Application architecture</li>
            <li>Database architecture</li>
            <li>Enterprise architecture</li>
            <li>CI/CD/CD</li>
            <li>version control</li>
          </ul>
        </div>
      </div>
      <div class="pure-u-1-2 pure-u-md-1-6">
        <div class="cols boxed">
            <div class="boxlabel">
              tools
            </div>
          <ul class="roles">
            <li>Vue</li>
            <li>Vue2</li>
            <li>D3</li>
            <li>AngularJS</li>
            <li>javascript</li>
            <li>typescript</li>
            <li>SCSS / CSS3</li>
            <li>Sketch</li>
            <li>Figma</li>
            <li>Invision</li>
            <li>Node</li>
            <li>Express</li>
            <li>NPM / Yarn</li>
            <li>Webpack</li>
            <li>Grunt / Gulp</li>
          </ul>
        </div>
      </div>
      <div class="pure-u-1-2 pure-u-md-1-6">
        <div class="cols boxed">
            <div class="boxlabel">
              &nbsp;
            </div>
          <ul class="roles">
            <li>Jest</li>
            <li>Vuex</li>
            <li>Mocha</li>
            <li>Jasmine</li>
            <li>MongoDB</li>
            <li>SQL</li>
            <li>Mural</li>
            <li>AEM</li>
            <li>Docker</li>
            <li>Jenkins</li>
            <li>Storybook</li>
            <li>Swagger</li>
            <li>Jira</li>
            <li>Zenhub</li>
            <li>Git</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="pure-g rows-external">
      <div class="pure-u-1-1">
        <div class="section-title">
          <div class="boxlabel adjusted">
            experience
          </div>
        </div>
      </div>
    </div>
    <div v-for="(job, index) in positions" :key="index" class="">
      <div class="pure-g rows-internal">
        <div class="pure-u-1-1 pure-u-md-1-4 rows">
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
    <div class="pure-g">
      <div class="pure-u-1-1 rows-external">
        <div class="section-title">
          <div class="boxlabel adjusted">
            education
          </div>
        </div>
        <div class="metadata end">
          <div class="title">
            Bachelor of Science in Interdisciplinary Studies
          </div>
          <div class="meta first">
            George Mason University • Fairfax, VA
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
  .rows-external {
    border-top: 1px solid #AAA;
  }
  .rows-internal {
    border-top: 1px dotted #AAA;
  }
  .cols.boxed {
    margin: 0 1rem 1rem 1rem;
    padding: 0 1rem 1rem 1rem;
  }
  .title {
    font-weight: 700;
    padding-bottom: .5rem;
  }
  .section-title {
    margin: 1rem 0 2rem 2rem;
    padding-top: 1rem;
  }
  .boxlabel {
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  .boxlabel.adjusted {
    letter-spacing: 3px;
    font-size: 1rem;
    font-weight: 700;
  }
  .metadata {
    text-align: right;
    padding: 1rem;
    margin: 0 1rem;
    &.end {
      text-align: left;
      margin-top: -1rem;
    }
  }
  .description {
    padding: 1rem;
    &.roles {
      margin: 0 1rem;
    }
  }
  ul {
    margin: 0 0 .25rem 0;
    font-size: .85rem;
    padding: 0;
    &.roles {
      margin: .5rem 0 0 .75rem;
    }
  }
  li {
    list-style: square;
    margin: 0 0 .25rem 0;
  }
</style>
