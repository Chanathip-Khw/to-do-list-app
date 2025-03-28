<template>
  <div class="create-page">
    <header>
      <router-link to="/home">
        <img class="go-back" src="../assets/images/arrowback.svg" alt="Go Back" />
      </router-link>
      <div>Create a new task</div>
      <img class="menu" src="../assets/images/menu.svg" alt="Menu" />
    </header>
    <form class="task-detail" @submit.prevent="createTask">
      <!-- Task Name -->
      <TaskName v-model="taskName" />

      <!-- Category Selector -->
      <CategorySelector
        :categories="categories"
        :selectedCategory="selectedCategory"
        @update:selectedCategory="handleSelectCategory"
      />

      <!-- Date Selector -->
      <DateSelector v-model="date" />

      <!-- Time Selectors -->
      <div class="time">
        <TimeSelector v-model="startTime" label="Start Time" />
        <TimeSelector v-model="endTime" label="End Time" />
      </div>

      <!-- Priority Selector -->
      <PrioritySelector
        :priorities="priorities"
        :selectedPriority="selectedPriority"
        @update:selectedPriority="handleSelectPriority"
      />

      <!-- Description Box -->
      <DescriptionBox v-model="description" />

      <!-- Submit Button -->
      <button class="create-button" type="submit">Create Task</button>
    </form>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import TaskName from "../components/create/TaskName.vue";
import CategorySelector from "../components/create/CategorySelector.vue";
import DateSelector from "../components/create/DateSelector.vue";
import TimeSelector from "../components/create/TimeSelector.vue";
import PrioritySelector from "../components/create/PrioritySelector.vue";
import DescriptionBox from "../components/create/DescriptionBox.vue";

// Form fields
const taskName = ref<string>("");
const categories = ref<string[]>(["Dailytasks", "Work", "Learning", "Groceries"]);
const selectedCategory = ref<string | null>(null);
const date = ref<string>("");
const startTime = ref<string>("");
const endTime = ref<string>("");
const priorities = ref<string[]>(["Low", "Medium", "High"]);
const selectedPriority = ref<string | null>(null);
const description = ref<string>("");

// Router instance
const router = useRouter();

// Handle category selection
const handleSelectCategory = (category: string) => {
  selectedCategory.value = category;
};

// Handle priority selection
const handleSelectPriority = (priority: string) => {
  selectedPriority.value = priority;
};

// Create task
const createTask = () => {
  // Validate required fields
  if (!taskName.value || !selectedCategory.value || !date.value || !startTime.value || !endTime.value) {
    alert("Please fill in all required fields before creating the task.");
    return;
  }

  // Simulate task creation (replace with API call if needed)
  console.log("Task Created:", {
    taskName: taskName.value,
    category: selectedCategory.value,
    date: date.value,
    startTime: startTime.value,
    endTime: endTime.value,
    priority: selectedPriority.value,
    description: description.value,
  });

  // Redirect to home page
  router.push("/home");
};
</script>

<style scoped>
.create-page {
  margin: 50px 30px;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header div {
  font-weight: 700;
  font-size: 18px;
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
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
}

form .create-button:hover {
  background-color: #7a3bcc;
}
</style>