<template>
  <div class="profile-page">
    <header>
      <router-link to="/home">
        <img class="go-back" :src="goBackImg" />
      </router-link>
      <div class="image-container">
        <img class="profile-image" :src="user.image" alt="Profile-Image" />
        <img class="choose-button" :src="chooseImage" />
      </div>
      <div class="name">{{ user.name }}</div>
    </header>

    <form @submit.prevent="handleSubmit">
      <CustomInputProfile
        v-model="user.email"
        label="Email"
        type="email"
        id="email"
      />
      <CustomInputProfile
        v-model="user.phone"
        label="Phone"
        type="tel"
        id="phone"
      />
      <button type="submit">Edit</button>
    </form>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import avatar from "../assets/images/avatar.svg";
import goBackImg from "../assets/images/goback.svg";
import chooseImage from "../assets/images/chooseImage.svg";
import CustomInputProfile from "../components/CustomInputProfile.vue";

const user = ref({
  name: "Varun",
  image: avatar,
  email: "varun@gmail.com",
  phone: "+66 0123456789",
});

const handleSubmit = () => {
  console.log("Submitted user data:", user.value);
};
</script>

<style scoped>
.profile-page {
  min-height: 100vh;
}

header {
  background-image: url("../assets/images/profileBackground.svg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  height: 300px;
}

header .go-back {
  position: absolute;
  left: 25px;
  top: 25px;
}

header .image-container {
  position: relative;
  display: inline-block;
  margin-top: 100px;
}

header .image-container .profile-image {
  width: 130px;
  height: 130px;
  border-radius: 50%;
  object-fit: cover;
}

header .image-container .choose-button {
  position: absolute;
  bottom: 5px;
  right: 10px;
}

header .name {
  font-size: 15px;
  font-weight: 700;
}

form {
  margin: 70px 40px;
  display: flex;
  flex-direction: column;
  gap: 30px;
}

form button {
  background-color: #9747ff;
  border-radius: 12px;
  padding: 20px 30px;
  width: 100%;
  color: white;
  font-size: 18px;
  font-weight: 700;
  margin-top: 15px;
}
</style>
