<template>
  <div class="signup-page">
    <header class="logo-container">
      <img :src="logo" alt="Logo" />
      <div>TodoHive</div>
    </header>
    <section class="signup">
      <div class="topic">Signup</div>
      <img :src="avatar" alt="Avatar" />
      <CustomInputAuthen
        placeholder="username"
        type="text"
        v-model="username"
      />
      <CustomInputAuthen placeholder="email" type="email" v-model="email" />
      <CustomInputAuthen
        placeholder="password"
        type="password"
        v-model="password"
      />
      <CustomInputAuthen
        placeholder="confirm password"
        type="password"
        v-model="confirmPassword"
      />
      <button class="signup-button" @click="handleSignup">Sign up</button>
      <button class="google-signin">
        <img :src="google" alt="Google" />
        <div>Sign in with Google</div>
      </button>
      <div class="login">
        <div>Already have an account?</div>
        <a href="/login">Log in</a>
      </div>
    </section>
    <footer>
      Join our new beta program to test our new experimental features
    </footer>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import logo from "../assets/images/logo.svg";
import avatar from "../assets/images/avatar.svg";
import google from "../assets/images/google.svg";
import CustomInputAuthen from "../components/CustomInputAuthen.vue";

// State
const username = ref("");
const email = ref("");
const password = ref("");
const confirmPassword = ref("");

// Methods
const handleSignup = () => {
  if (password.value !== confirmPassword.value) {
    alert("Passwords do not match!");
    return;
  }
  console.log("User signed up with:", {
    username: username.value,
    email: email.value,
    password: password.value,
  });
};
</script>

<style scoped>
.signup-page {
  background-image: url("../assets/images/background.svg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
}

.logo-container {
  font-size: 16px;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 5px;
  padding-top: 30px;
  padding-left: 30px;
}

.logo-container img {
  width: 12px;
  height: 12px;
}

section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 18px;
  padding-right: 40px;
  padding-left: 40px;
  margin-top: 50px;
}

section .topic {
  font-size: 24px;
  font-weight: 700;
}

section img {
  width: 150px;
  align-self: center;
}

section .signup-button {
  background-color: black;
  color: white;
  font-size: 14px;
  height: 45px;
  border: none;
  cursor: pointer;
}

section .signup-button:hover {
  border: solid white 1px;
}

section .google-signin {
  background-color: rgba(255, 255, 255, 0.3);
  font-size: 14px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

section .google-signin img {
  width: 30px;
}

section .google-signin:hover {
  border: solid black 1px;
}

section .login {
  display: flex;
  gap: 5px;
  font-size: 10px;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
}

section .login a {
  font-weight: 700;
  color: black;
  text-decoration: underline;
}

footer {
  padding-bottom: 30px;
  padding-left: 20vw;
  padding-right: 20vw;
  font-size: 10px;
  text-decoration: underline;
  margin-top: 80px;
}
</style>