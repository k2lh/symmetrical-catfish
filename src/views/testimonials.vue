<template>
  <div class="reviews page">
    <div class="row">
      <div v-for="(review, rindex) in reviews" :key="rindex" class="pure-u-1-1 pure-u-lg-1-3">
        <div class="boxed">
          <div class="quote">
            {{ review.quote }}
          </div>
          <p class="cite">
            {{ review.name }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import data from '../static/reviews.json'

  export default {
    name: "Testimonials",
    data() {
      return {
        reviews: data
      }
    }
  };
</script>

<style scoped lang="scss">
  .quote {
    letter-spacing: normal;
    font-size: .95rem;
  }
  .jobline {
    padding: 2rem 0 0 0;
  }
  .boxed {
    margin: 2rem;
    .lining {
      padding: 2rem;
    }
  }
  .cite {
    margin-top: .25rem;
    font-size: .8rem;
    color: #555;
  }
</style>
