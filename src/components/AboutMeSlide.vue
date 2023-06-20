<script setup>
import { useQuasar } from 'quasar';
import SkillGraph from './SkillGraph.vue';
const $q = useQuasar();
const getImageUrl = (name) => {
  return new URL(`../assets/${name}`, import.meta.url).href;
};
</script>

<template>
  <q-parallax
    class="window-height full-width"
    :speed="1"
    :height="$q.screen.height"
    :src="getImageUrl('blurry-abstract.png')"
  >
    <q-card flat class="background-card column">
      <q-card-section>
        <div class="slide-title text-weight-bolder">About Me</div>
      </q-card-section>
      <q-card-section horizontal class="col q-pt-none">
        <q-card-section class="col">
          <q-card flat class="fit column about-me-card">
            <q-card-section class="item-title"> At a Glance </q-card-section>
            <q-separator></q-separator>
            <q-card-section horizontal class="col">
              <q-card-section class="col">
                <div class="subsection-title q-pr-md q-pb-xs">My Life</div>
                <div class="about-text q-pl-md text-justify q-pr-md q-pb-md">
                  Hello, I'm Dan Chianese, a recent graduate with an associates
                  in Web and Software Development. Currently seeking new
                  opportunities in Canada, I am passionate about problem-solving
                  and enjoy tackling technical and user-oriented challenges.
                </div>

                <div class="subsection-title q-pr-md q-pb-xs">My Passions</div>
                <div class="about-text q-pl-md text-justify q-pr-md q-pb-md">
                  Since my early years, I've fostered a deep passion for
                  programming and design. From creating tools in Garry's Mod to
                  designing discord and in-game UIs for my Minecraft Server, I
                  thrive on learning and overcoming novel problems. I excel at
                  embracing constructive criticism, continuously growing and
                  adapting to new situations.
                </div>
                <div class="subsection-title full-width q-pr-md q-pb-xs">
                  My Goals
                </div>
                <div class="q-pr-md q-pb-md q-pl-md about-text text-justify">
                  Over the next five years, I aim to pursue further education
                  and transition somewhat to the design elements of web and
                  software. I am eager to embrace a career that provides
                  continuous challenges and opportunities for personal growth.
                </div>
              </q-card-section>
              <q-separator vertical></q-separator>
              <q-card-section class="col-3">
                <q-card flat class="skills-card col-3">
                  <q-card-section class="subsection-title-small text-primary">
                    <div><b>Nicki Kowalchuk</b></div>
                    <div><i>WCTC Capstone Instructor</i></div>
                  </q-card-section>
                  <div class="subsection-text-small q-px-md q-pb-md">
                    “Dan was a fantastic addition to his capstone project team.
                    He did a lot of legwork to ensure he was understanding the
                    needs of the application. The mockups Dan created showed a
                    deep understanding of the process and will make the flow of
                    the data entry easy for end-users.”
                  </div>
                </q-card>
              </q-card-section>
            </q-card-section>
          </q-card>
        </q-card-section>
        <q-card-section class="column skill-wrapper">
          <div class="col-auto q-pb-md">
            <q-card flat class="skills-card fit">
              <q-card-section>
                <div class="item-title">Skills</div>
              </q-card-section>
              <q-separator></q-separator>
              <q-card-section>
                <skill-graph />
              </q-card-section>
            </q-card>
          </div>
          <div class="col">
            <q-card flat class="about-me-card fit">
              <q-card-section class="row justify-between">
                <div class="item-title">Experience</div>

                <q-btn
                  icon="cloud_download"
                  size="sm"
                  outline
                  rounded
                  color="primary"
                  label="View Resume"
                  href="https://docs.google.com/document/d/1ueapkNSotpiRezAr5IFR1hoOmm2EcR6i2CoRzp6XKpo/edit?usp=sharing"
                  target="_blank"
                />
              </q-card-section>
              <q-separator></q-separator>
              <q-card-section>
                <div class="subsection-title-small">Education</div>
                <div class="q-px-md row subsection-text-small">
                  <div class="col-auto"><b>Web & Software Associates</b></div>
                  <div class="dot col"></div>
                  <div class="col-auto">May 2023</div>
                  <div class="col-12">
                    <i>Waukesha County Technical College </i>
                  </div>
                </div>
                <div class="subsection-title-small q-pt-md">Work</div>
                <div class="q-ml-md row-inline">
                  <div class="row subsection-text-small">
                    <b class="col-auto">Developer Intern</b>
                    <div class="dot col"></div>
                    <div class="col-auto">Feb - May 2023</div>
                    <div class="col-12"><i>SSR Total It </i></div>
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </q-card-section>
      </q-card-section>
    </q-card>
  </q-parallax>
</template>

<style lang="scss" scoped>
.full-page {
  backdrop-filter: blur(10px);
}

.slide-title {
  color: white;
  font-size: 2rem;
}

.item-title {
  font-size: 1.3rem;
  font-weight: bolder;
  color: $secondary;
}

.history-text {
  font-size: small;
}
.subsection-title {
  font-size: 1.5rem;
  color: $primary;
}
.subsection-title-small {
  font-size: 0.9rem;
  color: $primary;
}
.subsection-text-small {
  font-size: 0.8rem;
  color: white;
}
.skills-card {
  background-color: rgba($dark, 0.6);
  backdrop-filter: blur(10px);
  border-radius: 20px;
}
.skill-wrapper {
  width: 350px;
}
.about-me-card {
  background-color: rgba($dark, 0.6);
  backdrop-filter: blur(10px);
  border-radius: 20px;
}
.about-title {
  font-size: 1.4rem;
  text-rendering: optimizeLegibility;
}
.about-text {
  font-size: 1.4rem;
  text-rendering: optimizeLegibility;
}

.background-card {
  background-color: rgba(black, 0.5);
  backdrop-filter: blur(20px);
  height: 95%;
  width: 95%;
  border-radius: 20px;
}
.dot {
  border-bottom: dotted 3px rgba($primary, 0.3);
  width: 100px;
  float: left;
  position: relative;
  display: block;
  height: 12px;
  margin: 0 5px 0 5px;
}
</style>