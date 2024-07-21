<template>
  <div class="page home">
    <div class="intro">
      <div class="pure-g">
        <div class="pure-u-1 pure-u-md-1-3">
          <div class="intro-list">
            <h2>Designer.</h2>
            <h2>Developer.</h2>
            <h2>Architect.</h2>
          </div>
        </div>
        <div class="pure-u-1 pure-u-md-2-3">
          <div class="intro-text">
            <div class="boxlabel adjusted">
              the formal (but true) version
            </div>
            <p class="limited">
              I'm a versatile and inventive Senior UX/UI Architect and Designer-Developer fluent in design thinking and systems thinking, with a strong background in enterprise development and user experience (UX) design. I have proven experience as a data visualization designer, educator, and leader, and as a design system contributor, adviser, advocate, and architect.
            </p>
          </div>
        <!-- </div>
        <div class="pure-u-1 pure-u-md-1-2"> -->
          <div class="intro-text">
            <div class="boxlabel adjusted">
              the casual (and also true) version
            </div>
            <ul>
              <li>As a process analyst, I learned information architecture to ensure my solutions were clear and coherent.</li>
              <li>As an IA, I learned user research to gather and analyze my audience's feedback.</li>
              <li>As a UX researcher, I learned design to grasp the role of research in creating usable and intuitive visuals.</li>
              <li>As a UX designer, I learned code to better understand the art/tech divide and how to bridge it.</li>
              <li>As a FED, I learned API and database design to improve my interfaces' performance and efficiency.</li>
              <li>As a fullstack dev, I learned application architecture to synthesize these displines into complex yet elegant systems.</li>
              <li>...and thus I came full circle.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="pure-g">
      <div class="pure-u-1-1 pure-u-md-1-3">
        <div class="boxed">
          <p>KL is multifaceted when it comes to her skills and knowledge and at the root of it all is her ability to take complex problems, analyse them using her immense knowledge, put everything into a framework, and present it as simply as possible. Be it her work with the design system, or her work on data visualisations, KL is an inspiration. Her expertise would add immense value to any organisation she works with.</p>
          <div class="cite">
            Meghna Mukerjee, Senior Lead, UX Design
          </div>
        </div>
        <div class="boxed">
          <p>I've always been impressed by KL's ability to understand design, UX and development, which is a truly rare combination.  She works hard and genuinely loves to explore new technologies.  KL has always been easy to work with and lends help to anyone with her on the same project.</p>
          <div class="cite">
            Douglas Grim, Software Engineer
          </div>
        </div>
        <div class="boxed">
          <p>KL is able to synthesize large amounts of information and clearly communciate through both her work and to her team. Her experience in developing complicated web solutions and architecting the interface and information is very evident and speaks through her work.</p>
          <div class="cite">
            Mindy League, Director of User Experience and Design
          </div>
        </div>
      </div>
      <div class="pure-u-1-1 pure-u-md-1-3">
        <div class="boxed strong">
          <p>KL does a fantastic job of toeing the line between data and design.</p>
          <p>In my role as the executive sponsor for the data science profession at Kyndryl, she and I collaborated on visualization standards. KL brought a depth of knowledge to this topic that made the end product more compelling than I reasonably could have hoped. She was able to blend respect for brand colors with empathy for accessibility needs in a way that enabled the definition of multiple palettes that were brand adjacent and visible to any potential member of the audience.</p>
          <p>During the development, we had multiple enlightening conversations around how the intent of designers and data analysts/scientists are very different when they create visualizations. Whereas a 'data person' wants to optimize the speed at which the audience can make an informed decision, a designer wants the audience to spend some time interacting with the visualization.</p>
          <p>This unique ability to move between these worlds makes KL an ideal member of a design team, a data team, or — better yet — a blended team.</p>
          <div class="cite">
            Dan Riley, Data Scientist & IT Risk Analyst
          </div>
        </div>
        <div class="boxed">
          <p>KL has a rare combination of UX and development expertise. I also found her knowledgeable about Javascript and the Javascript ecosystem, and I relied on her for pointers on frameworks to use and approaches to take in developing our POCs and prototypes.</p>
          <div class="cite">
            Nate Reed, Senior Software Engineer
          </div>
        </div>
      </div>
      <div class="pure-u-1-1 pure-u-md-1-3">
        <div class="boxed">
          <p>KL's skills really span the gamut from user interface/experience theory to abstraction-based Javascript programming, to middleware and database interfaces via published APIs. She's obviously a veteran of many projects large and small, and has been very connected to all of our teams, whether QA, UED, or other UX devs, and communicates effectively in a very down-to-earth manner.</p>
          <div class="cite">
            George Nickas, Senior Software Engineer
          </div>
        </div>
        <div class="boxed">
          <p>KL possesses broad and deep knowledge, allowing her to seamlessly adapt to any role. I was particularly impressed by her well-thought-out Design System Documentation Framework. Her easygoing and adaptable nature makes her a joy to work with. Without hesitation, I highly recommend KL as a valuable asset to any future organization she chooses to work with.</p>
          <div class="cite">
            Hsu Ka An, Lead UX Designer
          </div>
        </div>
        <div class="boxed">
          <p>KL is one of the most intuitive, intelligent user-focused full stack developers I’ve had the pleasure of collaborating with. KL is an excellent team leader with the high level of both frontend and backend application architecture knowledge that lends itself best to the quick creation of prototype to product.</p>
          <div class="cite">
            Julia Jacobs, Senior Cloud Automation Engineer
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  // import data from '../json/reviews.json'

  export default {
    name: "Home",
    data() {
      return {}
    }
  };
</script>

<style scoped lang="scss">
  .home {
    max-width: 1800px;
    margin: 4rem auto 0 auto;
  }
  .intro {
    // max-width: 1400px;
    margin-bottom: 8rem;
    & .intro-list {
      padding: 2rem;
    }
    & .intro-text {
      margin: 1rem;
      padding: 2.5rem 0 1rem 1rem;
      font-size: .95rem;
      font-weight: 400;
      & p {
        line-height: 1.3;
      }
      & p.limited {
        max-width: 50em;
      }
    }
  }
  .intro-list h2 {
    font-size: 3em;
    margin: .25em 0;
    font-weight: 700;
    letter-spacing: 2px;
  }

  .boxed {
    margin: 1rem;
    padding: 1rem;
    font-size: .9rem;
    font-weight: 300;
    border-top: 1px solid #c6c5c5;
    & p {
      line-height: 1.2;
    }
    & .cite {
      font-style: italic;
      letter-spacing: .5px;
    }
  }
  .onclick {
    cursor: pointer;
  }

  .boxlabel.adjusted {
    font-size: 1rem;
    font-weight: 500;
  }

  ul {
    padding-left: 1rem;
  }
  li {
    list-style-type: square;
    padding-left: .5rem;
    line-height: 1.4;
  }

  /*<500px S - phones */
  @media only screen and (max-width: 499px) {

  }
  /*500-1200 M - tablets */
  @media only screen and (min-width: 500px) and (max-width: 1199px) {

  }
  /*1200-2000 L - laptops */
  @media only screen and (min-width: 1200px) and (max-width: 1800px) {

  }
  /*1801+ XL - monitors */
  @media only screen and (min-width: 1801px) {

  }

  @media only screen and (min-width: 2200px) {

  }
</style>
