<template>
  <div class="narratives page">
    <div class="row view">
      <div class="col two">
        <ul class="tag">
          <li>evolution of a site</li>
          <li>no crying in dataviz // dash design</li>
          <li>how not to dashboard // exec view</li>
          <li>building a user bridge // hoover/360</li>
          <li>annotation vibration // all annotated works</li>
        </ul>
      </div>
      <div class="col six">
        {{ projects }}
      </div>
    </div>
  </div>
</template>

<script>
  import data from '../static/tours.json'

  export default {
    name: "Narratives",
    data() {
      return {
        projects: data
      }
    }
  };
</script>

<style scoped lang="scss">
  a {
    color: #EA5F93;
  }

  .dropdown-label {
    display: block;
    margin: 0 0 .25rem 0;
  }

  .card {
    background: #fff;
    border-radius: 4px;
    border: 1px solid #d1d3cf;
    box-shadow: -1px 2px 8px rgba(100,100,100, 0.2);
    max-width: 100%;
    min-height: 18rem;
    display: flex;
    flex-direction: row;
    position: relative;
    margin: 1rem;
  }
  .card h2 {
    margin: 0;
    padding: 1rem 0 0 0;
    text-transform: uppercase;
    font-weight: 500;
    font-size: 1.25rem;
    text-align: right;
  }
  .card .title {
    padding: 0;
    text-align: right;
    color: #111;
    font-size: 1.25rem;
  }
  .card .desc {
    padding: 1rem 0 0 0;
    font-size: 1.25rem;
  }
  .card .actions {
    // display: grid;
    // grid-template-columns: repeat(3, 1fr);
    // align-items: center;
    padding: 0.5rem 0 0 0;
  }
  .img-avatar {
    width: 80px;
    height: 80px;
    position: absolute;
    border-radius: 50%;
    border: 2px solid #FBAF4F;
    background-color: #FFF;
    // background-image: linear-gradient(#6c4f70, #834c8a);
    top: 15px;
    left: 24%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    background-origin: content-box;
  }

  .card-text {
    display: grid;
    grid-template-columns: 1fr 2fr;
    width: 100%;
  }

  .title-total {
    padding: 2.5em 1.5em 1.5em 1.5em;
  }

  .img-portada {
    width: 100%;
  }

  .portada {
    width: 100%;
    height: 100%;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    background-color: #FFD700;
    // background-image: url("../assets/bg06.png");
    background-position: bottom center;
    background-size: cover;
  }

  li.meta {
    list-style-type: none;
    margin: 0 0 0 -2rem;
    color: #111;
  }
  .label {
    margin: 0 0 .25rem 0;
    font-size: 1.25rem;
  }

  .pure-button {
    padding: .5rem 1rem;
    border: 1px solid #6c4f70;
    font-size: 1.25rem;
    color: #6c4f70;
    text-decoration: none;
    background-color: #FFF;
    font-weight: 300;
  }

  .pure-button:focus, .pure-button:hover {
    background-image: none;
    background-color: #FFD700;
    color: #FFF;
  }

</style>
