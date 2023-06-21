<script setup>
import { getImageUrl } from 'src/scripts/ImageFromUrl';
</script>

<template>
  <div class="home-background fit row flex-center">
    <q-card flat class="id-card col-12 col-sm-7 column flex-center">
      <q-card-section :horizontal="$q.screen.gt.md">
        <q-card-section class="col-4">
          <q-img
            class="profile-picture q-ma-md col-auto q-mx-auto q-my-auto"
            fit="contain"
            :img-style="{
              'border-radius': '75% 25% 38% 62% / 65% 36% 64% 35%',
            }"
            :src="getImageUrl('profile-picture.png')"
          />
        </q-card-section>
        <span class="social-links">
          <q-btn
            size="xs"
            flat
            fab-mini
            icon="fa-brands fa-linkedin"
            href="https://www.linkedin.com/in/dan-chianese-244b16122/"
            target="_blank"
          />
          <q-btn
            size="xs"
            flat
            fab-mini
            icon="fa-brands fa-github"
            href="https://github.com/LegendaryJay"
            target="_blank"
          />
        </span>
        <q-card-section class="col-8 text-center q-my-auto">
          <div class="name-text">Hi, I'm Dan!</div>
          <div class="title-text text-uppercase">Web & Software Developer</div>
          <div class="details-text">
            I'm a newly graduated developer passionate about crafting efficient
            and user-friendly solutions!
          </div>
        </q-card-section>
      </q-card-section>
    </q-card>
  </div>
</template>

<style lang="scss" scoped>
.home-background {
  background-color: rgba(black, 0.5);
  backdrop-filter: blur(20px);
  min-height: 100vh;
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
