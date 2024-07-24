<template>
  <div id="NotFound" class="page error">
    <div class="pure-u-1-1">
      <div class="intro-text">
        <div class="boxlabel adjusted">
          I bet you got here by refreshing the page.
        </div>
        <p class="limited">
          Known issue. Still hammering on it. In the meantime, try one of these:
        </p>
        <p class="list">
          &rsaquo; <router-link :to="'/'">entry page</router-link>
        </p>
        <p class="list">
          &rsaquo; <router-link :to="'/highlights'">highlights</router-link>
        </p>
        <p class="list">
          &rsaquo; <router-link :to="'/archive'">archive</router-link>
        </p>
        <p class="list">
          &rsaquo; <router-link :to="'/history'">history</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style scoped lang="scss">
  .error {
    max-width: 1800px;
    margin: 4rem auto 0 auto;
  }
  .intro-text {
    font-size: 1rem;
    padding: 2.5rem 0 1rem 1rem;
    & p {
      line-height: 1.3;
    }
    & p.limited {
      max-width: 50em;
      margin: .5rem 0 3rem 0;
    }
    & p.list {
      font-weight: 500;
      font-size: .9rem;
      text-transform: uppercase;
      letter-spacing: 2px;
    }
  }
  .boxlabel.adjusted {
    font-size: 1.25rem;
    font-weight: 500;
  }
  a, a:visited {
    text-decoration: none;
    color: #111;
  }

  a:active, a.active-link {
    color: #007474;
  }

  a.active-link.exception {
    color: #111;
  }

  a:hover, a:focus-visible {
    border-bottom: thin solid;
    color: #007474;
  }
</style>
