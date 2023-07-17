<script setup>
import { getImageUrl } from 'src/scripts/ImageFromUrl';
import { reactive } from 'vue';
import Expando from 'src/scripts/ExpandoObject';
import ExpandoCard from './ExpandoCard.vue';
const projects = reactive([
  new Expando(
    'Portfolio',
    'Vue 3 (Quasar-CLI), HTML/CSS/JS, SCSS, [Design]',
    'The page you are on now!',
    `<dl>
      <dt style="text-transform: uppercase">Overview</dt>
      <dd>
        <dl>
          <dt><strong>Goals</strong></dt>
          <dd>
            My major goals in this project were to create something intuitive,
            well-designed, and mobile-friendly. I wanted to showcase my attention
            to detail and present a website that is not only eye-catching but also
            visually simple.
          </dd>
        </dl>
      </dd>
      <dd>
        <dl>
          <dt><strong>Audience:</strong></dt>
          <dd>
            My audience is most likely you: someone checking out who I am in a
            professional capacity.
          </dd>
        </dl>
      </dd>
    </dl>
    <hr>
    <dl>
      <dt style="text-transform: uppercase">Notable Features</dt>
      <ul>
        <li>
          <strong>Mobile friendly:</strong> The website should work well across
          all devices.
        </li>
        <li>
          <strong>Drawer Open/Close animation:</strong> I dug into CSS to create
          an interesting animation that I am really proud of, despite it being
          easy to miss.
        </li>
      </ul>
    </dl>
    <hr>
    <dl>
      <dt style="text-transform: uppercase">Challenges and Solutions</dt>
      <dd>
        <dl>
          <dt><strong>Responsive About Me section</strong></dt>
          <dd>
            This section went through several iterations due to it being
            unreadable at different page widths. At first, I fixed it a little bit
            by attaching font size to the view height, but that reduced
            accessibility. In the end, I realized that if I was to make something
            responsive, it should first and foremost be good on mobile devices,
            then changed for desktop afterward rather than the other way around.
            This allowed me to easily visualize what I needed to do and led to the
            current design.
          </dd>
        </dl>
        <dl>
          <dt><strong>Scrolling and small page</strong></dt>
          <dd>
            Scrolling was a bit difficult for me to manage. I wanted a button that
            could scroll automatically and also for the website to detect which
            page I was on. I first created a feedback loop where clicking a button
            would change the page, but as soon as the page moved, it would
            recalculate to go to only the next page. Additionally, the contact me
            section was so small that the scrolling would get confused and move to
            the wrong page and would skip detection for that page. My solution was
            two-fold: delete the contact me section (and move it to the home page)
            and only detect what page I was on when the page stopped scrolling.
          </dd>
        </dl>
      </dd>
    </dl>`,
    'info',
    'commentary',
    'PortfolioPage.png'
  ),
  new Expando(
    'Yellowstone Job Application',
    'Vue 3 (Quasar-plugin), HTML/CSS/JS, SCSS, [Design]',
    'This was a school project where I needed to redesign from scratch an old Yellowstone job application'
  ),
  new Expando(
    'Wireframes',
    'Balsamiq Wireframes, [Design]',
    'I made these for my Web and Software capstone project'
  ),
  new Expando(
    'Olympic Medals',
    'React, HTML/CSS/JS',
    'I made this to test my react capabilities and work with '
  ),
  new Expando(
    'Media Library',
    'C#',
    'I learned C# and entity framework with this one.'
  ),
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
