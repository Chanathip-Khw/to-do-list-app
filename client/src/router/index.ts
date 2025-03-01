import { createRouter, createWebHistory} from "vue-router";
import type { RouteRecordRaw } from 'vue-router';
import Start from "../pages/Start.vue";
import Login from "../pages/Login.vue";
import Signup from "../pages/Signup.vue";
import Home from "../pages/Home.vue";
import Profile from "../pages/Profile.vue";
import CreateTask from "../pages/CreateTask.vue";
import EditTask from "../pages/EditTask.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Start",
    component: Start,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  { path: "/signup", name: "Signup", component: Signup },
  { path: "/home", name: "Home", component: Home },
  { path: "/profile", name: "Profile", component: Profile },
  { path: "/create", name: "Create", component: CreateTask },
  { path: "/edit/:id", name: "Edit", component: EditTask, props: true },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
