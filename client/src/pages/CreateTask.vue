<template>
  <div class="create-page">
    <header>
      <router-link to="/home">
        <img class="go-back" src="../assets/images/arrowback.svg" />
      </router-link>
      <div>Create a new task</div>
      <img class="menu" src="../assets/images/menu.svg" />
    </header>
    <form class="task-detail" @submit="createTask">
      <TaskName v-model="taskName" />
      <CategorySelector
        :categories="categories"
        :selectedCategory="selectedCategory"
        @update:selectedCategory="handleSelectCategory"
      />
      <DateSelector v-model="date" />
      <div class="time">
        <TimeSelector v-model="startTime" label="Start Time" />
        <TimeSelector v-model="endTime" label="End Time" />
      </div>
      <PrioritySelector
        :priorities="priorities"
        :selectedPriority="selectedPriority"
        @update:selectedPriority="handleSelectPriority"
      />
      <DescriptionBox v-model="description" />
      <button class="create-button" type="submit">Create Task</button>
    </form>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import TaskName from "../components/create/TaskName.vue";
import CategorySelector from "../components/create/CategorySelector.vue";
import DateSelector from "../components/create/DateSelector.vue";
import TimeSelector from "../components/create/TimeSelector.vue";
import PrioritySelector from "../components/create/PrioritySelector.vue"; // Import the new PrioritySelector component
import DescriptionBox from "../components/create/DescriptionBox.vue";

export default {
  name: "CreateTask",
  components: {
    TaskName,
    CategorySelector,
    DateSelector,
    TimeSelector,
    PrioritySelector,
    DescriptionBox,
  },
  setup() {
    const taskName = ref("");
    const categories = ref(["Dailytasks", "Work", "Learning", "Groceries"]);
    const selectedCategory = ref<string | null>(null);
    const date = ref("");
    const startTime = ref("");
    const endTime = ref("");
    const priorities = ref(["Low", "Medium", "High"]);
    const selectedPriority = ref<string | null>(null);
    const description = ref("");
    const router = useRouter();

    const handleSelectCategory = (category: string) => {
      selectedCategory.value = category;
    };

    const handleSelectPriority = (priority: string) => {
      selectedPriority.value = priority;
    };

    const createTask = () => {
      router.push("/home");
    };

    return {
      taskName,
      categories,
      selectedCategory,
      handleSelectCategory,
      date,
      startTime,
      endTime,
      priorities,
      selectedPriority,
      handleSelectPriority,
      description,
      createTask,
    };
  },
};
</script>

<style scoped>
.create-page {
  margin: 50px 30px;
}

header {
  display: flex;
  justify-content: space-between;
}

header div {
  font-weight: 700;
}

form {
  margin-top: 50px;
}

form .time {
  display: flex;
  justify-content: space-between;
  gap: 30px;
}

form .create-button {
  margin-top: 40px;
  padding: 10px 50px;
  background-color: #9747ff;
  color: white;
  border: none;
}
</style>
