<template>
  <div class="full-page row content-center">
    <div class="id-area text-center q-px-lg q-py-md">
      <q-img
        class="profile-picture q-mx-auto q-my-sm"
        :src="getImageUrl('profile-picture.png')"
      />

      <div class="name-text">Dan Chianese</div>
      <div class="title-text">Web & Software Dev</div>
    </div>
    <div class="contact-area q-my-auto q-mx-auto q-pb-md column q-gutter-md">
      <span>
        <q-btn size="xs" outline rounded icon="phone" href="tel:12623490843" />
        <b class="title-text q-ml-md">Phone</b> 262.349.0843
      </span>
      <span>
        <q-btn
          outline
          rounded
          size="xs"
          icon="email"
          href="mailto:amorecbellum@gmail.com?subject=data backup"
        />
        <b class="title-text q-ml-md">Email</b> amorecbellum@gmail.com
      </span>
      <span>
        <q-btn
          size="xs"
          outline
          rounded
          icon="fa-brands fa-linkedin"
          href="https://www.linkedin.com/in/dan-chianese-244b16122/"
          target="_blank"
        />
        <b class="title-text q-ml-md">LinkedIn:</b>
        https://www.linkedin.com/in/dan-chianese-244b16122
      </span>
      <span>
        <q-btn
          size="xs"
          outline
          rounded
          icon="fa-brands fa-github"
          href="https://github.com/LegendaryJay"
          target="_blank"
          class="col-auto"
        />
        <b class="title-text q-ml-md">GitHub</b>
        https://github.com/LegendaryJay
      </span>
    </div>
  </div>
</template>

<script setup>
import { getImageUrl } from 'src/scripts/ImageFromUrl';
</script>
<style lang="scss" scoped>
.full-page {
  background-color: rgba(black, 0.5);
  backdrop-filter: blur(15px);
  background-blend-mode: multiply;
  margin: 0;
}

.id-area {
  border-right: 2px solid $dark;
}
.profile-picture {
  border-radius: 75% 25% 38% 62% / 65% 36% 64% 35%;
  max-height: 6rem;
  max-width: 6rem;
  display: block;
  height: auto;
  width: auto;
}

.name-text {
  font-weight: 500;
  font-size: 1rem;
  padding-bottom: 8px;
}

.title-text {
  font-weight: 900;
  font-size: 0.8rem;
  color: $primary;
  text-transform: uppercase;
}
</style>
