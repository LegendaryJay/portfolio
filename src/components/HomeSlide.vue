<script setup>
const getImageUrl = (name) => {
  return new URL(`../assets/${name}`, import.meta.url).href;
};
</script>

<template>
  <div class="full-page row flex-center"></div>

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
          />
          <q-btn
            size="xs"
            class="q-p-xs"
            flat
            fab-mini
            icon="fa-brands fa-github"
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
</template>

<style lang="scss" scoped>
.full-page {
  height: 100vh;
  width: 100%;
  background-color: $dark-page;
  //background-color: black;

  mix-blend-mode: multiply;
  position: absolute;
}
.id-card {
  background-color: rgba($dark, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  background-blend-mode: overlay;
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
  color: lighten($primary, 20);
}

.details-text {
  font-weight: 300;
  font-size: 18px;
}
</style>
