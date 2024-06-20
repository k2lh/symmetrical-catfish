<template>
  <div class="global-footer">
    <div class="pure-u-1-3">
      <p class="padtop1 description centered">
        <a href="https://github.com/k2lh/" target="_blank" aria-label="(opens in new window)">github repository (k2lh)</a>
      </p>
      <p class="description centered">
        <a href="https://uk.linkedin.com/in/kl-hamilton/" target="_blank" aria-label="(opens in new window)">LinkedIn profile (klhamilton)</a>
      </p>
    </div>
    <div class="pure-u-1-3">
      <div class="inset padtop1">
        <ul class="highlight">
          <li v-scroll-to="'#experience'" class="description linkify">
            Read about current and past experience.
          </li>
          <li v-scroll-to="'#projects'" class="description linkify">
            Peruse a collection of past projects.
          </li>
          <li v-scroll-to="'#testimonials'" class="description linkify">
            Read client and team recommendations.
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style scoped>
  .global-footer {
    padding: 2rem 0;
  }
  .inset {
    margin: 0 2rem;
  }
  .linkify {
    cursor: pointer;
  }
</style>
