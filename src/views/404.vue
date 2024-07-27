<template>
  <div id="NotFound" class="page notfound">
    <div class="pure-u-1-1">
      <div class="intro-text">
        <div class="boxlabel adjusted">
          Sorry, can't find that.
        </div>
        <p class="limited">
          Maybe you wanted one of these?
        </p>
        <p class="list">
          &rsaquo; <router-link :to="'/'">welcome</router-link>
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
  export default {
    name: "NotFound"
  };
</script>

<style scoped lang="scss">
.notfound {
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
// a, a:visited {
//   text-decoration: none;
//   color: #111;
// }
// a:active, a.active-link {
//   color: #007474;
// }
// a.active-link.exception {
//   color: #111;
// }
// a:hover, a:focus-visible {
//   border-bottom: thin solid;
//   color: #007474;
// }
</style>
