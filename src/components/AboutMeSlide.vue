<script setup>
import { useQuasar } from 'quasar';

import { getImageUrl } from 'src/scripts/ImageFromUrl';
import { ref, reactive } from 'vue';
import ExpandoCard from './ExpandoCard.vue';
import Expando from '/src/scripts/ExpandoObject.js';
import SkillGraph from './SkillGraph.vue';

const recommendations = reactive([
  new Expando(
    'Rajesh',
    'Mentor at SSR Total IT',
    'I had the pleasure of working alongside Dan on a complex and demanding project, and I was continually impressed by his professionalism, dedication, and expertise. Dan consistently delivered high-quality work, even under tight deadlines and challenging circumstances. He has a keen eye for detail and an ability to think critically, which allowed him to identify and resolve potential issues before they became problems.',
    `<html>
      <p>June 21, 2023</p>
      <p>
        I had the pleasure of working alongside Dan on a complex and demanding
        project, and I was continually impressed by his professionalism, dedication,
        and expertise. Dan consistently delivered high-quality work, even under
        tight deadlines and challenging circumstances. He has a keen eye for detail
        and an ability to think critically, which allowed him to identify and
        resolve potential issues before they became problems. Dan's strong technical
        skills and ability to collaborate with team members made working with him a
        seamless experience. He knows how to communicate effectively, listen to
        others' ideas, and contribute constructively to discussions.
      </p>

      <strong>Skills:</strong>
      <ul>
        <li>
          <strong>Problem-solving:</strong>
          Dan is a skilled problem-solver who thrives in challenging situations. He
          has a knack for identifying root causes and developing innovative
          solutions to overcome obstacles.
        </li>
        <li>
          <strong>Team Collaboration:</strong>
          Dan is a valuable team player who excels in collaborating with colleagues
          from diverse backgrounds. He actively contributes ideas, listens to
          others' perspectives, and fosters a positive and inclusive team
          environment.
        </li>
        <li>
          <strong>Analytical Thinking:</strong>
          Dan possesses strong analytical skills, allowing him to assess complex
          situations, gather relevant data, and make informed decisions. He has the
          ability to analyze information critically, identify patterns, and provide
          insights that drive strategic decision-making.
        </li>
        <li>
          <strong>Adaptability:</strong>
          Dan is highly adaptable and thrives in dynamic work environments. He
          quickly adjusts to new challenges, embraces change, and maintains a
          positive attitude even in demanding situations.
        </li>
      </ul>

      <p>
        I wholeheartedly recommend Dan to any organization looking for a highly
        skilled and reliable professional.
      </p>
    </html>`
  ),
  new Expando(
    'Nicki Kowalchuk',
    'WCTC Capstone Instructor',
    'Dan was a fantastic addition to his capstone project team. He did a lot of legwork to ensure he was understanding the needs of the application. The mockups Dan created showed a deep understanding of the process and will make the flow of the data entry easy for end-users.'
  ),
  new Expando(
    'Stacy Read',
    'WCTC Instructor',
    'Afer having Dan Chianese as a student in several of my programming classes (ranging from beginner- to advanced-level) I can confidently say that I believe Dan will succeed as a software developer based on how strongly he exhibits [determination, curiosity, Lateral thinking, and passion]. Because of his demonstrated creativity, determination, and hard work, I unreservedly recommend Dan as a valuable contributor to any development team.',
    `<html>
    <p>June 19, 2023</p>
    <p>
      When interviewing a software developer, or when working with a programming
      student, I look for several qualities to indicate their aptitude for success
      in this field:
    </p>
    <ul>
      <li>
        <strong>Determination</strong>: Is this person going to pursue a problem
        to its solution, or will they give up and hand it over to someone else? I
        want someone who personally embraces each challenge and owns it.
      </li>
      <li>
        <strong>Curiosity</strong>: It's not enough that something works - they
        want to know why it works. What makes one solution better than another?
        Technology is always changing, so they keep one eye on the bigger picture.
      </li>
      <li>
        <strong>Lateral thinking</strong>: Sometimes the best way to solve a
        problem is to turn it into an entirely different problem. Does this person
        exhibit radical creativity that can take us in new and better directions?
      </li>
      <li>
        <strong>Passion</strong>: Are they working on personal projects to keep
        their skills sharp and up to date? Software development is a field of
        perpetual learning, and that should excite them!
      </li>
    </ul>
    <p>
      After having Dan Chianese as a student in several of my programming classes
      (ranging from beginner- to advanced-level), I can confidently say that I
      believe Dan will succeed as a software developer based on how strongly he
      exhibits these qualities. Because of his demonstrated creativity,
      determination, and hard work, I unreservedly recommend Dan as a valuable
      contributor to any development team.
    </p>
    <p>Sincerely,</p>
    <img
      src="https://raw.githubusercontent.com/LegendaryJay/portfolio/87ff09372f5c43e5125b6f3b8a69300c8c33abe2/src/assets/StacySignature.svg"
      alt="Signature"
      style="max-height: 4rem"
    />
    <p>Stacy Read</p>
    <p>Senior Software Engineer, IVA'AL Solutions, LLC</p>
    <p>Web and Software Instructor, Waukesha County Technical College</p>
  </html>`
  ),
]);

