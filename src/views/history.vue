<template>
  <div class="page history">
    <div class="pure-g rows">
      <div class="pure-u-1-1">
        <div class="section-title">
          <div class="boxlabel adjusted">
            skills
          </div>
        </div>
      </div>
      <div class="pure-u-1-2 pure-u-md-1-6">
        <div class="description roles">
          <div class="boxlabel">
            principles
          </div>
        </div>
        <ul class="roles">
          <li>curiosity</li>
          <li>reusable patterns</li>
          <li>agile</li>
          <li>kanban</li>
          <li>leadership</li>
          <li>written / verbal / digital communication</li>
          <li>cross-cultural communication</li>
          <li>critical thinking</li>
          <li>empathy</li>
        </ul>
      </div>
      <div class="pure-u-1-2 pure-u-md-1-6">
        <div class="description roles">
          <div class="boxlabel">
            research
          </div>
        </div>
        <ul class="roles">
          <li>process analysis</li>
          <li>task analysis</li>
          <li>comparative analysis</li>
          <li>ethnographic studies</li>
          <li>contextual studies</li>
          <li>agile</li>
          <li>kanban</li>
        </ul>
      </div>
      <div class="pure-u-1-2 pure-u-md-1-6">
        <div class="description roles">
          <div class="boxlabel">
            design
          </div>
        </div>
        <ul class="roles">
          <li>findability</li>
          <li>usability</li>
          <li>interaction</li>
          <li>low/high fidelity</li>
          <li>wireframes</li>
          <li>mockups</li>
          <li>design critiques</li>
          <li>information architecture</li>
          <li>workflows</li>
          <li>design principles</li>
          <li>responsive design</li>
          <li>adaptability</li>
          <li>reliability</li>
        </ul>
      </div>
      <div class="pure-u-1-2 pure-u-md-1-6">
        <div class="description roles">
          <div class="boxlabel">
            development
          </div>
        </div>
        <ul class="roles">
          <li>coding standards</li>
          <li>maintainable code</li>
          <li>reusable components</li>
          <li>code reviews</li>
          <li>rapid prototyping</li>
          <li>RESTful API design</li>
          <li>application architecture</li>
          <li>database architecture</li>
          <li>CI/CD/CD</li>
          <li>version control</li>
        </ul>
      </div>
      <div class="pure-u-1-2 pure-u-md-1-6">
        <div class="description roles">
          <div class="boxlabel">
            tools
          </div>
        </div>
        <ul class="roles">
          <li>Vue</li>
          <li>D3.js</li>
          <li>AngularJS</li>
          <li>javascript</li>
          <li>typescript</li>
          <li>SCSS / CSS3</li>
          <li>NPM / Yarn</li>
          <li>Node</li>
          <li>Express</li>
          <li>Webpack</li>
          <li>MongoDB</li>
          <li>SQL</li>
        </ul>
      </div>
      <div class="pure-u-1-2 pure-u-md-1-6">
        <div class="description roles">
          <div class="boxlabel">
            &nbsp;
          </div>
        </div>
        <ul class="roles">
          <li>Sketch</li>
          <li>Figma</li>
          <li>Mural</li>
          <li>Invision</li>
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
    <div class="pure-g rows">
      <div class="pure-u-1-1">
        <div class="intro-text">
          <div class="boxlabel adjusted">
            experience
          </div>
        </div>
      </div>
    </div>
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
    <div class="pure-g rows">
      <div class="pure-u-1-1">
        <div class="intro-text">
          <div class="boxlabel adjusted">
            education
          </div>
          <p class="title">Bachelor of Science in Interdisciplinary Studies</p>
          <p>George Mason University • Fairfax, VA</p>
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
  .section-title {
    font-size: 1rem;
    font-weight: 500;
    letter-spacing: 3px;
  }
  .sub-title {
    font-size: .85rem;
    font-weight: 400;
    margin: 0 0 0 1.5rem;
    border: 1px solid blue;
    text-transform: uppercase;
  }
  .boxlabel {
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  .boxlabel.adjusted {
    letter-spacing: 3px;
    font-size: 1rem;
    font-weight: 500;
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

</style>
