<script setup>
import { getImageUrl } from 'src/scripts/ImageFromUrl';
</script>

<template>
  <div class="home-background fit window-height row flex-center">
    <q-card flat class="id-card col-12 col-md-6 row justify-around">
      <div class="profile-picture-wrapper flex-center column q-pa-lg">
        <q-img
          class="profile-picture"
          :src="getImageUrl('profile-picture.png')"
        />
      </div>

      <div class="column justify-between col q-pa-md">
        <div class="text-area column content-center justify-center">
          <div class="row self-end">
            <q-btn
              size="xs"
              class="q-p-xs"
              flat
              fab-mini
              icon="fa-brands fa-linkedin"
              href="https://www.linkedin.com/in/dan-chianese-244b16122/"
              target="_blank"
            />
            <q-btn
              size="xs"
              class="q-p-xs"
              flat
              fab-mini
              icon="fa-brands fa-github"
              href="https://github.com/LegendaryJay"
              target="_blank"
            />
          </div>
          <text class="name-text"> Hi, I'm Dan! </text>
          <text class="title-text text-uppercase">
            Web and Software Developer
          </text>
          <text class="details-text">
            I'm a newly graduated developer passionate about crafting efficient
            and user-friendly solutions!
          </text>
        </div>
      </div>
    </q-card>
  </div>
</template>

<style lang="scss" scoped>
.home-background {
  background-color: rgba(black, 0.5);
  backdrop-filter: blur(20px);
}

.id-card {
  background-color: rgba($dark, 0.8);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  background-blend-mode: multiply;
  aspect-ratio: 3;
}

.profile-picture-wrapper {
  width: 18rem;
  aspect-ratio: 1;
}
.profile-picture {
  max-height: 18rem;
  max-width: 18rem;
  border-radius: 75% 25% 38% 62% / 65% 36% 64% 35%;
}

.name-text {
  font-weight: 500;
  font-size: 40px;
  padding-bottom: 8px;
}

.title-text {
  font-weight: 900;
  font-size: 16px;
  color: $primary;
}

.details-text {
  font-weight: 300;
  font-size: 18px;
}

.scroll-text {
  color: $secondary;
  font-size: smaller;
}
</style>
