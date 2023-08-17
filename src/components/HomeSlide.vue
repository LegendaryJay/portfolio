<script setup>
import { getImageUrl } from 'src/scripts/ImageFromUrl';
import { ref } from 'vue';
const showLinks = ref(false);
const links = [
  {
    title: 'Phone',
    subtitle: '262.349.0843',
    icon: 'phone',
    type: 'a',
    href: 'tel:12623490843',
  },
  {
    title: 'Email',
    subtitle: 'dan.chianese@tugbox.net',
    icon: 'email',
    type: 'a',
    href: 'mailto:dan.chianese@tugbox.net',
  },
  {
    title: 'LinkedIn',
    subtitle: 'https://www.linkedin.com/in/dan-chianese-244b16122',
    icon: 'fa-brands fa-linkedin',
    href: 'https://www.linkedin.com/in/dan-chianese-244b16122/',
    target: '_blank',
  },
  {
    title: 'GitHub',
    subtitle: 'https://github.com/LegendaryJay',
    icon: 'fa-brands fa-github',
    href: 'https://github.com/LegendaryJay',
    target: '_blank',
  },
];
</script>

<template>
  <div class="home-background fit row flex-center">
    <q-card
      flat
      class="id-card col-12 col-sm-7 column"
      style="overflow: hidden"
    >
      <q-card-section :horizontal="$q.screen.gt.md">
        <q-card-section class="col-4">
          <q-img
            class="profile-picture col-auto q-mx-auto q-my-auto"
            fit="cover"
            :src="getImageUrl('profile-picture.jpg')"
          />
        </q-card-section>
        <q-card-section class="col-8 text-center q-my-auto">
          <div class="name-text">Hi, I'm Dan!</div>
          <div class="title-text text-uppercase">Web & Software Developer</div>
          <div class="details-text">
            I'm a newly graduated developer passionate about crafting efficient
            and user-friendly solutions!
          </div>
        </q-card-section>
      </q-card-section>

      <q-btn
        class="full-width"
        :class="'contact-button' + (showLinks ? '--open' : '--closed')"
        flat
        @click="() => (showLinks = !showLinks)"
      >
        <div class="row full-width">
          <q-icon
            class="col-auto"
            :name="showLinks ? 'expand_less' : 'expand_more'"
          />
          <div class="col">
            <q-icon class="q-mx-sm" name="person" />Contact Me
          </div>
          <q-icon
            class="col-auto"
            :name="showLinks ? 'expand_less' : 'expand_more'"
          />
        </div>
      </q-btn>
      <q-slide-transition>
        <q-card-section class="contact-area column" v-if="showLinks">
          <q-list>
            <q-item v-for="link in links" :key="link.title">
              <q-item-section avatar clickable>
                <q-btn
                  color="accent"
                  size="md"
                  outline
                  rounded
                  :icon="link?.icon"
                  :href="link?.href"
                  :target="link?.target"
                  :type="link?.type"
                />
              </q-item-section>
              <q-item-section>
                <q-item-label>{{ link.title }}</q-item-label>
                <q-separator vertical />
                <q-item-label caption>{{ link.subtitle }}</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-card-section>
      </q-slide-transition>
    </q-card>
    <div flat class="main-circle">▼ Scroll Down ▼</div>
  </div>
</template>

<style lang="scss" scoped>

.main-circle {
  color: $secondary;
  position: fixed;
  bottom: 0px;
  margin: 10px;
  font-size: 12px;
  z-index: -1;
  font-weight: 100;
  animation: pulse 2s ease-in-out  alternate infinite;
}
@keyframes pulse {
  0%, 80%, 100% {
    transform: scale(1) translateY(0)
  }
  90% {
    transform: scale(0.94) translateY(5px)
  }
}


.contact-button--closed {
  background: $dark;
  color: white;
}
.contact-button--open {
  background: lighten($dark, 50);
  color: $dark;
}
.contact-title-text {
  color: $primary;

  margin-right: 5px;
}
.contact-area {
  background: $dark;
}

.home-background {
  background-color: rgba(black, 0.5);
  backdrop-filter: blur(20px);
  min-height: 100svh;
}

.id-card {
  background-color: rgba($dark, 0.8);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  background-blend-mode: multiply;
}

.profile-picture {
  display: block;
  max-height: 15rem;
  max-width: 15rem;
  //border-radius: 10px;
  border-radius: 75% 25% 38% 62% / 65% 36% 64% 35%;
}
.social-links {
  position: absolute;
  top: 5px;
  right: 5px;
}
.name-text {
  font-weight: 500;
  font-size: $text-xlarge;
  color: $secondary;
}

.title-text {
  font-weight: 900;
  font-size: $text-large;
  color: $primary;
}

.details-text {
  font-weight: 300;
  font-size: $text-large;
}
</style>
