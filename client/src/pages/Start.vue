<template>
  <div class="home-container">
    <div class="logo-container">
      <img :src="logo" alt="Logo" />
      <div>TodoHive</div>
    </div>
    <div class="slogan">Innovative, user-friendly, and easy</div>
    <a class="get-start-button" href="/login">
      <div>Get started</div>
      <img :src="arrow" alt="Arrow" />
    </a>
  </div>
</template>

<script lang="ts" setup>
import logo from "../assets/images/logo.svg";
import arrow from "../assets/images/arrow.svg";
</script>

<style scoped>
.home-container {
  background-image: url("../assets/images/background.svg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
}

.logo-container {
  font-size: 40px;
  font-weight: 700;
  display: flex;
  align-items: center;
}

.slogan {
  font-size: 14px;
  font-weight: 200;
  font-style: italic;
  width: 70%;
  text-align: center;
}

.get-start-button {
  display: flex;
  align-items: center;
  gap: 13px;
  border: 1px solid #757575;
  border-radius: 10px;
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.15);
  text-decoration: none;
}

.get-start-button div {
  font-size: 13px;
  color: black;
  font-weight: bold;
}

.get-start-button img {
  width: 15px;
}
</style>