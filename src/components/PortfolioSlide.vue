<script setup>
import { reactive } from 'vue';
import Expando from 'src/scripts/ExpandoObject';
import ExpandoCard from './ExpandoCard.vue';
const projects = reactive([
  new Expando(
    'Portfolio',
    'Vue 3 (Quasar-CLI), HTML/CSS/JS, SCSS, [Design]',
    'The page you are on now!',
    `    <dl>
      <dt style="text-transform: uppercase">Overview</dt>
      <dd>
        <dl>
          <dt><strong>Goals</strong></dt>
          <dd>
            My major goals in this project were to create something intuitive,
            well-designed, and mobile-friendly. I wanted to showcase my
            attention to detail and present a website that is not only
            eye-catching but also visually simple.
          </dd>
        </dl>
      </dd>
      <dd>
        <dl>
          <dt><strong>Audience</strong></dt>
          <dd>
            My audience is most likely you: someone checking out who I am in a
            professional capacity.
          </dd>
        </dl>
      </dd>
    </dl>
    <hr />
    <dl>
      <dt style="text-transform: uppercase">Notable Features</dt>
      <dd>
        <dl>
          <dt>
            <strong>Mobile friendly</strong>
          </dt>
          <dd>The website should work well across all devices.</dd>
        </dl>
        <dl>
          <dl>
            <dt>
              <strong>Drawer Open/Close animation</strong>
            </dt>
            <dd>
              I dug into CSS to create an interesting animation that I am really
              proud of, despite it being easy to miss.
            </dd>
          </dl>
        </dl>
      </dd>
    </dl>
    <hr />
    <dl>
      <dt style="text-transform: uppercase">Challenges and Solutions</dt>
      <dd>
        <dl>
          <dt><strong>Responsive About Me section</strong></dt>
          <dd>
            This section went through several iterations due to it being
            unreadable at different page widths. At first, I fixed it a little
            bit by attaching font size to the view height, but that reduced
            accessibility. In the end, I realized that if I was to make
            something responsive, it should first and foremost be good on mobile
            devices, then changed for desktop afterward rather than the other
            way around. This allowed me to easily visualize what I needed to do
            and led to the current design.
          </dd>
        </dl>
        <dl>
          <dt><strong>Scrolling and small page</strong></dt>
          <dd>
            Scrolling was a bit difficult for me to manage. I wanted a button
            that could scroll automatically and also for the website to detect
            which page I was on. I first created a feedback loop where clicking
            a button would change the page, but as soon as the page moved, it
            would recalculate to go to only the next page. Additionally, the
            contact me section was so small that the scrolling would get
            confused and move to the wrong page and would skip detection for
            that page. My solution was two-fold: delete the contact me section
            (and move it to the home page) and only detect what page I was on
            when the page stopped scrolling.
          </dd>
        </dl>
      </dd>
    </dl>`,
    'info',
    'commentary',
    'PortfolioPage.jpg',
    [
      {
        title: 'Code',
        icon: 'code',
        href: 'https://github.com/LegendaryJay/portfolio',
        target: '_blank',
      },
    ]
  ),
  new Expando(
    'Yellowstone Job Application',
    'HTML/CSS/JS, Bootstrap, SCSS, [Design]',
    'A school project for my Javascript 2 class. The purpose was to redesign a job application to be easier to use.',
    `    <dl>
      <dt style="text-transform: uppercase">Overview</dt>
      <dd>
        <dl>
          <dt><strong>Objectives</strong></dt>
          <dd>
            This project was an assignment aimed at assessing our proficiency in
            JavaScript and our ability to identify and rectify issues on the
            original website.
          </dd>
          <dd style="color: red">
            Please note that due to time constraints, the website did not
            require full functionality.
          </dd>
        </dl>
      </dd>
      <dd>
        <dl>
          <dt><strong>Target Audience</strong></dt>
          <dd>Individuals seeking employment opportunities at Yellowstone.</dd>
        </dl>
      </dd>
    </dl>
    <hr />
    <dl>
      <dt style="text-transform: uppercase">Noteable Features</dt>
      <dd>
        <dl>
          <dt><strong>Segmented Questions</strong></dt>
          <dd>
            To alleviate user frustration caused by encountering an extensive
            list of tasks, questions are divided into manageable sections,
            reducing intimidation.
          </dd>
        </dl>
      </dd>
      <dd>
        <dl>
          <dt><strong>Job Board Integration</strong></dt>
          <dd>
            Instead of requiring applicants to select from various job options,
            the responsibility of job selection is shifted to Yellowstone,
            streamlining the application process.
          </dd>
        </dl>
      </dd>
    </dl>
    <hr />
    <dl>
      <dt style="text-transform: uppercase">Challenges and Solutions</dt>
      <dd>
        <dl>
          <dt><strong>Organization</strong></dt>
          <dd>
            To initiate the design process, I meticulously documented all
            significant questions from the original page (excluding trivial
            queries like the current date) and rearranged them, consolidating
            duplicates and keeping questions together based on purpose.
          </dd>
        </dl>
        <dl>
          <dt><strong>Unmet Goals</strong></dt>
          <dd>
            Regrettably, several goals were left incomplete due to time
            constraints. The implementation of disabled tabs until the previous
            page was completed, validation before progression, and conditional
            display of relevant elements (e.g., 21+ questions for the driver
            position) were originally planned but remain outstanding. With my
            current experience, I could easily accomplish these objectives.
          </dd>
        </dl>
        <dl>
          <dt><strong>Unplanned Goals</strong></dt>
          <dd>
            In retrospect, it is evident that the website lacks mobile
            compatibility. If given the opportunity to redo the project,
            prioritizing mobile responsiveness would be one of my primary
            objectives. Considering that most users access websites through
            their mobile devices, the failure to plan for this aspect was an
            oversight I would not repeat.
          </dd>
        </dl>
      </dd>
    </dl>`,
    'info',
    'commentary',
    'YellowstonePage.jpg',
    [
      {
        title: 'Original [Archive]',
        icon: 'album',
        href: 'https://web.archive.org/web/20131011020129/https://www.yellowstonejobs.com/Application-7509.html',
        target: '_blank',
      },
      {
        title: 'Code',
        icon: 'code',
        href: 'https://github.com/LegendaryJay/Yellowstone-Job-Application',
        target: '_blank',
      },
      {
        title: 'Demo',
        icon: 'play_arrow',
        href: 'https://tugbox.net/demos/yellowstone/',
        target: '_blank',
      },
    ]
  ),

  //

  // new Expando(
  //   'Wireframes',
  //   'Balsamiq Wireframes, [Design]',
  //   'I made these for my Web and Software capstone project'
  // ),
  // new Expando(
  //   'Olympic Medals',
  //   'React, HTML/CSS/JS',
  //   'I made this to test my react capabilities and work with '
  // ),
  // new Expando(
  //   'Media Library',
  //   'C#',
  //   'I learned C# and entity framework with this one.'
  // ),
]);
</script>

<template>
  <div class="portfolio-background medium-spacer-parent">
    <div class="slide-title text-weight-bolder medium-spacer-child">
      Portfolio
    </div>
    <div class="row">
      <div
        class="col-md-4 col-12 medium-spacer-child flex"
        v-for="project in projects"
        :key="project.name"
      >
        <div class="col">
          <ExpandoCard :item="project"></ExpandoCard>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.portfolio-background {
  background-color: rgba(black, 0.5);
  backdrop-filter: blur(20px);
  min-height: 100vh;
}
.slide-title {
  color: white;
  font-size: $text-xlarge;
}

.item-title {
  font-size: $text-large;
  font-weight: bolder;
  color: $secondary;
}
.portfolio-card {
  background-color: rgba($dark, 0.6);
  backdrop-filter: blur(10px);
  border-radius: 12px;
}
.portfolio-title {
  font-size: $text-large;
  color: $primary;
}
.about-text {
  font-size: $text-medium;
}

.background-card {
  background-color: rgba(black, 0.5);
  backdrop-filter: blur(20px);
  //min-height: 100vh)
}
</style>