const $q = useQuasar();
const pageHeight = ref($q.screen.height);
const onResize = (size) => {
  pageHeight.value = size.height;
};

let skillsTextSize = ref(14);
</script>

<template>
  <q-parallax
    :height="Math.max(pageHeight, $q.screen.height)"
    class="bg-black"
    :speed="1"
    :src="getImageUrl('blurry-abstract.jpg')"
  >
    <div class="background-card medium-spacer-parent">
      <q-resize-observer @resize="onResize" />
      <div class="slide-title text-weight-bolder medium-spacer-child">
        About Me
      </div>

      <div class="row">
        <div class="medium-spacer-child col-lg-4 column">
          <q-card flat class="about-me-card col column">
            <q-card-section class="item-title medium-spacer-parent">
              At a Glance
            </q-card-section>
            <q-separator></q-separator>
            <div
              :class="
                'row medium-spacer-parent col ' +
                ($q.screen.lt.md ? 'column' : 'row')
              "
            >
              <div class="col medium-spacer-child">
                <div class="about-title">My Life</div>
                <div class="about-text q-pl-md text-justify">
                  Hello, I'm Dan Chianese, a recent graduate with an associates
                  in Web and Software Development. Currently seeking new
                  opportunities in Canada, I am passionate about problem-solving
                  and enjoy tackling technical and user-oriented challenges.
                </div>

                <div class="about-title q-pt-md">My Passions</div>
                <div class="about-text q-pl-md text-justify">
                  Since my early years, I've fostered a deep passion for
                  programming and design. From creating tools in Garry's Mod to
                  designing discord and in-game UIs for my Minecraft Server, I
                  thrive on learning and overcoming novel problems. I excel at
                  embracing constructive criticism, continuously growing and
                  adapting to new situations.
                </div>
                <div class="about-title q-pt-md">My Goals</div>
                <div class="q-pl-md about-text text-justify">
                  Over the next five years, I aim to pursue further education
                  and transition somewhat to the design elements of web and
                  software. I am eager to embrace a career that provides
                  continuous challenges and opportunities for personal growth.
                </div>
              </div>
            </div>
          </q-card>
        </div>
        <div class="col-sm-12 col-lg-4 col-12 row">
          <div class="medium-spacer-child col-sm-6 col-lg-12 col-12">
            <q-card flat class="about-me-card">
              <q-card-section>
                <div class="item-title">Skills</div>
              </q-card-section>
              <q-separator></q-separator>
              <q-card-section>
                <skill-graph :size="skillsTextSize" />
              </q-card-section>
            </q-card>
          </div>

          <div class="medium-spacer-child col-sm-6 col-lg-12 col-12">
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
                <div class="subsection-title">Education</div>
                <div class="q-px-md row subsection-text">
                  <div class="col-auto"><b>Web & Software Associates</b></div>
                  <div class="dot col"></div>
                  <div class="col-auto">May 2023</div>
                  <div class="col-12">
                    <i>Waukesha County Technical College </i>
                  </div>
                </div>
                <div class="subsection-title q-pt-md">Work</div>
                <div class="q-ml-md row-inline">
                  <div class="row subsection-text">
                    <b class="col-auto">Developer Intern</b>
                    <div class="dot col"></div>
                    <div class="col-auto">Feb - May 2023</div>
                    <div class="col-12"><i>SSR Total It </i></div>
                  </div>
                </div>

                <div class="subsection-title q-pt-md">Hobby</div>
                <div class="q-ml-md row-inline">
                  <div class="q-px-md row subsection-text">
                    <div class="col-auto"><b>Server Admin</b></div>
                    <div class="dot col"></div>
                    <div class="col-auto">3+ years</div>
                    <div class="col-12">
                      <i>Centos Hosted Personal Server </i>
                    </div>
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
        <div class="col-12 col-lg-4 medium-spacer-child">
          <q-card flat class="about-me-card fit column">
            <q-card-section class="item-title">
              Recommendations
            </q-card-section>
            <q-separator></q-separator>
            <div
              class="medium-spacer-parent col"
              :class="$q.screen.gt.md ? 'column' : 'row'"
            >
              <div
                class="col-xs-12 col-md medium-spacer-child flex"
                v-for="(rec, key) in recommendations"
                :key="key"
              >
                <ExpandoCard :item="rec"></ExpandoCard>
              </div>
            </div>
          </q-card>
        </div>
      </div>
    </div>
  </q-parallax>
</template>

<style lang="scss" scoped>
.medium-spacer-parent {
  padding-top: 16px;
  padding-right: 16px;
}
.medium-spacer-child {
  padding-bottom: 16px;
  padding-left: 16px;
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

.history-text {
  font-size: $text-small;
}
.subsection-title {
  font-size: $text-large;
  color: $primary;
}
.subsection-title-small {
  font-size: $text-small;
  color: $primary;
}
.subsection-text-small {
  font-size: $text-xsmall;
  color: white;
}

.about-me-card {
  background-color: rgba($dark, 0.6);
  backdrop-filter: blur(10px);
  border-radius: 12px;
}
.about-title {
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
