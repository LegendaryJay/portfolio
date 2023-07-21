<script setup>
import { reactive } from 'vue';
import Expando from 'src/scripts/ExpandoObject';
import ExpandoCard from './ExpandoCard.vue';
const projects = reactive([
  new Expando(
    'Portfolio',
    'Quasar-CLI (Vue 3), HTML/CSS/JS, SCSS, {Design}',
    'This is the page you are on right now! I made this on my own time because I really enjoy working with Vue 3 and because I wanted to challenge myself.',
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
    'HTML/CSS/JS, Bootstrap, SCSS, {Design}',
    'The purpose of this project was to redesign a job application and create a proof-of-concept website. I included this to demonstrate the thought I put into UX and UI. ',
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
  new Expando(
    'Wireframes',
    'Balsamiq Wireframes, {Design}',
    "I was given the task to completely redesign a client's website. These are mockups I completed after studying the database schema and communicating with the client for feedback",
    null,
    null,
    null,
    'WireframeDemo.jpg',
    [
      {
        title: 'Wireframe',
        icon: 'architecture',
        href: 'https://balsamiq.cloud/si4kiz6/pjr87ro/rC802?f=N4IgUiBcCMA0IDkpxAYWfAMhkAhHAsjgFpQAM8A0lANqgBOUI0AbACxsgC%2BsDTAggFYAzADFuvEI0ghBglgCYJfGQBEAorjLKpTAJxtUqndOZlBSnitnq9%2FE0wDs0QZy4BdLkA%3D%3D',
        target: '_blank',
      },
    ]
  ),
  new Expando(
    'Fact App',
    'Xamarin Forms',
    'A small project I did for mobile development. This app displayed "true facts" about me with little pictures. Pictures and facts sourced from ChatGPT and Midjourney. This was mainly a "dive into the language" project.',
    null,
    'info',
    'commentary',
    'FactDemo.jpg',
    [
      {
        title: 'Code',
        icon: 'code',
        href: 'https://github.com/LegendaryJay/FactApp',
        target: '_blank',
      },
    ]
  ),
  new Expando(
    'Javascript Timer Final Project',
    'Vue 3 (with Quasar plugin),HTML/CSS/JS, Pinia, Firebase (nosql)',
    "This was an app that was supposed to help a user manage their time in order to be more productive. I've included this because I am particularly proud of the design of the code itself rather than the actual website.",
    `    <dl>
      <dt style="text-transform: uppercase">Overview</dt>
      <dd>
        <dl>
          <dt><strong>Objectives</strong></dt>
          <dd>
            This project was the final project for my javascript 2 class. The
            aim was to an assignment aimed at assessing our proficiency in the
            design of the website itself and the design of the code behind it.
            It was suppose to act as a pomodoro timer for productivity.
          </dd>
        </dl>
      </dd>
      <dd>
        <dl>
          <dt><strong>Target Audience</strong></dt>
          <dd>
            I made this essentiall for people like myself who benefit from
            productivity tools
          </dd>
        </dl>
      </dd>
    </dl>
    <hr />
    <dl>
      <dt style="text-transform: uppercase">Noteable Features</dt>
      <dd>
        <dl>
          <dt><strong>Database interactions have low coupling</strong></dt>
          <dd>
            I spent much of my time making sure that the components within this
            project could essentially be used anywhere by separating all the
            database functions to an object that can be replaced. This is fairly
            similar to the repository design pattern.
          </dd>
        </dl>
      </dd>
      <dd>
        <dl>
          <dt><strong>Well designed wireframe</strong></dt>
          <dd>
            The website does not quite match the wireframe due to time
            constraints and my learning Vue 3 for the first time, but I am
            extremely proud of how the wireframe turned out. I plan on finishing
            the concept and recreating a working copy.
          </dd>
        </dl>
      </dd>
    </dl>
    <hr />
    <dl>
      <dt style="text-transform: uppercase">Challenges and Solutions</dt>
      <dd>
        <dl>
          <dt><strong>Database Separation of Concerns</strong></dt>
          <dd>
            It felt really wrong of me to hardcode database stuff everywhere
            throughout the program. If I changed one thing, I would have to make
            tons of changes. What I ended up doing is something similar to the
            repository pattern. Essentially I only allowed things to interface
            with a section called
            <a
              href="https://github.com/LegendaryJay/JavascriptFinal/blob/master/src/model/UserRepository.js"
            >
              UserRepository
            </a>
            which did pretty much all the specialized work while only showing
            general commands to whatever implimented it.
          </dd>
        </dl>
        <dl>
          <dt><strong>Firebase issues</strong></dt>
          <dd>
            I had some sort of compatability issues with firebase at the time. I
            remember it being really hard to work with due to conflicting
            documentation (because the version was brand new at the time) too.
            What I ended up doing is downgrading the firebase version. Suddenly,
            everything worked as intended.
          </dd>
        </dl>
        <dl>
          <dt><strong>Firebase Authentication</strong></dt>
          <dd>
            Much of my time went into learning how firebase worked. This was all
            new technology for me at the time so learning just took a little
            extra time. I am unsure why I struggled with this, but the answer
            was simply to read through the documentation from start to finish
            after downgrading the version. After that, progressing was extremely
            easy.
          </dd>
        </dl>
      </dd>
    </dl>
    `,
    'info',
    'commentary',
    '',
    [
      {
        title: 'Wireframe',
        icon: 'architecture',
        href: 'https://balsamiq.cloud/si4kiz6/p7vg6g1',
        target: '_blank',
      },
      {
        title: 'Code',
        icon: 'code',
        href: 'https://github.com/LegendaryJay/JavascriptFinal',
        target: '_blank',
      },

      // https://balsamiq.cloud/si4kiz6/p7vg6g1
    ]
  ),
  new Expando(
    'Olympic Medals',
    'React, Axios, C#, Entity Framework',
    'This was an app was a tiny project that would help a single user keep track of olympic medals. The back-end and front-end were written by me. This is included to demonstrate my understanding of axios and react.',
    null,
    'info',
    'commentary',
    '',
    [
      {
        title: 'Code',
        icon: 'code',
        href: 'https://github.com/LegendaryJay/Simple-react/tree/master',
        target: '_blank',
      },
    ]
  ),
  //

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
        <ExpandoCard :item="project"></ExpandoCard>
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
