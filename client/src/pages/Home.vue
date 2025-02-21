<template>
  <div class="home-page">
    <header>
      <div class="greeting">
        <div class="name">Hello {{ user.name }},</div>
        <div class="message">You have work today</div>
      </div>
      <router-link to="/profile">
        <img :src="user.image" alt="avatar" />
      </router-link>
    </header>
    <section class="count-by-category">
      <CategoryCard
        v-for="(count, category) in categoryCounts"
        :key="category"
        :category="category"
        :count="count"
      />
    </section>
    <section class="tasks">
      <div class="today-task">Todays Tasks</div>
      <div class="task-card-container">
        <TaskCard v-for="task in tasks" :key="task.id" :task="task" />
      </div>
      <button @click="navigateToCreate" class="create-navigate">
        Create new Task
      </button>
    </section>
  </div>
</template>

<script lang="ts">
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import avatar from "../assets/images/avatar.svg";
import CategoryCard from "../components/CategoryCard.vue";
import TaskCard from "../components/TaskCard.vue";

export default {
  name: "Home",
  components: { CategoryCard, TaskCard },
  setup() {
    const user = ref({
      name: "Varun",
      image: avatar,
    });

    const tasks = ref([
      {
        id: 1,
        name: "Morning Jog",
        category: "Dailytasks",
        startTime: "07:00",
        endTime: "08:00",
      },
      {
        id: 2,
        name: "Team Meeting",
        category: "Work",
        startTime: "09:00",
        endTime: "10:00",
      },
      {
        id: 3,
        name: "Study React",
        category: "Learning",
        startTime: "13:00",
        endTime: "15:00",
      },
      {
        id: 4,
        name: "Grocery Shopping",
        category: "Groceries",
        startTime: "17:00",
        endTime: "18:00",
      },
    ]);

    const router = useRouter();

    const categoryCounts = computed(() => {
      return tasks.value.reduce((acc: any, task: any) => {
        acc[task.category] = (acc[task.category] || 0) + 1;
        return acc;
      }, {});
    });

    const navigateToCreate = () => {
      router.push("/create");
    };

    return {
      user,
      tasks,
      categoryCounts,
      navigateToCreate,
    };
  },
};
</script>

<style scoped>
.home-page {
  margin: 25px;
}

header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

header .name {
  font-size: 15px;
  font-weight: 700;
}

header .message {
  font-size: 9px;
  color: #757575;
}

header img {
  width: 50px;
  height: 50px;
  border: solid 1px black;
  border-radius: 50%;
  object-fit: cover;
}

.count-by-category {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 10px;
  margin-top: 40px;
}

.tasks {
  margin-top: 35px;
}

.tasks .today-task {
  font-size: 11px;
  font-weight: 700;
  text-align: left;
}

.tasks .task-card-container {
  margin-top: 25px;
}

.tasks .create-navigate {
  background-color: #9747ff;
  border-radius: 10px;
  width: 100%;
  padding: 17px 0px;
  color: white;
  font-size: 18px;
  font-weight: 700;
}
</style>
