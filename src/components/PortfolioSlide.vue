<script setup>
import { reactive } from 'vue';
import Expando from 'src/scripts/ExpandoObject';
import ExpandoCard from './ExpandoCard.vue';
const projects = reactive([
  new Expando(
    'Portfolio',
    'Quasar-CLI (Vue 3), HTML/CSS/JS, SCSS, {Design}',
    'This is the page you are on right now! I made this on my own time because I really enjoy working with Vue 3 and because I wanted to challenge myself.',
    `
<dl>
  <dt style="text-transform: uppercase">Overview</dt>
  <dd>
    <dl>
      <dt><strong>Goals</strong></dt>
      <dd>
        The primary objectives of this project were to create an intuitive, well-designed, and mobile-friendly website. I aimed to showcase my attention to detail and present a visually appealing website that is both eye-catching and visually simple.
      </dd>
    </dl>
  </dd>
  <dd>
    <dl>
      <dt><strong>Audience</strong></dt>
      <dd>
        The target audience for this website is most likely you: someone checking out who I am in a professional capacity.
      </dd>
    </dl>
  </dd>
</dl>
<hr />
<dl>
  <dt style="text-transform: uppercase">Notable Features</dt>
  <dd>
    <dl>
      <dt><strong>Mobile Friendly</strong></dt>
      <dd>The website is designed to work well across all devices, ensuring a seamless user experience on both desktop and mobile platforms.</dd>
    </dl>
    <dl>
      <dt><strong>Drawer Open/Close Animation</strong></dt>
      <dd>
        I delved into CSS to create an engaging animation for the website's drawer, which I am particularly proud of, even though it might be easy to overlook. This animation adds a touch of creativity to the overall design.
      </dd>
    </dl>
  </dd>
</dl>
<hr />
<dl>
  <dt style="text-transform: uppercase">Challenges and Solutions</dt>
  <dd>
    <dl>
      <dt><strong>Responsive About Me Section</strong></dt>
      <dd>
        The About Me section went through several iterations to address readability issues at different page widths. Initially, I attempted to fix it by adjusting the font size based on view height, but this approach reduced accessibility. Eventually, I realized that making the website responsive should prioritize mobile devices first and then adjust for desktop. This change in approach allowed me to visualize the necessary modifications, resulting in the current design.
      </dd>
    </dl>
    <dl>
      <dt><strong>Scrolling and Small Page</strong></dt>
      <dd>
        Managing scrolling proved to be challenging. I wanted a button that could scroll automatically and the website to detect which page I was on. Initially, I faced difficulties with a feedback loop that would only scroll to the next page after detecting a click. Additionally, the contact me section was small, causing scrolling confusion and skipping detection. To resolve these issues, I removed the contact me section (integrating it into the home page) and improved the scrolling detection to determine the page when scrolling stopped.
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
    `
<dl>
  <dt style="text-transform: uppercase">Overview</dt>
  <dd>
    <dl>
      <dt><strong>Objectives</strong></dt>
      <dd>
        The main objective of this project was to evaluate our proficiency in JavaScript and our ability to identify and resolve issues on the original website.
      </dd>
      <dd style="color: red">
        Please note that due to time constraints, the website did not require full functionality.
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
  <dt style="text-transform: uppercase">Notable Features</dt>
  <dd>
    <dl>
      <dt><strong>Segmented Questions</strong></dt>
      <dd>
        To address user frustration caused by encountering an extensive list of tasks, we divided questions into manageable sections, reducing intimidation and enhancing user experience.
      </dd>
    </dl>
  </dd>
  <dd>
    <dl>
      <dt><strong>Job Board Integration</strong></dt>
      <dd>
        Instead of requiring applicants to select from various job options, the responsibility of job selection was shifted to Yellowstone, streamlining the application process and improving efficiency.
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
        To initiate the design process, I meticulously documented all significant questions from the original page, excluding trivial queries like the current date, and rearranged them, consolidating duplicates and grouping questions based on their purpose.
      </dd>
    </dl>
    <dl>
      <dt><strong>Unmet Goals</strong></dt>
      <dd>
        Regrettably, several goals were left incomplete due to time constraints. Originally planned objectives, such as the implementation of disabled tabs until the previous page was completed, validation before progression, and conditional display of relevant elements (e.g., 21+ questions for the driver position) remain outstanding. Given my current experience, I could easily accomplish these objectives.
      </dd>
    </dl>
    <dl>
      <dt><strong>Unplanned Goals</strong></dt>
      <dd>
        In retrospect, it is evident that the website lacks mobile compatibility. If given the opportunity to redo the project, prioritizing mobile responsiveness would be one of my primary objectives. Considering that most users access websites through their mobile devices, the failure to plan for this aspect was an oversight I would not repeat.
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
    "I was assigned the task of completely redesigning a client's website. After thoroughly studying the database schema and gathering feedback from the client, I created these mockups to showcase the proposed changes and improvements.",
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
    'This was a mobile development project I worked on—a small app that presented "true facts" about myself, accompanied by little pictures. The content, including the pictures and facts, was sourced from ChatGPT and Midjourney. The primary objective of this project was to explore and familiarize myself with the language and its capabilities.',
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
    '"Pomme" Pomodoro Web App',
    'Vue 3 (with Quasar plugin),HTML/CSS/JS, Pinia, Firebase (nosql)',
    "This was an app that was supposed to help a user manage their time in order to be more productive. I've included this because I am particularly proud of the design of the code itself rather than the actual website.",
    `    <dl>
  <dt style="text-transform: uppercase">Overview</dt>
  <dd>
    <dl>
      <dt><strong>Objectives</strong></dt>
      <dd>
        This project served as the final assignment for my JavaScript 2 class. Its main aim was to assess our proficiency in designing both the website and the underlying code. The project was intended to act as a productivity-enhancing Pomodoro timer.
      </dd>
    </dl>
  </dd>
  <dd>
    <dl>
      <dt><strong>Target Audience</strong></dt>
      <dd>
        I created this application primarily for people like myself who benefit from using productivity tools.
      </dd>
    </dl>
  </dd>
</dl>
<hr />
<dl>
  <dt style="text-transform: uppercase">Notable Features</dt>
  <dd>
    <dl>
      <dt><strong>Database Interactions with Low Coupling</strong></dt>
      <dd>
        One of my main focuses was to ensure that the components within this project could be used anywhere by separating all the database functions into an object that can be replaced. This approach is similar to the repository design pattern.
      </dd>
    </dl>
  </dd>
  <dd>
    <dl>
      <dt><strong>Well-designed Wireframe</strong></dt>
      <dd>
        Although the final website does not fully match the wireframe due to time constraints and my learning of Vue 3 for the first time, I am extremely proud of how the wireframe turned out. I plan on completing the concept and recreating a fully functional copy.
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
        I felt that hardcoding database-related code everywhere in the program was not a good approach. Any changes to one part would require many modifications. To address this, I adopted a pattern similar to the repository pattern. I allowed interactions only with the <a href="https://github.com/LegendaryJay/JavascriptFinal/blob/master/src/model/UserRepository.js">UserRepository</a>, which handled all the specialized database operations while providing a general interface to the rest of the application.
      </dd>
    </dl>
    <dl>
      <dt><strong>Firebase Issues</strong></dt>
      <dd>
        I encountered compatibility issues with Firebase at the time, as the version was relatively new and the documentation was conflicting. To resolve this, I downgraded the Firebase version, and suddenly everything started working as intended.
      </dd>
    </dl>
    <dl>
      <dt><strong>Firebase Authentication</strong></dt>
      <dd>
        A significant amount of time was spent learning how Firebase authentication worked since it was new technology for me at the time. Although I initially struggled, the solution was simple: I read through the documentation from start to finish after downgrading the version. After that, progress became much smoother.
      </dd>
    </dl>
  </dd>
</dl>
    `,
    'info',
    'commentary',
    'Pomme-adoroWireframe.jpg',
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
    'This is an app that represents a small personal project designed to assist a single user in keeping track of Olympic medals. Both the back-end and front-end were authored by me, showcasing my proficiency in using axios and React',
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
