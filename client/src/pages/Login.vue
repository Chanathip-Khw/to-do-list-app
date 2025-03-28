<template>
  <div class="login-page">
    <header class="logo-container">
      <img :src="logo" alt="Logo" />
      <div>TodoHive</div>
    </header>
    <section class="signin">
      <div class="welcome-back">Welcome Back!</div>
      <CustomInputAuthen
        placeholder="username"
        type="text"
        v-model="username"
      />
      <CustomInputAuthen
        placeholder="password"
        type="password"
        v-model="password"
      />
      <button class="login" @click="handleLogin">Login</button>
      <button class="google-signin">
        <img :src="google" alt="Google" />
        <div>Sign in with Google</div>
      </button>
      <div class="signup">
        <div>Don't have an account?</div>
        <a href="/signup">Sign Up</a>
      </div>
    </section>
    <footer>
      Join our new beta program to test our new experimental features
    </footer>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import logo from "../assets/images/logo.svg";
import google from "../assets/images/google.svg";
import CustomInputAuthen from "../components/CustomInputAuthen.vue";

// State
const username = ref("");
const password = ref("");

// Router
const router = useRouter();

// Methods
const handleLogin = () => {
  router.push("/home");
};
</script>

<style scoped>
.login-page {
  background-image: url("../assets/images/background.svg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
}

section .welcome-back {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 15px;
}

section .login {
  background-color: black;
  color: white;
  font-size: 14px;
  height: 45px;
  border: none;
  cursor: pointer;
}

section .login:hover {
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

section .signup {
  display: flex;
  gap: 5px;
  font-size: 10px;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
}

section .signup a {
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
}
</style>